FROM node:18
WORKDIR /app

COPY ./package.json .
COPY ./vite.config.ts .

#install npm used to run the project
RUN npm install
COPY . .

#install some nice to haves should be removed in production image
RUN apt update
RUN apt install python3 -y
RUN apt install bash -y 
RUN apt install vim -y
RUN apt install sudo -y 
RUN apt install git -y


EXPOSE 3000
# required for docker desktop port mapping
 
CMD ["npm", "run", "dev"]
