import { useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';
import './carta.css';
import { useTwitchClient } from './hooks/useTwitchClient';
import './test.css';

const MESSAGE_LIMIT = 10;

function App() {
  const client = useTwitchClient();
  const [pokeName, setPokeName] = useState();
  const [messages, setMessages] = useState([]);
  const [activeTimeout, setActiveTimeout] = useState();

  useEffect(() => {
    client.on('message', (channel, tags, message) => {
      if (!message || !message.startsWith('!poke ')) return;
      if (messages.length >= MESSAGE_LIMIT) return;
      setMessages([...messages, message]);
    });
  }, [client, messages]);

  useEffect(() => {
    const userMessage = messages.at(0) || '';
    const userPokeName = userMessage.split(' ').at(1);

    if (activeTimeout || pokeName) return;

    setPokeName(userPokeName);
  }, [activeTimeout, pokeName, messages]);

  useEffect(() => {
    const cardDeleteTimeout = setTimeout(() => {
      setMessages(messages.slice(1));
      setActiveTimeout();
      setPokeName();
    }, 5000);

    setActiveTimeout(cardDeleteTimeout);

    return () => {
      clearTimeout(cardDeleteTimeout);
      setActiveTimeout();
    };
  }, [pokeName, messages]);

  console.log({ messages });

  return (
    <main>
      <div className="contenedor">
        {pokeName ? <PokemonCard pokeName={pokeName} /> : null}
      </div>
    </main>
  );
}

export default App;
