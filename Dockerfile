FROM node:16

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node package-lock.json package.json ./

RUN npm ci

COPY --chown=node . .

CMD ["npm", "run", "dev"]

