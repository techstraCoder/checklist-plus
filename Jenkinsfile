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
      stage('Build and Deploy Frontend') {
            steps {
                script {
                    // Build and push frontend Docker image
                    dir('frontend') {
                        sh 'ls -la'
                        sh "npm install"
                        sh "npm run build"
                    }
                   sh "chmod -R 755 ${WORKSPACE}/nginx_data"  
                   sh "cp -r frontend/build/. ${WORKSPACE}/nginx_data/"
                   sh "chown -R 1000:1000 ${WORKSPACE}/nginx_data"  
                }
            }
        }
    }
}




