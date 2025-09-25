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
                  sh "cp -r ${env.WORKSPACE}/frontend/build/. /var/lib/docker/volumes/checklistreact_nginx_data_html/_data/"
                  sh "chown -R 1000:1000 /var/lib/docker/volumes/checklistreact_nginx_data_html/_data" 
                }
            }
        }
    }
}

