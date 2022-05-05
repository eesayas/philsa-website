FROM node:12-alpine
WORKDIR /usr/src/app

COPY /package*.json ./
RUN yarn install --update-checksums --network-timeout 100000
COPY / ./
RUN yarn install 
RUN yarn build

EXPOSE 1338
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=1338

CMD ["yarn", "start"]
