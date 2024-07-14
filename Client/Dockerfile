# Dockerfile for Vite-based React client

# Use an official Node.js runtime as a parent image
FROM node:22.4.1-alpine

# Set the working directory in the container to Client/src
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the Client directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy local files from Client/src to the working directory
COPY ./src ./src

# Expose port 5173 (the default port for Vite)
EXPOSE 5173

# Command to run the Vite development server
CMD ["npm", "run", "dev"]
