To run with [Docker](https://www.docker.com/):

#### Build the image

```bash
docker build -t pizza-shop .
```

#### Run the container

```bash
docker run -d -p 6001:6001 -t pizza-shop --restart always
```

You should then be able to `nc 0.0.0.0 6001`.
