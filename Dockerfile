FROM node:21-alpine as build

WORKDIR .

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:alpine3.18

COPY --from=build ./dist /usr/share/nginx/html

COPY generate-config.sh .

COPY custom-nginx.template /etc/nginx/conf.d/

RUN chmod +x generate-config.sh

EXPOSE 80

ENTRYPOINT [ "/bin/sh", "generate-config.sh"]
