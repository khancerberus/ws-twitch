import PropTypes from 'prop-types'
import backimg from './assets/back-card-1.png'
import frontimg from './assets/front-card-2.png'

export const PokemonCard = ({ pokeName }) => {
  const width = 253, height = 351;

  return (
    <main className='carta'>
      <section className='flip-card-inner'>
        <div className='front-side'>
          <img src={frontimg} alt='pokemon' width={width} height={height}/>
          <h2 style={{marginTop: "-300px", color: "black"}}>este es el {pokeName}❗</h2>
        </div>
        <div className='back-side'>
          <img src={backimg} alt='pokemon' width={width} height={height} />
        </div>
      </section>
    </main>
  )
}

PokemonCard.propTypes = {
  pokeName: PropTypes.string,
}