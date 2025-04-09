FROM node:18-alpine

WORKDIR /app

# Install all dependencies (including devDependencies)
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3001

# Start the application
CMD ["npm", "run", "prod"]
