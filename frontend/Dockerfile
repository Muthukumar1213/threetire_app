# Use Nginx as the base image
FROM nginx:alpine

# Copy the HTML file to the default directory of Nginx
COPY index.html /usr/share/nginx/html

# Expose port 80 to serve the frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
