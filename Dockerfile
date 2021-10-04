FROM node

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9005

CMD ["npm","start"]
