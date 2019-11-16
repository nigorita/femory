import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import pics from '../data';

function shuffle(arr) {
  let j;
  let temp;
  const copyarr = [...arr];
  for (let i = copyarr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = copyarr[i];
    copyarr[i] = copyarr[j];
    copyarr[j] = temp;
  }
  console.log(copyarr);
  return copyarr;
}

const Home = () => {
  // var a = [1, 2, 3, 4, 5, 6, 7, 8];
  // var b = shuffle(a);
  // console.log(b);
  // [2, 7, 8, 6, 5, 3, 1, 4]

  const [listo, setListo] = useState(pics);

  const [names, setNames] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const s = shuffle(pics);
    setListo(s);
    console.log('listo is ', s);
  }, []);

  // const win = listo.filter(x => {
  //   return x.isFlipped == false;
  // });

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
        }, 1000);
      } else {
        const win =
          listo.filter(x => {
            return x.isFlipped === false;
          }).length === 0;
        setTimeout(function() {
          if (win) {
            alert('you won with ' + count + ' clicks');
          }
        }, 500);
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
      <button hidden="false">Play again</button>
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
                          setNames([...names, { name: a, id: b }]);

                          //setNames([...names, { name: fig.name, id: index }]);
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
                  <div className="wiki">
                    {/* {win.length === 0 ? 'www.wiki.com' : ''} */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>

      <style jsx>{`
        .wiki {
          z-index: 2;
          background: red;
        }
        .container {
          margin: 0 auto;

          width: 132px;
          height: 192px;
          padding-left: 10px;
          padding-top: 10px;
        }
        img {
          position: absolute;
          width: 120px;
          height: 180px;
          object-fit: cover;
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
        }

        .front {
          position: absolute;
          width: 120px;
          height: 180px;
          z-index: 1;
          transition: transform 1s;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        button {
          position: absolute;
          width: 120px;
          height: 180px;
          color: #5c852c;
          background: #5c852c;

          cursor: pointer;
        }

        .back {
          position: absolute;
          width: 120px;
          height: 180px;
          background: red;
          transform: rotateY(180deg);
          pointer-events: none;
          transition: transform 1s;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .card {
          width: 120px;
          height: 180px;
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

// Home.getInitialProps = () => {
//   const shuffled = shuffle(pics);
//   console.log('getInitialProps', shuffled);
//   return { shuffled };
// };
