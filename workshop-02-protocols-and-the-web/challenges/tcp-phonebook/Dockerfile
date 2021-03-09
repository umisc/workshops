FROM python:3.7-alpine

RUN apk add --no-cache --update socat
RUN adduser --shell /bin/sh --uid 2002 --disabled-password 2002

WORKDIR /opt/tcp-phonebook

COPY . .

EXPOSE 2002
CMD [ "./start.sh", "./main.py", "2002" ]
