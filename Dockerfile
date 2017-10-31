FROM node:8 as node_env
WORKDIR .
COPY . .
RUN apt-get -qq update
RUN apt-get -qq -y install npm
RUN apt-get install -qq -y --no-install-recommends apt-utils
RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install
EXPOSE 5000
CMD npm start
