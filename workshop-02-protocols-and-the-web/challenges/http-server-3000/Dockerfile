FROM node:alpine

RUN apk add --no-cache --update \
    python3 \
    socat \
    chromium \
    nss \
    freetype \
    freetype-dev \
    udev \
    harfbuzz \
    ca-certificates \
    ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2001
CMD [ "./start.sh", "./main.py", "2001" ]
