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
                   sh 'mkdir -p checklist-data/html'
                   sh 'ls -la checklist-data' 
                   sh 'cp -r ./frontend/build/* C:\Users\BenCoder\Desktop\ben\checklist-plus\checklist-data\html'
                   sh 'chown -R 1000:1000 C:\Users\BenCoder\Desktop\ben\checklist-plus\checklist-data\html' 

                }
            }
        } 
    }

}

