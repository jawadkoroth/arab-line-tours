# Use an official OpenJDK base image
FROM openjdk:11-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven-built jar into the container
COPY target/arab-line-tours-1.0-SNAPSHOT-jar-with-dependencies.jar /app/arab-line-tours.jar

# Expose port if needed (default is 8080 for web services)
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "arab-line-tours.jar"]
