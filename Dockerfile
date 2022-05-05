FROM node:12-alpine
WORKDIR /usr/src/app

COPY /package*.json ./
RUN yarn install --update-checksums --network-timeout 100000
COPY / ./
RUN yarn install 
RUN yarn build

EXPOSE 3009
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3009

CMD ["yarn", "start"]
