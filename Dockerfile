# Use Node.js as base image
FROM node:12.2.0-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Express server will run (if needed)
EXPOSE 3000

# Command to start your application
CMD ["npm", "start"]
