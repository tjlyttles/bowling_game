import { useState, Fragment } from "react";
import Head from "next/head";
import isStrike from "./../utilities/isStrike";
import isSpare from "./../utilities/isSpare";

const Home = () => {
  let currentScore = 0;
  let reserveScore = 14;
  let strike = false;
  let spare = false;
  let bowlsLeft = 0;
  // const createFrames = () => {
  //   let frames = [];
  //   for (let i = 0; i < 10; i++) {
  //     frames.push(<li key={i}>Frame {i + 1}</li>);
  //   }
  //   return frames;
  // };
  frames = [
    {
      frameOne: {
        title: "Frame One",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameTwo: {
        title: "Frame Two",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameThree: {
        title: "Frame Three",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameFour: {
        title: "Frame Four",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameFive: {
        title: "Frame Five",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameSix: {
        title: "Frame Six",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameSeven: {
        title: "Frame Seven",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameEight: {
        title: "Frame Eight",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameNine: {
        title: "Frame Nine",
        scoreOne: 0,
        scoreTwo: 0
      },
      frameTen: {
        title: "Frame Ten",
        scoreOne: 0,
        scoreTwo: 0
      }
    }
  ];

  const handleClick = e => {
    e.preventDefault();
    let firstBowl = 0;
    let secondBowl = 0;
    let thirdBowl = 0;
    let frameTotal = 0;
    firstBowl = Math.floor(Math.random() * Math.floor(11));
    secondBowl = Math.floor(Math.random() * Math.floor(11 - firstBowl));
    frameTotal = firstBowl + secondBowl;
    if (isStrike && frameTotal < 10) {
      currentScore += reserveScore + frameTotal;
      console.log(currentScore);
    }
    if (isSpare && frameTotal < 10) {
      currentScore += reserveScore + firstBowl;
      console.log(currentScore);
    }
    strike = isStrike(firstBowl);
    spare = isSpare(firstBowl, secondBowl);
    if (strike) {
      reserveScore = 10;
      bowls++;
      console.log(reserveScore);
    } else if (spare) {
      reserveScore += 10;
      console.log(reserveScore);
    } else {
      currentScore += frameTotal;
      console.log(currentScore);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Bowling Game</title>
      </Head>

      <main>
        <h1 className="title">BOWL-A-RAMA</h1>
        <div className="">
          <div>
            <ul>{createFrames()}</ul>
          </div>
          <button onClick={handleClick}>BOWL!</button>
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
