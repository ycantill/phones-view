# Image
FROM node:14

# Create app directory
WORKDIR /usr/src/phones-view

# copy package files
COPY package.json ./

# install modules
RUN yarn install

# Bundle app source
COPY . .

# run application
EXPOSE 2512
CMD [ "yarn", "serve" ]