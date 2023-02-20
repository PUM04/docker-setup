
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

|Subject| Video|
|-------|------|
|Dockerfile|https://www.youtube.com/watch?v=QePBbG5MoKk|
|Docker compose|https://www.youtube.com/watch?v=TSySwrQcevM|

> WINDOWS USERS: Docker volumes are used for real time updating files in the container, these apparently have problems working with windows. So WSL is recommended for development in windows. Docker volumes are defined in the docker-compose.yaml file. It should work without WSL if you remove the volumes from docker-compose.yaml file but you might have to create a new container for every change to the code.

## Useful commands

```sh
docker ps
```
Displays all currently running containers and some information about them such as container ID

```sh
docker exec -it "CONTAINER ID" /bin/sh 
```
Terminal command to enter a container using the "/bin/sh" shell in the linux alpine container


```sh
docker-compose down 
```
Removes containers created with docker-compose up

# Troubleshooting
>Linux: Have to run sudo on every docker command

    Create the docker group if it does not exist

```sh
$ sudo groupadd docker
```

Add your user to the docker group.

```sh
$ sudo usermod -aG docker $USER
```

Log in to the new docker group (to avoid having to log out / log in again; but if not enough, try to reboot):

```sh
$ newgrp docker
```

Check if docker can be run without root

```sh
$ docker run hello-world
```

    Reboot if still got error

```sh
$ reboot
```




