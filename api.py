import numbers
from tokenize import Number
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel

from qlearning import qlearning
from deepqleanring import dqlearningdev
from force import force
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
def qLearningRoute(s: int):
    return force(s)


@app.post("/qlearning")
def qLearningRoute(item: Item):
    return qlearning(item.episodes, item.gamma, item.alpha, item.epsilon)

@app.post("/deepqlearning")
def deepQlearning(item: Item):
    return dqlearningdev(item)
