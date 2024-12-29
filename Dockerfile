# Base image for both dev and prod
FROM node:20 AS base

WORKDIR /app

COPY package*.json ./

# Development stage (for development environment)
FROM base AS development

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# Production stage (for production environment)
FROM base AS production

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
