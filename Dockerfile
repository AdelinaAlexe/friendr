#Stage 1: build the backend
FROM node:18-alpine AS backend-build

WORKDIR /backend

# ./ = workdirectory din aplicatie
COPY backend/package*.json ./
RUN npm install
COPY backend ./


#Stage 2: build the frontend
FROM node:18-alpine AS frontend-build

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm install
COPY frontend ./


#Stage 3: Combine both backend and frontend
FROM node:18-alpine

#Backend
WORKDIR /app
COPY --from=backend-build /backend /app

#Frontend
COPY --from=frontend-build /frontend /app/public

RUN npm install -g @angular/cli
RUN echo 'cd /app && node index.js & cd /app/public && ng serve --port 4200 --host 0.0.0.0' > /start-apps.sh
RUN chmod +x /start-apps.sh

EXPOSE 4200
#EXPOSE 3000

CMD [ "sh", "-c", "/start-apps.sh" ]
