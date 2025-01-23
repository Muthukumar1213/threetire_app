# Use MySQL as the base image
FROM mysql:8.0

# Set MySQL root password environment variable
ENV MYSQL_ROOT_PASSWORD=password

# Copy the initialization script
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306
