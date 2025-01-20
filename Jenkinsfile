pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'wassimmizouri/pedantic_wescoff:latest'
        DOCKER_REGISTRY = 'docker.io'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://your-repository-url.git'
            }
        }

        stage('Build Angular') {
            steps {
                script {
                    // Installer Node.js (si non déjà installé)
                    sh 'npm install'
                    // Construire l'application
                    sh 'npm run build --prod'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Construire l'image Docker
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Utiliser les credentials stockés dans Jenkins pour se connecter au registre Docker
                    withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        // Se connecter au registre Docker
                        sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD $DOCKER_REGISTRY'
                        // Pousser l'image vers le registre
                        sh 'docker push $DOCKER_IMAGE'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Déployer l'application Docker (par exemple avec Docker Compose ou sur un serveur distant)
                    sh 'docker run -d -p 80:80 $DOCKER_IMAGE'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
