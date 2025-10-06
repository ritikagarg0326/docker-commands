FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Expose the port your app listens on
EXPOSE 8080

# Start the app
CMD ["node", "server.js"]
