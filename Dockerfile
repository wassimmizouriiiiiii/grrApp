# Stage 1: Build the Angular application
FROM node:20.18.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Stage 2: Serve the application using Nginx
FROM nginx:1.21

# Copy the built application from the previous stage
COPY --from=build /app/dist/grr/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
