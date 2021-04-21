FROM node:12-alpine AS posts-microservice
WORKDIR /usr/src/app
COPY . .
RUN npm i 
RUN npm run build

FROM node:12.9.1-buster-slim

WORKDIR /tmp

WORKDIR /usr/src/app
COPY --from=posts-microservice /usr/src/app/.dist ./
COPY --from=posts-microservice /usr/src/app/package.json ./
RUN npm install --production
EXPOSE 8080
CMD [ "npm", "start" ]