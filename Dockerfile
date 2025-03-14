# Use OpenJDK 17 as the base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file into the container
COPY target/arab-line-tours-1.0-SNAPSHOT-jar-with-dependencies.jar /app/arab-line-tours.jar

# Expose port (if needed, default is 8080 for web services)
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "arab-line-tours.jar"]
