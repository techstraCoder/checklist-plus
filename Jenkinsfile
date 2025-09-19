pipeline {
    agent any
    environment {
        FRONTEND_IMAGE = '192.168.0.103:5000/checklistplus-app:v1'
        BACKEND_IMAGE  = '192.168.0.103:5000/checklistplus-php:v1'
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
                        sh "docker build -t ${FRONTEND_IMAGE} ."
                        sh "docker push ${FRONTEND_IMAGE}"
                    }

                    // Deploy frontend stack
                    sh "docker service update --image ${FRONTEND_IMAGE} --force ${STACK_NAME}_checklistplus-app"
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
                    sh "docker service update --image ${BACKEND_IMAGE} --force ${STACK_NAME}_checklistplus-php"
                }
            }
        }
    }
}










