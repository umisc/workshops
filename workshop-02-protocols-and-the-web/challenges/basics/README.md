To run with [Docker](https://www.docker.com/):

#### Build the image

```
docker build -t basics .
```

#### Run the container

```
docker run -d -p 3000:3000 -t basics
```

You should then be able to browse to http://0.0.0.0:3000
