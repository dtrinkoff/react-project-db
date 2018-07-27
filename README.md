
# Front Row API -  Database

This project is meant to be used with the [Front Row API](https://git.catalystitservices.com/CatalystTraining/garden_center_api)
example project. The Dockerfile in this project creates a modified MongoDB
Database with sample data for the Front Row API.

## Getting Started

These instructions will get you a copy of the project up and running on your local
machine for development and testing purposes.

	$ git clone git@git.catalystitservices.com:the_front_row_group_project/front_row_database_saep.git

Make sure that you have [Docker](https://www.docker.com/products/overview) installed
on your local machine. You will need Docker in order to run the sample database image.

### DockerHub Repo

<!-- This project is built using GitLab CI and deployed to [frapi-mongodb](https://cloud.docker.com/swarm/catalystdevlabs/repository/docker/catalystdevlabs/gcapi-mongodb/general) DockerHub Repo -->

### Using the Docker Image

The following sections outline the use

#### Building The Docker Image

```
$ docker build -t <docker username>/frdb .
```
#### Running The Docker Image

```
$ docker run -d -p 27017:27017 --name frdb <docker username>/frdb
```

#### Connecting to MongoDB

You can use MongoDB Compass, RoboMongo, or the Terminal to connect to the
running MongoDB instance. All collections are located in the 'frdb' database.

```
In a terminal window:

$ docker exec -it frdb mongo - will connect to the running container and start the mongo shell.
...
> show databases
	admin
	frdb
	local
> type your commands here...
```

## Deployment

<!-- Add additional notes about how to deploy this on a live system -->

## Built With

* [Docker](https://www.docker.com/) - Containerization Engine
* [MongoDB](https://www.mongodb.com/) - Document Database Management System

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Yibe, Alicia, David and Hao** - *Initial work* - [yandargie@catalystdevworks.com,awaide@catalystdevworks.com,hgu@catalystdevworks.com & dtrinkoff@catalystdevworks.com]
