FROM alpine:3.7

RUN apk add --no-cache --update socat gcc libc-dev
RUN adduser -s /bin/sh -u 6001 -D 6001

WORKDIR /opt/pizza-shop

COPY pizza-shop.c .
COPY flag.h .
RUN gcc -o pizza-shop ./pizza-shop.c

COPY start.sh .
RUN chmod 755 ./start.sh

USER 6001
EXPOSE 6001
ENTRYPOINT ./start.sh ./pizza-shop 6001
