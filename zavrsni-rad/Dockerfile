FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
# start app
CMD ["npm", "start"]