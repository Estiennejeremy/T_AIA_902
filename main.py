from typing import Optional

from fastapi import FastAPI
from qlearning import qlearning
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
def qLearningRoute(item: Item):
    print(item.trajet)
    return qlearning(item.episodes, item.gamma, item.alpha, item.epsilon)


@app.post("/qlearning")
def qLearningRoute(item: Item):
    print(item.trajet)
    return qlearning(item.episodes, item.gamma, item.alpha, item.epsilon)
