Etapa 1: Construir la aplicación Angular
FROM node:18-alpine AS build

Establecer el directorio de trabajo
WORKDIR /app

Copiar los archivos de configuración
COPY package.json package-lock.json ./

Instalar las dependencias
RUN npm install

Copiar el resto del proyecto
COPY . .

Construir la aplicación en modo producción
RUN npm run build --prod

Etapa 2: Configurar Nginx para servir la aplicación
FROM nginx:alpine

Elimina el archivo de configuración por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

Copiar los archivos compilados desde la etapa de construcción
COPY --from=build /app/dist/tu-nombre-proyecto-angular /usr/share/nginx/html

Copiar el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

Exponer el puerto 80
EXPOSE 80

Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]