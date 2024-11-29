import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    // Définir l'état initial
    this.state = {
      personne: {
        fullName: 'Jean Dupont',
        bio: 'Développeur web passionné par React.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur Web',
      },
      show: false, // pour afficher ou non le profil
      timeElapsed: 0, // pour l'intervalle de temps écoulé
    };
    
    // Référence à l'intervalle pour pouvoir l'arrêter plus tard
    this.interval = null;
  }

  // Méthode pour démarrer l'intervalle dès que le composant est monté
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  // Méthode pour nettoyer l'intervalle lors de la destruction du composant
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Méthode pour basculer l'état 'show'
  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profil de {fullName}</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>
        
        {/* Affichage conditionnel du profil */}
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}

        {/* Affichage du temps écoulé depuis le montage */}
        <p>Temps écoulé depuis le montage du composant : {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
