pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
                sh 'mkdir /home/teste/'
                sh 'cp -r * /home/teste/'
                
            }
        }
        
    }
}