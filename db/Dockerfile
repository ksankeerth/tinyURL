FROM postgres:latest

# Set environment variables
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=mypassword

# Copy custom initialization scripts to the container
COPY init.sql /docker-entrypoint-initdb.d/

#docker build -t tinyurl-db .
#docker run -d --name postgres -p 5432:5432 tinyurl-db