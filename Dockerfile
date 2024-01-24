# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install
RUN npm install --global http-server
RUN npm install --global serve
RUN npm start

# Bundle the source code inside the Docker image
COPY . .

# Make the container's port available to the outside
# This should match with the port that your app listens on
EXPOSE 3000

# Define the command to run your app (use CMD ["executable", "param1", "param2"] format)
CMD ["node", "app.js"]
