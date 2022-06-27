import React, { useState } from 'react';
import './game.scss';
import Logo from '../../images/logo.png';
import Rock from '../../images/rock.png';
import Paper from '../../images/paper.png';
import Scissors from '../../images/scissors.png';
import Lizard from '../../images/lizard.png';
import Spock from '../../images/spock.png';

const Game = () => {
  const [results, setResults] = useState([0, 0, 0]);
  const [player, setPlayer] = useState<number | string>('');
  const [cpu, setCpu] = useState<number | string>('');
  const [toggleRules, setToggleRules] = useState(true);
  const [toggleGame, setToggleGame] = useState(false);
  const [toggleFight, setToggleFight] = useState(false);

  const cpuChoice = () => Math.floor(Math.random() * (5 - 1 + 1) + 1);

  const resultMessage = ['Congratulations! You win!', "It's a tie!", 'Sorry! You lose!'];

  const summery = () => {
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

  return (
    <section className="section">
      <div className="container">
        {toggleRules && (
        <div className="rules">
          <div className="rules__line">
            <div className="rules__left">
              <img src={Logo} alt="Rules" width="400" />
              <button
                className="button"
                onClick={() => { setToggleRules(false); setToggleGame(true); }}
              >
                Play
              </button>
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
              setResults(summery());
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
      </div>
    </section>
  );
};

export default Game;
