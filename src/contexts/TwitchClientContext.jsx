import PropTypes from 'prop-types';
import { createContext, useEffect } from 'react';
import tmi from 'tmi.js';

const client = new tmi.Client({
  channels: ['Blueraid_'],
});

export const TwitchClientContext = createContext(client);

export const TwitchClientProvider = ({ children }) => {
  useEffect(() => {
    client.connect();
    console.log('Client Connected');
    return () => {
      client.disconnect();
      console.log('Client Disonnected');
    };
  }, []);

  return (
    <TwitchClientContext.Provider value={client}>
      {children}
    </TwitchClientContext.Provider>
  );
};

TwitchClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
