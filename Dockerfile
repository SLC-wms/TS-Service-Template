FROM node:lts-alpine AS builder
RUN npm install -g npm
COPY *.json ./
RUN npm install -D
COPY src/ ./src
RUN npm run build

FROM node:lts-alpine AS production
RUN npm install -g npm
COPY package.json ./
RUN npm install --omit=dev
COPY --from=builder build/ ./build
CMD npm run start
