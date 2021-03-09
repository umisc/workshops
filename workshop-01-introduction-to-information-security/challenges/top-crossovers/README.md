To run with [Docker](https://www.docker.com/):

#### Build the image

```bash
docker build -t top-crossovers .
```

#### Run the container

```bash
docker run -d -p 8080:8080 -t top-crossovers
```

You should then be able to navigate to `http://0.0.0.0:8080` in your browser.
