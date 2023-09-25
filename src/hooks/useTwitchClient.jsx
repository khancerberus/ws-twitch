import { useContext } from 'react';
import { TwitchClientContext } from '../contexts/TwitchClientContext';

export const useTwitchClient = () => {
  return useContext(TwitchClientContext);
};
