pipeline {
	agent {
        docker { image 'node:10.20.1-jessie' }
    }
	stages {
		stage('Lint JS & Dockerfile') {
			steps {
				sh 'make install && make lint'
			}
		}
		stage('Deploy with Cloudformation') {
			steps {
				sh 'echo "ongoing..."'
			}
		}
	}
}