To run with [Docker](https://www.docker.com/):

#### Build the image

```
docker build -t tcp-phonebook .
```

#### Run the container

```
docker run -d -p 2002:2002 -t misccats-flag-delivery-service
```

You should then be able to `nc 0.0.0.0 2002`
