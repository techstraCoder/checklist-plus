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
                        sh "npm install"
                        sh "npm run build"
                    }
                }
            }
        }
       stage('Deploy Frontend') {
            steps {
                script {
                   // Clean old files
                      sh 'rm -rf nginx_data/*'
                      // Copy build output into host folder
                      sh "cp -r frontend/build/. nginx_data/"
                      // Set permissions so nginx in container can read
                      sh 'chmod -R 755 nginx_data'
                      sh "docker service update --force checklistreact_checklistplus-app"
                }
            }
        }
    }
}




