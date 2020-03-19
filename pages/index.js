import { useState, Fragment, useEffect } from "react";
import Head from "next/head";
import SimulateGame from "./../utilities/simulateGame";

const Home = () => {
  let game = new SimulateGame();
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [secondRolls, setSecondRolls] = useState([]);
  const [firstRolls, setFirstRolls] = useState();
  const [frameScores, setFrameScores] = useState();
  let rolls = [];
  const [frames, setFrames] = useState([
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      score: 0
    },
    {
      firstRoll: 0,
      secondRoll: 0,
      thirdRoll: 0,
      score: 0
    }
  ]);

  const handleName = e => {
    if (name.length) {
      setIsName(true);
    }
  };

  const handleClick = e => {
    const newFrames = [...frames];
    for (let i = 0; i < 10; i++) {
      let firstPins = Math.floor(Math.random() * Math.floor(11));
      game.bowl(firstPins);
      rolls.push(firstPins);
      let secondPins = Math.floor(Math.random() * Math.floor(11 - firstPins));
      game.bowl(secondPins);
      rolls.push(secondPins);

      frames[i].firstRoll = firstPins;
      frames[i].secondRoll = secondPins;
    }
    setFrames(newFrames);

    game.score;

    console.log(game.frameTotals);
  };
  useEffect(() => {}, [frames]);

  return (
    <div className="container">
      <Head>
        <title>Bowling Game</title>
      </Head>

      <main>
        <h1 className="title">BOWLING GAME</h1>
        <div className="">
          {!isName ? (
            <Fragment>
              {" "}
              <label htmlFor="name">Enter A Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                size="10"
                onChange={e => setName(e.target.value)}
              />
              <button onClick={handleName}>Enter</button>
            </Fragment>
          ) : (
            <Fragment>
              {" "}
              <div>
                <h2>Welcome, {name}</h2>
                <button onClick={e => handleClick()}>BOWL!</button>
                <div className="score_board">
                  {frames.map((frame, i) => (
                    <div className="box" key={i}>
                      <strong>Frame {i + 1}</strong>
                      <div>First roll: {frame.firstRoll}</div>
                      <div>Second roll: {frame.secondRoll}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .box {
          height: 150px;
          width: 150px;
          border: 1px black solid;
          text-align: center;
        }
        .score_board {
          display: flex;
          justify-content: space-around;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
export default Home;
