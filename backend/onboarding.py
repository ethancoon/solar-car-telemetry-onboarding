import socketio
import time
import random

if __name__=="__main__":
    sio = socketio.Server()
    sio.connect('http://localhost:5000')
    print("done")

@sio.on('connect')
def on_connect():
    while True:
        num = random.randint(1,100)
        print(num)
        time.sleep(1)
        sio.emit('message', str(num))

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected')

try:
    while True:
        pass
except KeyboardInterrupt:
    sio.disconnect()


