#use an official node runtime
FROM node:20.11.0

#set the working directory in the container
WORKDIR /usr/src/app

#copy package.json and package-lock.json to the working directory
COPY package*.json ./


#install node.js dependencies
RUN npm install

#Copy rest of the application code
COPY . .

#Expose prt which the app runs on 
EXPOSE 3003

#command to run your aspplication
CMD ["node","server.js"]