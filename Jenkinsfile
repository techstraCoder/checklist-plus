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
                  sh 'mkdir -p /usr/local/share/workspace/docker_compose/nginx_data/html/checklistplus'
                  sh 'chown -R 1000:1000 /usr/local/share/workspace'
                  sh 'chmod -R 755 /usr/local/share/workspace' 
                  sh 'cp -rv frontend/build/* /usr/local/share/workspace/docker_compose/nginx_data/html/checklistplus/'
                }
            }
        }
      stage('Build and Deploy backend') {
            steps {
                script {
                    // Build and push frontend Docker image
                    dir('chcklist-backend') {
                       sh 'mkdir -p /usr/local/share/workspace/docker_compose/nginx_data/html/checklistplus/api'
                       sh 'cp -rv ./* ./.??* /usr/local/share/workspace/docker_compose/nginx_data/html/checklistplus/api/ 2>/dev/null || true'
                       sh 'chown -R 1000:1000 /usr/local/share/workspace'
                       sh 'chmod -R 755 /usr/local/share/workspace/docker_compose/nginx_data/html/checklistplus/api' 
                    }
                 
                }
            }
        } 
 }
}


















