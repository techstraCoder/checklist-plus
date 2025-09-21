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
                    // Deploy frontend stack
                   sh "docker cp frontend/build/. 760e6e757d32:/usr/share/nginx/html/checklistplus"
                }
            }
        }
    }
}




