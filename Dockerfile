# Use the Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application's port (e.g., 3000)
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
