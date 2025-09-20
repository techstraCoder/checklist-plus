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
                   sh 'chmod -R 755 /usr/share/nginx/html/checklistplus' 
                   sh 'cp -r frontend/build/* /usr/share/nginx/html/checklistplus'
                }
            }
        }
    }
}


