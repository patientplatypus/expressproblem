#FROM node:argon
FROM node:8

RUN ["adduser",  "--home",  "/usr/src/app", "--system", "sandboxuser"]
RUN ["chown", "-R", "sandboxuser", "/usr/src/app"]
RUN ["chmod", "-R", "u+rwx", "/usr/src/app"]

COPY ./shared /usr/src/app
RUN cd /usr/src/app && npm install

COPY start.sh /
RUN chmod 755 /start.sh

RUN apt-get update

# Install python 3
RUN apt-get install -y python3

EXPOSE 3000

CMD ["/start.sh"]
