pipeline {
    agent any
    def nome = process.env.NAME

    stages {
        stage('Build') {
            steps {
                sh 'sudo sudo /root/.nvm/versions/node/v12.18.0/bin/yarn install'
                sh "sudo mkdir /home/${nome}/"
                sh "sudo cp -r * /home/${nome}/"
                
            }
        }
        
    }
}