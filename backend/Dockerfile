FROM node:14

LABEL Muhammad_Syifaul_Ikrom_Almasyriqi <1941720057@student.polinema.ac.id>
RUN mkdir -p /backend-api
WORKDIR /backend-api
COPY package*.json /backend-api/

RUN npm install
COPY . .
EXPOSE 4000

CMD [ "node", "index.js" ]