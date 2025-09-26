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
<<<<<<< HEAD
                  def CONTAINER_FRONTEND = sh(script: "docker ps -q -f name=checklistreact_checklistplus-app", returnStdout: true).trim() 
                  sh "docker cp frontend/build/. ${CONTAINER_FRONTEND}:/usr/share/nginx/html/checklistplus"
                }
            }
        }
       stage('Build and Deploy Backend') {
            steps {
                script {
                    // Deploy Backend
                    dir('checklist-backend') {
                      def CONTAINER_BACKEND = sh(script: "docker ps -q -f name=checklistreact_checklistplus-php", returnStdout: true).trim() 
                      sh "docker cp ./checklist-backend/. ${CONTAINER_BACKEND}:/var/www/html/checklistplus/api" 
                    }        
                }
            }
        }  
    }
}
=======
                }
            }
        } 
    }
}



>>>>>>> e665602e9a9a8c9874fc178b4853fcf69c424dc1
