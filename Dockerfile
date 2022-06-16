# Dockerfile

# pull the official docker image
FROM python:3.7-slim

# set work directory
WORKDIR /app

# set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip3 install --upgrade pip 
COPY requirements.txt .
RUN pip3 install -r requirements.txt
RUN pip3 install --upgrade tensorflow
# copy project
COPY . .