# Use a lightweight web server image
FROM nginx:alpine

# Copy the frontend files to the Nginx server's root directory
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Expose the port Nginx listens on
EXPOSE 80
