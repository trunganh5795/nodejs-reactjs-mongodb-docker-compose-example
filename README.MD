How to intialize mongo server with dump data:\
When a container is started for the first time it will execute files with extensions .sh and .js that are found in /docker-entrypoint-initdb.d. Files will be executed in alphabetical order. .js files will be executed by mongosh (mongo on versions below 6) using the database specified by the MONGO*INITDB_DATABASE variable, if it is present, or test otherwise. You may also switch databases within the .js script.\
refer : https://hub.docker.com/*/mongo ( search on keyword "Initializing a fresh instance" )

open up log :

- sudo docker compose logs -f server
- sudo docker compose logs -f mongodbserver

docker command line:

- sudo docker rm -f $(sudo docker ps -aq) // remove all containers
- sudo docker stop $(sudo docker ps -q) // stop all containers
