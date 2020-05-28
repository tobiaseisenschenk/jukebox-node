pipeline {
	agent any
	stages {
		stage('Lint JS & Dockerfile') {
			steps {
				sh 'sudo apt-get install build-essential'
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