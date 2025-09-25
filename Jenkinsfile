pipeline {
  agent any
  environment {
    CI            = 'false'
    SERVICE_NAME  = "checklistreact_checklistplus-app"
    // Use a host path outside the source tree — not the same as the build directory
    HOST_PATH     = "/var/jenkins_home/nginx_data/checklistplus"
    BUILD_OUTPUT  = "frontend/build"
    CONTAINER_PATH = "/usr/share/nginx/html/checklistplus"
    // Optionally you can define DOCKER_HOST or context if your Swarm manager is remote
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
          sh 'docker --version'

          // Create the host directory if needed
          sh "mkdir -p ${HOST_PATH}"
          // Clean the existing files
          sh "rm -rf ${HOST_PATH}/*"
          // Copy the build output into the host directory
          sh "cp -r ${BUILD_OUTPUT}/. ${HOST_PATH}/"
          // Fix permissions
          sh "chmod -R 755 ${HOST_PATH}"

          // Then force service update (assuming service is mounting HOST_PATH → CONTAINER_PATH)
          sh "docker service update --force ${SERVICE_NAME}"

          // Show status
          sh "docker service ls | grep ${SERVICE_NAME}"
          sh "docker service ps ${SERVICE_NAME}"
        }
      }
    }
  }
  post {
    failure {
      echo "Deployment failed; inspect logs or rollback."
    }
  }
}
