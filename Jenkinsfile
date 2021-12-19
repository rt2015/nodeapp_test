pipeline {

  environment {
    dockerimagename = "rtopuz/nodeapptest"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/rt2015/nodeapp_test'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }
    stage('Test') { 
            steps {
              
              sh 'npm install'              
                sh 'npm test' 
            }
        }
     stage('run image') {
      steps{
          sh 'docker run -d -p 3000:3000 rtopuz/nodeapptest'
          input message: 'Finished using the web site? (Click "Proceed" to continue)' 
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhublogin'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deploymentservice.yml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
