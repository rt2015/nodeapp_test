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
              sh 'pwd'
              sh 'npm install'              
              sh 'npm test --detectOpenHandles' 
            }
        }
     stage('run image') {
      steps{
          sh' set -x'
          sh 'docker run -d -p 3000:3000 rtopuz/nodeapptest > .pidfile '
        
          sh ' echo $(cat .pidfile)'
          sh 'set +x'
          input message: 'Finished using the web site? (Click "Proceed" to continue)' 
      }
    }

     stage('kill running image') {
      steps{
          sh 'docker ps'
          sh ' docker stop $(head -c 12  .pidfile) '
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
