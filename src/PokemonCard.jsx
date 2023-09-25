import PropTypes from 'prop-types';
import backimg from './assets/back-card-1.png';
import frontimg from './assets/front-card-2.png';

const CARD_WIDTH = 253;
const CARD_HEIGHT = 351;

export const PokemonCard = ({ pokeName }) => {
  return (
    <main className="carta">
      <section className="flip-card-inner">
        <div className="front-side">
          <img
            src={frontimg}
            alt="pokemon"
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
          />
          <h2 style={{ marginTop: '-300px', color: 'black' }}>
            este es el {pokeName}❗
          </h2>
        </div>
        <div className="back-side">
          <img
            src={backimg}
            alt="pokemon"
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
          />
        </div>
      </section>
    </main>
  );
};

PokemonCard.propTypes = {
  pokeName: PropTypes.string,
};
