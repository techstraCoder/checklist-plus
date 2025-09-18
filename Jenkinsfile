pipeline {
    agent any
    tools {
       nodejs 'Node js 19'  // ensure this matches the "Name" in Global Tool Config
    }
    environment {
        FRONTEND_IMAGE = 'localhost:5000/checklistplus-app:v1'
        BACKEND_IMAGE  = 'localhost:5000/checklistplus-php:v1'
        STACK_NAME     = 'checklistreact'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    sh 'node --version'
                    // Checkout both frontend and backend
                    dir('frontend') { checkout scm }
                    dir('checklist-backend') { checkout scm }
                }
            }
        }

        stage('Build and Deploy Frontend') {
            when {
                changeset "**/frontend/**"
            }
            steps {
                script {
                    // Build and push frontend Docker image
                    dir('frontend') {
                        sh 'npm install && npm run build'
                        sh "docker build -t ${FRONTEND_IMAGE} ."
                        sh "docker push ${FRONTEND_IMAGE}"
                    }

                    // Deploy frontend stack
                    sh "docker stack deploy -c docker-compose.yml ${STACK_NAME}"
                }
            }
        }

        stage('Build and Deploy Backend') {
            when {
                changeset "**/checklist-backend/**"
            }
            steps {
                script {
                    // Build and push backend Docker image
                    dir('checklist-backend') {
                        sh "docker build -t ${BACKEND_IMAGE} ."
                        sh "docker push ${BACKEND_IMAGE}"
                    }

                    // Deploy backend stack
                    sh "docker stack deploy -c docker-compose.yml ${STACK_NAME}"
                }
            }
        }
    }
}


