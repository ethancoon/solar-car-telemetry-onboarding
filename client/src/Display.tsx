import { useEffect, useState } from 'react';
import './Display.css'
import { io } from "socket.io-client";


// To-do: take in data from the server and display it through this component



interface Message {
    name: string;
    value: number;
    timestamp: number;
  };

// const mockData: Message[] = [{
//     name: "Temperature",
//     value: 23,
//     timestamp: 1628779091
// }, {
//     name: "Humidity",
//     value: 50,
//     timestamp: 1628779092
// }, {
//     name: "Humidity",
//     value: 50,
//     timestamp: 1628779094
// }, {
//     name: "Humidity",
//     value: 50,
//     timestamp: 1628779095
// }
// ]

const Display = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const socket = io("http://localhost:5000")

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        })
        socket.on("message", (data: Message) => {
            console.log(data);
            setMessages((prevMessages) => [...prevMessages, data])
        })
        return () => {
            socket.disconnect()
        }
    }, [socket]);

    return (
        <div className="display-wrapper">
          <h1>Display</h1>
          <div className="data-stream">
            {messages.slice().reverse().map((message) => (
              <div key={message.timestamp} className="message-container">
                <p>{message.name},</p>
                <p>{message.value},</p>
                <p>{message.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Display;