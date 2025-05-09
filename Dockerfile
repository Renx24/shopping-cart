# Base image with Node to build the project
FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy project files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest and build
COPY . .
RUN npm run build

# Use nginx to serve the built files
FROM nginx:stable-alpine

# Copy custom nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build from previous stage.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3005

CMD ["nginx", "-g", "daemon off;"]
