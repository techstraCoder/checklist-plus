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
                      sh 'rm -rf ${env.WORKSPACE}/nginx_data/*'
                      // Copy build output into host folder
                       dir('frontend'){
                        sh "cp -r /frontend/build/. ${env.WORKSPACE}/nginx_data/"
                       // Set permissions so nginx in container can read
                        sh 'chmod -R 755 ${env.WORKSPACE}/nginx_data'
                       }
                     
                }
            }
        }
    }
}






