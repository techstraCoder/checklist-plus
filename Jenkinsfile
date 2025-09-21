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
                  def CONTAINER_FRONTEND = sh(script: "docker ps -q -f name=checklistreact_checklistplus-app", returnStdout: true).trim() 
                  sh "docker cp frontend/build/. ${CONTAINER_FRONTEND}:/usr/share/nginx/html/checklistplus"
                }
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
                  def CONTAINER_FRONTEND = sh(script: "docker ps -q -f name=checklistreact_checklistplus-app", returnStdout: true).trim() 
                  sh "docker cp frontend/build/. ${CONTAINER_FRONTEND}:/usr/share/nginx/html/checklistplus"
                }
            }
        }
    }
}





