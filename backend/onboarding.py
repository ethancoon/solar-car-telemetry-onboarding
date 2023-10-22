import socketio
import time
import random

if __name__=="__main__":
    sio = socketio.Server()
    print("done")

while True:
    num = random.randint(1,100)
    print(num)
    time.sleep(1)



