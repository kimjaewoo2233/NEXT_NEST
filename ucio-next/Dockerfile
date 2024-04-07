FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci

COPY . .

RUN npm run build

# ENV NODE_ENV production

COPY /next.config.mjs ./
COPY /public ./public
COPY /.next ./.next
COPY /node_modules ./node_modules
COPY /package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]