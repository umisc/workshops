To run with [Docker](https://www.docker.com/):

#### Build the image

```
docker build -t misccats-flag-delivery-service .
```

#### Run the container

```
docker run -d -p 2525:2525 -t misccats-flag-delivery-service
```

You should then be able to `nc 0.0.0.0 2525`
