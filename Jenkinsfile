pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'sudo sudo /root/.nvm/versions/node/v12.18.0/bin/yarn install'
                sh 'sudo mkdir /home/teste/'
                sh 'sudo cp -r * /home/teste/'
                
            }
        }
        
    }
}