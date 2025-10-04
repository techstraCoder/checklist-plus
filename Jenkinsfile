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
                  sh 'sudo mkdir -p nginx_data/html'  
                  sh 'sudo cp -r frontend/build/* nginx_data/html/'
                  sh 'sudo chown -R 1000:1000 nginx_data/html/'
                }
            }
        } 
    }
}









