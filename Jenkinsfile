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
                 sh 'mkdir -p /usr/local/share/workspace/docker_compose/nginx_data/html/chcklistplus'   
                 sh 'cp -r frontend/build/* /usr/local/share/workspace/docker_compose/nginx_data/html/chcklistplus/'
                 sh 'chown -R 1000:1000 /usr/local/share/workspace/docker_compose/nginx_data/html/chcklistplus'
                }
            }
        }
       stage('Deploy for backend') {
           steps {
              script {
                  dir('checklist-backend') {
                     sh 'ls -la /usr/local/share/workspace/docker_compose/backend_data || echo "Directory not found!"'
                     sh 'chmod 755 /usr/local/share/workspace/docker_compose/backend_data'
                     sh 'ls -la /usr/local/share/workspace'
                     sh 'ls -la /usr/local/share/workspace/docker_compose/'
                  }
              }   
           }     
    }
 }
}














