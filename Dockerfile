FROM node:12.16.3

WORKDIR /usr/src/portfolio-fe

COPY ./ ./

RUN npm install

CMD [ "/bin/bash" ]
