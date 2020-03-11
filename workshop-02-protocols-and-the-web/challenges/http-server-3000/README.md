To run with [Docker](https://www.docker.com/):

#### Build the image

```
docker build -t http-server-3000 .
```

#### Run the container

```
docker run -d -p 2001:2001 -t http-server-3000
```

You should then be able to browse to http://0.0.0.0:2001
