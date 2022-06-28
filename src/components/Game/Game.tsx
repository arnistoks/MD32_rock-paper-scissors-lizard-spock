import React, { useState } from 'react';
import './game.scss';
import Logo from '../../images/logo.png';
import Rock from '../../images/rock.png';
import Paper from '../../images/paper.png';
import Scissors from '../../images/scissors.png';
import Lizard from '../../images/lizard.png';
import Spock from '../../images/spock.png';

const cpuChoice = () => Math.floor(Math.random() * (5 - 1 + 1) + 1);

const resultMessage = ['Congratulations! You win!', "It's a tie!", 'Sorry! You lose!'];

const resultMessageMultiplayer = ['Congratulations! Player 1 win!', "It's a tie!", 'Congratulations! Player 2 win!'];

type Multiplayer = {
  playerOne: string;
  playerTwo: string;
}

const multiplayerFormData: Multiplayer = {
  playerOne: '',
  playerTwo: '',
};

const Game = () => {
  const [results, setResults] = useState([0, 0, 0]);
  const [resultsMultiplayer, setResultsMultiplayer] = useState([0, 0, 0]);
  const [player, setPlayer] = useState<number>();
  const [cpu, setCpu] = useState<number>();
  const [multiplayer, setMultiplayer] = useState<Multiplayer>(multiplayerFormData);
  const [toggleRules, setToggleRules] = useState(true);
  const [toggleGame, setToggleGame] = useState(false);
  const [toggleFight, setToggleFight] = useState(false);
  const [toggleGameMultiplayer, setToggleGameMultiplayer] = useState(false);
  const [toggleFightMultiplayer, setToggleFightMultiplayer] = useState(false);

  const summary = () => {
    if (player === cpu) {
      return results.map((a, i) => (i === 1 ? a + 1 : a));
    } if (player === 1 && (cpu === 3 || cpu === 4)) {
      return results.map((a, i) => (i === 0 ? a + 1 : a));
    } if (player === 2 && (cpu === 1 || cpu === 5)) {
      return results.map((a, i) => (i === 0 ? a + 1 : a));
    } if (player === 3 && (cpu === 2 || cpu === 4)) {
      return results.map((a, i) => (i === 0 ? a + 1 : a));
    } if (player === 4 && (cpu === 2 || cpu === 5)) {
      return results.map((a, i) => (i === 0 ? a + 1 : a));
    } if (player === 5 && (cpu === 3 || cpu === 4)) {
      return results.map((a, i) => (i === 0 ? a + 1 : a));
    }
    return results.map((a, i) => (i === 2 ? a + 1 : a));
  };

  const summaryMultiplayer = () => {
    if ((multiplayer.playerOne === 'Q' && multiplayer.playerTwo === 'O')
        || (multiplayer.playerOne === 'W' && multiplayer.playerTwo === 'I')
        || (multiplayer.playerOne === 'S' && multiplayer.playerTwo === 'J')
        || (multiplayer.playerOne === 'X' && multiplayer.playerTwo === 'N')
        || (multiplayer.playerOne === 'Z' && multiplayer.playerTwo === 'M')) {
      return resultsMultiplayer.map((a, i) => (i === 1 ? a + 1 : a));
    } if ((multiplayer.playerOne === 'Q' && multiplayer.playerTwo === 'I')
        || (multiplayer.playerOne === 'Q' && multiplayer.playerTwo === 'N')
        || (multiplayer.playerOne === 'W' && multiplayer.playerTwo === 'J')
        || (multiplayer.playerOne === 'W' && multiplayer.playerTwo === 'M')
        || (multiplayer.playerOne === 'S' && multiplayer.playerTwo === 'O')
        || (multiplayer.playerOne === 'S' && multiplayer.playerTwo === 'N')
        || (multiplayer.playerOne === 'X' && multiplayer.playerTwo === 'I')
        || (multiplayer.playerOne === 'X' && multiplayer.playerTwo === 'M')
        || (multiplayer.playerOne === 'Z' && multiplayer.playerTwo === 'O')
        || (multiplayer.playerOne === 'Z' && multiplayer.playerTwo === 'J')) {
      return resultsMultiplayer.map((a, i) => (i === 0 ? a + 1 : a));
    }
    return resultsMultiplayer.map((a, i) => (i === 2 ? a + 1 : a));
  };

  const result = () => {
    if (player === cpu) {
      return resultMessage[1];
    } if (player === 1 && (cpu === 3 || cpu === 4)) {
      return resultMessage[0];
    } if (player === 2 && (cpu === 1 || cpu === 5)) {
      return resultMessage[0];
    } if (player === 3 && (cpu === 2 || cpu === 4)) {
      return resultMessage[0];
    } if (player === 4 && (cpu === 2 || cpu === 5)) {
      return resultMessage[0];
    } if (player === 5 && (cpu === 3 || cpu === 4)) {
      return resultMessage[0];
    }
    return resultMessage[2];
  };

  const multiplayerResult = () => {
    if ((multiplayer.playerOne === 'Q' && multiplayer.playerTwo === 'O')
        || (multiplayer.playerOne === 'W' && multiplayer.playerTwo === 'I')
        || (multiplayer.playerOne === 'S' && multiplayer.playerTwo === 'J')
        || (multiplayer.playerOne === 'X' && multiplayer.playerTwo === 'N')
        || (multiplayer.playerOne === 'Z' && multiplayer.playerTwo === 'M')) {
      return resultMessageMultiplayer[1];
    } if ((multiplayer.playerOne === 'Q' && multiplayer.playerTwo === 'I')
        || (multiplayer.playerOne === 'Q' && multiplayer.playerTwo === 'N')
        || (multiplayer.playerOne === 'W' && multiplayer.playerTwo === 'J')
        || (multiplayer.playerOne === 'W' && multiplayer.playerTwo === 'M')
        || (multiplayer.playerOne === 'S' && multiplayer.playerTwo === 'O')
        || (multiplayer.playerOne === 'S' && multiplayer.playerTwo === 'N')
        || (multiplayer.playerOne === 'X' && multiplayer.playerTwo === 'I')
        || (multiplayer.playerOne === 'X' && multiplayer.playerTwo === 'M')
        || (multiplayer.playerOne === 'Z' && multiplayer.playerTwo === 'O')
        || (multiplayer.playerOne === 'Z' && multiplayer.playerTwo === 'J')
    ) {
      return resultMessageMultiplayer[0];
    }
    return resultMessageMultiplayer[2];
  };

  const playerPicture = () => {
    if (player === 1) {
      return Rock;
    } if (player === 2) {
      return Paper;
    } if (player === 3) {
      return Scissors;
    } if (player === 4) {
      return Lizard;
    }
    return Spock;
  };

  const playerCpu = () => {
    if (cpu === 1) {
      return Rock;
    } if (cpu === 2) {
      return Paper;
    } if (cpu === 3) {
      return Scissors;
    } if (cpu === 4) {
      return Lizard;
    }
    return Spock;
  };

  const playerOnePicture = () => {
    if (multiplayer.playerOne === 'Q') {
      return Spock;
    } if (multiplayer.playerOne === 'W') {
      return Scissors;
    } if (multiplayer.playerOne === 'S') {
      return Paper;
    } if (multiplayer.playerOne === 'X') {
      return Rock;
    }
    return Lizard;
  };

  const playerTwoPicture = () => {
    if (multiplayer.playerTwo === 'O') {
      return Spock;
    } if (multiplayer.playerTwo === 'I') {
      return Scissors;
    } if (multiplayer.playerTwo === 'J') {
      return Paper;
    } if (multiplayer.playerTwo === 'N') {
      return Rock;
    }
    return Lizard;
  };

  const gameDisabled = () => {
    if ((multiplayer.playerOne === 'Q'
        || multiplayer.playerOne === 'W'
        || multiplayer.playerOne === 'S'
        || multiplayer.playerOne === 'X'
        || multiplayer.playerOne === 'Z')
        && (multiplayer.playerTwo === 'O'
        || multiplayer.playerTwo === 'I'
        || multiplayer.playerTwo === 'J'
        || multiplayer.playerTwo === 'N'
        || multiplayer.playerTwo === 'M')
    ) {
      return false;
    } return true;
  };

  const buttonDisabled = () => {
    if ((multiplayer.playerOne === 'Q'
            || multiplayer.playerOne === 'W'
            || multiplayer.playerOne === 'S'
            || multiplayer.playerOne === 'X'
            || multiplayer.playerOne === 'Z')
        && (multiplayer.playerTwo === 'O'
            || multiplayer.playerTwo === 'I'
            || multiplayer.playerTwo === 'J'
            || multiplayer.playerTwo === 'N'
            || multiplayer.playerTwo === 'M')
    ) {
      return 'button';
    } return 'disabled';
  };

  return (
    <section className="section">
      <div className="container">
        {toggleRules && (
        <div className="rules">
          <div className="rules__line">
            <div className="rules__left">
              <img src={Logo} alt="Rules" width="400" />
              <div className="rules__buttons">
                <button
                  className="button button__rules"
                  onClick={() => {
                    setToggleRules(false);
                    setToggleGame(true);
                  }}
                >
                  1 Player
                </button>
                <button
                  className="button button__rules"
                  onClick={() => {
                    setToggleRules(false);
                    setToggleGameMultiplayer(true);
                  }}
                >
                  2 Players
                </button>
              </div>
            </div>
            <div className="rules__right">
              <h2 className="rules__title">Rules:</h2>
              <h3 className="rules__text">
                <li>Scissors cuts Paper,</li>
                <li>Paper covers Rock,</li>
                <li>Rock crushes Lizard,</li>
                <li>Lizard poisons Spock,</li>
                <li>Spock smashes Scissors,</li>
                <li>Scissors decapitates Lizard,</li>
                <li>Lizard eats Paper,</li>
                <li>Paper disproves Spock,</li>
                <li>Spock vaporizes Rock,</li>
                <li>Rock crushes Scissors</li>
              </h3>
            </div>
          </div>
        </div>
        )}
        {toggleFight && (
        <div className="fight">
          <h2 className="fight__title result__title">{result()}</h2>
          <div className="fight__line">
            <div className="fight__icons">
              <img src={playerPicture()} alt="YOU" width="300" />
            </div>
            <div className="fight__icons">
              <img src={playerCpu()} alt="CPU" width="300" />
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              setPlayer(3);
              setCpu(cpuChoice());
              setToggleGame(true);
              setToggleFight(false);
              setResults(summary());
            }}
          >
            Play
          </button>
        </div>
        )}
        {toggleGame && (
        <div className="game">
          <div className="result">
            <div className="line">
              <h3 className="title__small">YOU:</h3>
              <h2 className="title__medium">{results[0]}</h2>
            </div>
            <div className="line">
              <h3 className="title__small">TIE:</h3>
              <h2 className="title__medium">{results[1]}</h2>
            </div>
            <div className="line">
              <h3 className="title__small">CPU:</h3>
              <h2 className="title__medium">{results[2]}</h2>
            </div>
          </div>
          <h2 className="start__title">Make Your choice!</h2>
          <div className="buttons">
            <button
              className="button"
              onClick={() => {
                setPlayer(1);
                setCpu(cpuChoice());
                setToggleFight(true);
                setToggleGame(false);
              }}
            >
              <img src={Rock} alt="Rock" width="170" />
            </button>
            <button
              className="button"
              onClick={() => {
                setPlayer(2);
                setCpu(cpuChoice());
                setToggleFight(true);
                setToggleGame(false);
              }}
            >
              <img src={Paper} alt="Paper" width="170" />
            </button>
            <button
              className="button"
              onClick={() => {
                setPlayer(3);
                setCpu(cpuChoice());
                setToggleFight(true);
                setToggleGame(false);
              }}
            >
              <img src={Scissors} alt="Scissors" width="170" />
            </button>
            <button
              className="button"
              onClick={() => {
                setPlayer(4);
                setCpu(cpuChoice());
                setToggleFight(true);
                setToggleGame(false);
              }}
            >
              <img src={Lizard} alt="Lizard" width="170" />
            </button>
            <button
              className="button"
              onClick={() => {
                setPlayer(5);
                setCpu(cpuChoice());
                setToggleFight(true);
                setToggleGame(false);
              }}
            >
              <img src={Spock} alt="Spock" width="170" />
            </button>
          </div>
        </div>
        )}
        {toggleFightMultiplayer && (
        <div className="fight">
          <h2 className="fight__title result__title">{multiplayerResult()}</h2>
          <div className="fight__line">
            <div className="fight__icons">
              <img src={playerOnePicture()} alt="YOU" width="300" />
            </div>
            <div className="fight__icons">
              <img src={playerTwoPicture()} alt="CPU" width="300" />
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              setToggleGameMultiplayer(true);
              setToggleFightMultiplayer(false);
              setResultsMultiplayer(summaryMultiplayer());
              setMultiplayer(multiplayerFormData);
            }}
          >
            Play
          </button>
        </div>
        )}
        {toggleGameMultiplayer && (
        <div className="game">
          <div className="result">
            <div className="line">
              <h3 className="title__small">PLAYER 1:</h3>
              <h2 className="title__medium">{resultsMultiplayer[0]}</h2>
            </div>
            <div className="line">
              <h3 className="title__small">TIE:</h3>
              <h2 className="title__medium">{resultsMultiplayer[1]}</h2>
            </div>
            <div className="line">
              <h3 className="title__small">PLAYER 2:</h3>
              <h2 className="title__medium">{resultsMultiplayer[2]}</h2>
            </div>
          </div>
          <h2 className="start__title">Make Your choices!</h2>
          <div className="multiplayer__buttons">
            <div className="multiplayer__button">
              <img src={Logo} alt="Player 1" width="300" />
              <h3 className="letterQ">Q</h3>
              <h3 className="letterW">W</h3>
              <h3 className="letterS">S</h3>
              <h3 className="letterX">X</h3>
              <h3 className="letterZ">Z</h3>
              <input
                className="inputPlayerOne"
                maxLength={1}
                required
                type="password"
                value={multiplayer.playerOne}
                placeholder="-"
                onChange={(event) => setMultiplayer({ ...multiplayer, playerOne: event.target.value.toUpperCase() })}
              />
            </div>
            <button
              className={buttonDisabled()}
              type="submit"
              disabled={gameDisabled()}
              onClick={() => {
                setToggleFightMultiplayer(true);
                setToggleGameMultiplayer(false);
                multiplayerResult();
              }}
            >
              Play
            </button>
            <div className="multiplayer__button">
              <img className="mirrorView" src={Logo} alt="Player 2" width="300" />
              <h3 className="letterM">M</h3>
              <h3 className="letterN">N</h3>
              <h3 className="letterJ">J</h3>
              <h3 className="letterI">I</h3>
              <h3 className="letterO">O</h3>
              <input
                className="inputPlayerTwo"
                maxLength={1}
                required
                type="password"
                value={multiplayer.playerTwo}
                placeholder="-"
                onChange={(event) => setMultiplayer({ ...multiplayer, playerTwo: event.target.value.toUpperCase() })}
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Game;
