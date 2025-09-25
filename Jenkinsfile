pipeline {
  agent any
  environment {
    CI            = 'false'
    SERVICE_NAME  = "checklistreact_checklistplus-app"
    HOST_PATH     = "/var/jenkins_home/workspace/react-docker/frontend/build"
    CONTAINER_PATH = "/usr/share/nginx/html/checklistplus"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'ls -la'
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
    stage('Deploy to Swarm') {
      steps {
        script {
          echo "Deploying frontend to service ${SERVICE_NAME}"
          // Optional: check Docker is available
          sh 'docker --version'

          // Option A: If your service uses a mounting from host
          // Make sure the host path is updated before restarting
          sh "rm -rf ${HOST_PATH}/* || true"
          sh "cp -r frontend/build/. ${CONTAINER_NAME}/"
          sh "chmod -R 755 ${HOST_PATH}"

          // Force service update
          sh "docker service update --force ${SERVICE_NAME}"

          // Optional: show status
          sh "docker service ls | grep ${SERVICE_NAME}"
          sh "docker service ps ${SERVICE_NAME}"
        }
      }
    }
  }
  post {
    failure {
      echo "Deployment failed; you can inspect logs or rollback."
    }
  }
}

