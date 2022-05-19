import numpy as np
import gym
import random
from IPython.display import clear_output

env = gym.make("Taxi-v3").env


def print_frames(frames):
    for i, frame in enumerate(frames):
        clear_output(wait=True)
        print(frame['frame'])
        print(f"Episode: {frame['episode']}")
        print(f"Timestep: {i + 1}")
        print(f"State: {frame['state']}")
        print(f"Action: {frame['action']}")
        print(f"Reward: {frame['reward']}")


def train(gamma, alpha, epsilon, episodes):
    q_table = np.zeros([env.observation_space.n, env.action_space.n])

    for i in range(1, episodes+1):
        state = env.reset()

        epochs, penalties, reward, = 0, 0, 0
        done = False

        while not done:
            if random.uniform(0, 1) < epsilon:
                action = env.action_space.sample()
            else:
                action = np.argmax(q_table[state])

            next_state, reward, done, info = env.step(action)
            old_value = q_table[state, action]
            next_max = np.max(q_table[next_state])

            new_value = (1 - alpha) * old_value + alpha * \
                (reward + gamma * next_max)
            q_table[state, action] = new_value

            if reward == -10:
                penalties += 1

            state = next_state
            epochs += 1

        if i % 100 == 0:
            clear_output(wait=True)
            print(f"Episode: {i}")

    print("Training finished.\n")
    return q_table


def test(q_table):
    total_epochs, total_penalties = 0, 0
    episodes = 100
    frames = []

    for ep in range(episodes):
        state = env.reset()
        epochs, penalties, reward = 0, 0, 0

        done = False

        while not done:
            action = np.argmax(q_table[state])
            old_state = state
            state, reward, done, info = env.step(action)
            if reward == -10:
                penalties += 1
            if old_state == state:
                print(
                    f"Parameters aren't good , upgrade epsilon, gamma, alpha or episodes numbers")
                return {"Parameters aren't good , upgrade epsilon, gamma, alpha or episodes numbers"}

            # Put each rendered frame into dict for animation
            frames.append({
                'frame': env.render(mode='ansi'),
                'episode': ep,
                'state': state,
                'action': action,
                'reward': reward
            })

            epochs += 1

        total_penalties += penalties
        total_epochs += epochs

    print(f"Results after {episodes} episodes:")
    print(f"Average timesteps per episode: {total_epochs / episodes}")
    print(f"Average penalties per episode: {total_penalties / episodes}")
    return episodes, total_epochs, total_penalties, frames


def qlearning(episodes, gamma, alpha, epsilon):
    ##episodes = 100
    #gamma = 0.9
    #alpha = 0.1
    #epsilon = 0.9

    q_table = train(gamma, alpha, epsilon, episodes)
    episodes, total_epochs, total_penalties, frames = test(q_table)
    print_frames(frames)
    return {episodes, total_epochs, total_penalties, frames}
