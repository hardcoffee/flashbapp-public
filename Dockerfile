FROM node

WORKDIR /flashbapp

ADD . /flashbapp

RUN /bin/bash -c 'npm install'
RUN /bin/bash -c 'npm run typings install'
RUN /bin/bash -c 'npm install concurrently'
RUN /bin/bash -c 'npm install lite-server'
RUN /bin/bash -c 'npm install typescript'
