# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Install ffmpeg
RUN apt-get update && \
    apt-get install -y ffmpeg

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies inside the Docker container
RUN npm install

# Copy the rest of the application's code to the working directory
COPY . .

# Make the application's port available to the outside world
EXPOSE 3000

# Define the command to run the application
CMD [ "node", "app.js" ]

# krishnesh kumar

# Abhinav Saxena21:25
