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
                  sh 'sudo mkdir -p /usr/local/share/workspace/docker_compose/nginx_data/html/checklistplus'
                  sh 'sudo chown -R 1000:1000 /usr/local/share/workspace'
                  sh 'sudo chmod -R 755 /usr/local/share/workspace' 
                  sh 'cp -rv frontend/build/* /usr/local/share/workspace/docker_compose/nginx_data/html/checklistplus/'
                }
            }
        }
 }
}














