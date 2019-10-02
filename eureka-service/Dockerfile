# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL maintainer="wanersbh@gmail.com"

ENV PORT=8761

# Make port 8761 available to the world outside this container
EXPOSE 8761

# The application's jar file
ARG JAR_FILE=target/eureka-service-1.0.0-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} eureka-service.jar

# Run the jar file 
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/eureka-service.jar"]