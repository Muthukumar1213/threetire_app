# Use Python as the base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the application code
COPY app.py /app

# Install dependencies
RUN pip install flask mysql-connector-python

# Expose the backend port
EXPOSE 5000

# Start the application
CMD ["python", "app.py"]
