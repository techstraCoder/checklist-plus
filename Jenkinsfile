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
            checkout scm
          }
        }
    }
}
