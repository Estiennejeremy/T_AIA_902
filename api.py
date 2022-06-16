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


@app.post("/qlearning")
def qLearningRoute(item: Item):
    return qlearning(item.episodes, item.gamma, item.alpha, item.epsilon)


@app.get("/deepQ")
def deepQRoute():
    ENV_NAME = "Taxi-v3"
    env = gym.make(ENV_NAME)
    env.reset()
    env.render()
    env.seed(123)
    from keras.models import Sequential
    from keras.layers import Dense, Activation, Flatten, Embedding, Reshape
    from keras.optimizer_v1 import Adam
    Adam._name = 'hey'
    env.reset()
    env.step(env.action_space.sample())[0]
    import keras
    model = keras.Sequential()
    model.add(Embedding(500, 6, input_length=1))
    model.add(Reshape((6,)))
    from rl.agents.dqn import DQNAgent
    from rl.policy import EpsGreedyQPolicy
    from rl.memory import SequentialMemory
    memory = SequentialMemory(limit=50000, window_length=1)
    policy = EpsGreedyQPolicy()
    action_size = env.action_space.n
    dqn = DQNAgent(model=model, nb_actions=action_size, memory=memory, nb_steps_warmup=500, target_model_update=1e-2, policy=policy)
    dqn.compile(Adam(lr=1e-3), metrics=['mae'])
    dqn.load_weights('./test_dql/dqn_Taxi-v3_weights.h5f')
    history = dqn.test(env, nb_episodes=1, visualize=True, nb_max_episode_steps=1000, verbose=1)
    print(history.history.keys())
    # dict_keys(['episode_reward', 'nb_steps'])
    return {'reward': history.history['episode_reward'], 'steps':history.history['nb_steps']}
