FROM openjdk:11
VOLUME /tmp
EXPOSE 4200
ADD ./build/libs/backEnd-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
