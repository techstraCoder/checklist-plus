pipeline {
    
   agent any
   environment {
    CI = 'false'
   }  
   stages {
       stage('Checkout') {
          steps {
            checkout scm
          }
        }
      stage('Build Frontend') {
            steps {
                script {
                    // Build and push frontend Docker image
                    dir('frontend') {
                        sh 'ls -la'
                        sh "npm run build"
                    }
                }
            }
        }
       stage('Deploy Frontend') {
            steps {
                script {
                   // Clean old files
                      echo "workspace is ${env.WORKSPACE}"
                      sh 'chmod -R 755 /var/jenkins_home/workspace/react-docker/nginx_data'
                      sh "cp -r /var/jenkins_home/workspace/react-docker/frontend/build/. /var/jenkins_home/workspace/react-docker/nginx_data/"  
                }
            }
        }
    }
}










