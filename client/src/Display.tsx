import { useEffect } from 'react';
import './Display.css'
import { io } from "socket.io-client";


// To-do: take in data from the server and display it through this component

const socket = io("http://localhost:5000")

interface Update {
    name: string;
    number: number;
    timestamp: string;
  }

export default function Display() {
    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server")
        })
        socket.on("update", (update: Update) => {
            console.log(update)
        })
        return () => {
            socket.disconnect()
        }
    })

    return (
        <div className="display-wrapper">
            <h1>Display</h1>
            <div className="data-stream" >
                Data stream
            </div>
        </div>
    )
}
