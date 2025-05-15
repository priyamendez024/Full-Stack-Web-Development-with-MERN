import React, { useEffect, useState } from 'react';
import { socket } from '../utils/socket';

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', msg => {
      setMessages(prev => [...prev, msg]);
    });
    return () => socket.off('message');
  }, []);

  const sendMessage = () => {
    socket.emit('chatMessage', input);
    setInput('');
  };

  return (
    <div>
      <div>{messages.map((m,i) => <p key={i}>{m}</p>)}</div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}