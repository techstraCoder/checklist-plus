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
                   sh 'cp -r ./frontend/build/* .checklist-data/html'
                   sh 'chown -R 1000:1000 .checklist-data/html' 
=======
                    echo "Workspace: ${env.WORKSPACE}"
                    sh "ls -l ${env.WORKSPACE}"
                    sh 'cp -r frontend/build/* ./nginx_data/html'
>>>>>>> e2488d699373e4b4650d37cfe1c5e3bd4ad54843
                }
            }
        } 
    }
}



<<<<<<< HEAD
=======


>>>>>>> e2488d699373e4b4650d37cfe1c5e3bd4ad54843
