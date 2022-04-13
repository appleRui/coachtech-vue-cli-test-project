FROM node:14.19.0-alpine

ARG WORKDIR

ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0

WORKDIR ${HOME}
RUN npm install -g @vue/cli

EXPOSE 8080