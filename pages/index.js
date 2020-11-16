import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import pics from '../data';
import Router from 'next/router';

function shuffle(arr) {
  let j;
  let temp;
  const copyarr = [...arr];
  for (let i = copyarr.length - 1; i >= 0; i--) {
    j = Math.floor(Math.random() * (arr.length));
    temp = copyarr[i];
    copyarr[i] = copyarr[j];
    copyarr[j] = temp;
  }

  return copyarr;
}

const Home = () => {
 

  const [listo, setListo] = useState(pics);
  const [names, setNames] = useState([]);
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const s = shuffle(pics);
    let d = [];
    for (let i = 0; i < 8; i++) {
      d.push(s[i]);
      d.push({ ...s[i], id: s[i].id + 0.5 });
    }

    const miow = shuffle(d);

    setListo(miow);
  }, []);

 

  useEffect(() => {
    if (names.length === 2) {
      console.log(names);
      if (names[0].name !== names[1].name) {
        console.log('they do not match');
        setTimeout(function() {
          listo.map((x, index) => {
            if (x.name === names[0].name || x.name === names[1].name) {
              const list2 = [...listo];

              list2[index].isFlipped = false;
              setListo(list2);
            }
          });
        }, 800);
      } else {
        const hasWon =
          listo.filter(x => {
            return x.isFlipped === false;
          }).length === 0;
        setWin(hasWon);
        setTimeout(function() {
          if (hasWon) {
            alert(
              'you won with ' +
                count +
                ' clicks. Now click on Wikipedia links to learn about these amazing people.',
            );
            
          }
        }, 1200);
      }

      setNames([]);
    }
  }, [names]);

  return (
    <div id="kol">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <a className="azsar" href="javascript:location.reload(true)">
        Play Again
        <br />
        Refresh the game
      </a>
    <h4>Created By: Negar Rahbar</h4>

  

      <ul>
        {listo.map((fig, index) => {
          return (
            <div className="container" key={index}>
              <div className={!fig.isFlipped ? 'card' : 'card is-flipped'}>
                <div className="cardface front">
                  <li>
                    <button
                      onClick={() => {
                        if (!fig.isFlipped) {
                          setCount(count + 1);
                          const a = fig.name;
                          const b = fig.id;
                          const c = fig.wiki;
                          setNames([...names, { name: a, id: b }]);

                          
                          console.log(names);
                          const newList = [...listo];
                          newList[index].isFlipped = true;
                          setListo(newList);
                        }
                      }}
                    ></button>
                  </li>
                </div>
                <div className="cardface back">
                  <img src={fig.image} alt="" />

                  <a
                    className="wikis"
                    hidden={!win}
                    target="_blank"
                    href={fig.wiki}
                  >
                    <br />
                    <br />
                    {fig.name} <br />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
     

      <style jsx>{`
         {
          /* .Yush2 {
          padding-top: 50px;
          padding-right: 80px;
          font-family: 'IranNastaliq', tahoma;
          direction: rtl;
          font-size: 20px;
        }
        .Yush1 {
          position: absolute;
          padding-left: 50px;
          padding-top: 100px;
          font-family: 'IranNastaliq', tahoma;
          direction: rtl;
          font-size: 20px;
        } */
        }
        .azsar {
          position: absolute;
          padding: 10px;
          margin-top: 20px;
          margin-left: 60px;
        }
        a {
          text-align: center;
          font-family: tahoma;
          border: 2px blue;
          background: white;
          border: solid;
          cursor: pointer;
          position: relative;
          font-weight: bold;
        }
        .again {
          background-color: #42f587;
        }
        .wikis {
          position: absolute;
          pointer-events: all;
          width: 120px;
          height: 120px;
          object-fit: cover;
          background: rgba(255, 255, 255, 0.5);
        }
        .container {
          margin: 0 auto;

          width: 132px;
          height: 132px;
          padding-left: 5px;
          padding-top: 5px;
        }
        img {
          position: absolute;
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 10%;
        }
        ul {
          position: absolute;
          background: #c7fa8c;
          display: grid;
          grid-template-columns: auto auto auto auto;
          list-style-type: none;
          left: 30%;
          padding: 5px;
        }

        li {
          width: 120px;
          background: #5c852c;
          border-radius: 10%;
        }

        .front {
          position: absolute;
          width: 120px;
          height: 120px;
          z-index: 1;
          transition: transform 1s;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          border-radius: 10%;
        }

        button {
          position: absolute;
          width: 120px;
          height: 120px;
          color: #5c852c;
          background: #5c852c;
          border-radius: 10%;
          cursor: pointer;
        }

        .back {
          position: absolute;
          width: 120px;
          height: 120px;
          background: red;
          transform: rotateY(180deg);
          pointer-events: none;
          transition: transform 1s;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          border-radius: 10%;
        }

        .card {
          width: 120px;
          height: 120px;
          position: relative;
          perspective: 600px;
           {
            /* transition: transform 1s;
          transform-style: preserve-3d;
          backface-visibility: hidden; */
          }
        }

        .is-flipped .front {
          transform: rotateY(180deg);
        }

        .is-flipped .back {
          transform: rotateY(360deg);
        }
      `}</style>
    </div>
  );
};

export default Home;


