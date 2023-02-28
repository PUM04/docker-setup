FROM emscripten/emsdk:3.1.32
WORKDIR /app

COPY ./package.json .
COPY ./vite.config.ts .

#install npm used to run the project
RUN npm install
COPY . .
#COPY ./src/build.sh /usr/local/bin/build.sh
#install some nice to haves should be removed in production image
RUN apt update
RUN apt install python3 -y
RUN apt install bash -y 
RUN apt install vim -y
RUN apt install sudo -y 
RUN apt install git -y


EXPOSE 3000
# required for docker desktop port mapping

RUN chmod u+x /app/src/docker_startup.sh

CMD ["bash", "/app/src/docker_startup.sh"]
