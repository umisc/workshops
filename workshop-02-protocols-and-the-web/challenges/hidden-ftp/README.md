To run with [Docker](https://www.docker.com/):

#### Build the image

```
docker build -t hidden-htp .
```

#### Run the container

```
docker run -d -p 21:21 -t hidden-ftp
```

You should then be able to connect to `nc 0.0.0.0 21` (or use an FTP client of your preference)
