import { useState, useEffect } from 'react'
import tmi from 'tmi.js'

import './test.css'
import './carta.css'
import { PokemonCard } from './PokemonCard'

const client = new tmi.Client({
  channels: [ 'khancerberus' ]
})

client.connect()

function App() {
  // const tmiClient = useTmiClient()
  // const messages = useRef([])
  const [pokeName, setPokeName] = useState()
  const [messages, setMessages] = useState([]);
  const [activeTimeout, setActiveTimeout] = useState();

  useEffect(() => {
    client.on('message', (channel, tags, message, self) => {
      //if(self) return
      if (!message || !message.startsWith('!poke ')) return

      const messageLimit = 5
      
      if (messages.length >= messageLimit) return

      setMessages([...messages, message]);
    })
  }, [])

  useEffect(() => {
    const userMessage = messages.at(0) || '';
    const userPokeName = userMessage.split(' ').at(1);

    if(!activeTimeout) return;
    if(!userPokeName) return;

    setPokeName(userPokeName);
  }, [messages])

  useEffect(() => {
    const cardDeleteTimeout = setTimeout(() => {
      
      setMessages(messages.slice(1));
      clearTimeout(cardDeleteTimeout);
    }, 5000);

    setActiveTimeout(cardDeleteTimeout)

    return () => {
      setActiveTimeout()
      clearTimeout(cardDeleteTimeout);
    }
  }, [pokeName])

  return (
    <main>
      <div className='contenedor'>
        {pokeName ? <PokemonCard pokeName={pokeName} /> : null}
      </div>
    </main>
  )
}

export default App
