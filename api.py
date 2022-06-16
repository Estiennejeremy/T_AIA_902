import numbers
from tokenize import Number
from typing import Optional
import numpy as np

from fastapi import FastAPI
from pydantic import BaseModel
from qlearning import qlearning
from force import force
import keras
from keras.models import load_model
from rl.agents.dqn import DQNAgent
from rl.policy import EpsGreedyQPolicy
from rl.memory import SequentialMemory
from keras.models import Sequential
from keras.layers import Dense, Activation, Flatten, Embedding, Reshape
from keras.optimizer_v1 import Adam
Adam._name = 'hey'

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
def forceRoute():
    return force()


@app.get("/deepQlearning")
def deepQLearningRoute():
   
    ENV_NAME = "Taxi-v3"

    env = gym.make(ENV_NAME)
    action_size = env.action_space.n
    state_size = env.observation_space.n

    np.random.seed(123)
    env.seed(123)

    model = keras.Sequential()
    model.add(Embedding(500, 10, input_length=1))
    model.add(Reshape((10,)))
    model.add(Dense(50, activation='relu'))
    model.add(Dense(50, activation='relu'))
    model.add(Dense(50, activation='relu'))
    model.add(Dense(action_size, activation='linear'))
    print(model.summary())
    memory = SequentialMemory(limit=50000, window_length=1)
    policy = EpsGreedyQPolicy()
    dqn = DQNAgent(model=model, nb_actions=action_size, memory=memory, nb_steps_warmup=500, target_model_update=1e-2, policy=policy)
    dqn.compile(Adam(lr=1e-3), metrics=['mae'])

    new_model = dqn.load_weights('dqn_Taxi-v3_weights.h5f')

    episodes, total_epochs, total_penalties, frames = new_model.test(env, nb_episodes=5, visualize=True, nb_max_episode_steps=99)
    return {'data': { 'epi': episodes, 'epochs': total_epochs, 'pena':total_penalties}}


@app.post("/qlearning")
def qLearningRoute(item: Item):
    return qlearning(item.episodes, item.gamma, item.alpha, item.epsilon)

