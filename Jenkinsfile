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
                  sh 'mkdir -p /usr/local/share/workspace/docker_compose/nginx_data/html'  
                  sh 'cp -r frontend/build/* /usr/local/share/workspace/docker_compose/nginx_data/html'
                  sh 'chown -R 1000:1000 /usr/local/share/workspace/docker_compose/nginx_data/html'  
                }
            }
        } 
    }
}












