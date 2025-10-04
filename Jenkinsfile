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
                 sh 'mkdir -p /usr/share/nginx/html/checklistplus/'
                 sh 'cp -r frontend/build/* /usr/share/nginx/html/checklistplus/'
                 sh 'chown -R 1000:1000 /usr/share/nginx/html/checklistplus'
                }
            }
        }
       stage('Deploy for backend') {
           steps {
              script {
                  dir('checklist-backend') {
                      sh 'mkdir -p /usr/local/share/workspace/docker_compose/backend_data'
                      sh 'cp -r . /usr/local/share/workspace/docker_compose/backend_data'
                      sh 'chown -R 1000:1000 /usr/local/share/workspace/docker_compose/backend_data'
                  }
              }   
           }     
    }
 }
}









