 
FROM node:18-alpine AS build

 
WORKDIR /app

 
COPY package.json package-lock.json ./

 
RUN npm install

 
COPY . .

 
RUN npm run build --prod

 
FROM nginx:alpine

 
RUN rm -rf /usr/share/nginx/html/*

 
COPY --from=build /app/dist/tu-nombre-proyecto-angular /usr/share/nginx/html

 
COPY nginx.conf /etc/nginx/conf.d/default.conf

 
EXPOSE 80

 
CMD ["nginx", "-g", "daemon off;"]