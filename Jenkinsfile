pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/GabrielRUrquiza/Teste-ebac-ui.git'
            }
        }
        stage('Instalar dependencia') {
            steps {
                sh 'npm install'
            }
        }
                stage('Instalar dependencia') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run
            }
        }
    }
}