FROM node:10.20.1-jessie
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80
CMD ["npm", "start"]
