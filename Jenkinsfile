pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'sudo yarn install'
                sh 'sudo mkdir /home/teste/'
                sh 'sudo cp -r * /home/teste/'
                
            }
        }
        
    }
}