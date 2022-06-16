import numbers
from tokenize import Number
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel
from qlearning import qlearning
from force import force
from keras.models import load_model

import gym

app = FastAPI()


class Item(BaseModel):
    gamma: float
    alpha: float
    epsilon: float
    episodes: int


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/bruteforce")
def qLearningRoute():
    return force()


@app.get("/deepQlearning")
def deepQLearningRoute():
   
    ENV_NAME = "Taxi-v3"

    env = gym.make(ENV_NAME)

    new_model = load_model('dql_model')
    episodes, total_epochs, total_penalties, frames = new_model.test(env, nb_episodes=5, visualize=True, nb_max_episode_steps=99)
    return {'data': { 'epi': episodes, 'epochs': total_epochs, 'pena':total_penalties}}


@app.post("/qlearning")
def qLearningRoute(item: Item):
    return qlearning(item.episodes, item.gamma, item.alpha, item.epsilon)

