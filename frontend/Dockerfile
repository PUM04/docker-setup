FROM node:16-alpine

WORKDIR /app

COPY ./package.json .
COPY ./vite.config.ts .

# RUN apt update

RUN npm install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
