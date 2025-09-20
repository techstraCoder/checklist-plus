pipeline {
    agent any
    environment {
        FRONTEND_IMAGE = '192.168.0.103:5000/checklistplus-app:v${BUILD_NUMBER}'
        BACKEND_IMAGE  = '192.168.0.103:5000/checklistplus-php:v${BUILD_NUMBER}'
        STACK_NAME     = 'checklistreact'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    dir('frontend') { checkout scm }
                    dir('checklist-backend') { checkout scm }
                }
            }
        }

        stage('Build and Deploy Frontend') {
            steps {
                script {
                    // Build and push frontend Docker image
                    dir('frontend') {
                        sh "whoami"
                        sh "id"
                    }
                }
            }
        }
    }
}



