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
                    echo "Workspace: ${env.WORKSPACE}"
                    sh "ls -l ${env.WORKSPACE}"
                    sh 'cp -r .frontend/build/* ./nginx_data/html'
                }
            }
        } 
    }
}




