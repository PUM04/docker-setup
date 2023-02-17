
# docker-setup
This repository contains some examples of how docker is used and a start of the Docker configuration to be used by the project.

# Running
Install docker and clone the repo then run the command
```sh
docker-compose up
```
React app can be accessed by entering localhost:3000 in your web browser
> NOTE: Windows users might have to remove/comment the "volumes" in docker-compose.yaml file 
# Learning
Recommended videos for running a container, understanding Dockerfile and docker-compose.yaml

> WINDOWS USERS: Docker volumes are used for real time updating files in the container, these apparently have problems working with windows. So WSL is recommended for development in windows. Docker volumes are defined in the docker-compose.yaml file. It should work without WSL if you remove the volumes from docker-compose.yaml file but you might have to create a new container for every change.

|Subject| Video|
|-------|------|
|Dockerfile|https://www.youtube.com/watch?v=QePBbG5MoKk|
|Docker compose|https://www.youtube.com/watch?v=TSySwrQcevM|

## Useful commands

```sh
docker ps
```
Displays all currently running containers and some information about them

```sh
docker exec -it "CONTAINER ID" /bin/sh 
```
terminal command to enter a container using the "/bin/sh" shell in the linux alpine container


