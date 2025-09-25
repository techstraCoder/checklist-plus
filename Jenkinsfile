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
                    // Build and push frontend Docker image
                    echo "Workspace is ${env.WORKSPACE}"
                    def cwd = pwd()
                    echo "Current Working : ${cwd}"
                    sh "ls -la /usr/share/nginx/html/checklistplus"
                    sh "chown -R 1000:1000 /usr/share/nginx/html/checklistplus"  
                    sh "mkdir -p ${env.WORKSPACE}/nginx_data_html"  
                    sh "ls -la ${env.WORKSPACE}"
                    sh "cp -r ${env.WORKSPACE}/frontend/build/. ${env.WORKSPACE}/nginx_data_html/"
                    sh "chown -R 1000:1000 ${env.WORKSPACE}/nginx_data_html"  
                }
            }
        }
    }
}
