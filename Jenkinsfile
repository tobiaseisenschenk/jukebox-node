pipeline {
	agent {
        docker { image 'node:10.20.1-jessie' }
    }
	environment {
        HOME = '.'
    }
	stages {
		stage('Lint JS & Dockerfile') {
			steps {
				sh 'make install && make lint'
			}
		}
		stage('Deploy with Cloudformation') {
			steps {
				sh 'docker build --tag=tje512/jukebox-mini .'
			}
		}
	}
}