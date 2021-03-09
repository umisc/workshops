FROM metabrainz/base-image

RUN apt-get update \
    && apt-get install -y --no-install-recommends vsftpd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/run/vsftpd/empty \
 && mkdir -p /etc/vsftpd \
 && mkdir -p /var/ftp \
 && mv /etc/vsftpd.conf /etc/vsftpd.orig \
 && mkdir /etc/service/vsftpd

ADD vsftpd.sh /etc/service/vsftpd/run

RUN echo "MISCCTF{ftp_1s_a_b17_l4m3}" >> /var/ftp/.flag

EXPOSE 21
