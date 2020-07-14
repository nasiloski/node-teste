pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 
                "
                    yarn install
                    mkdir /home/teste/
                    cp -r * /home/teste/
                "
            }
        }
        
    }
}