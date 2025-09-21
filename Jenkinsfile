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
                   sh "docker cp frontend/build/. checklistreact_checklistplus-app.1.muvxk4tg0ea2ti0b17e63rkyx:/usr/share/nginx/html/checklistplus"
                }
            }
        }
    }
}



