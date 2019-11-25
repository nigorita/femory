import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import pics from '../data';
import Router from 'next/router';

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

  return copyarr;
}

const Home = () => {
  // var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20];
  // var b = shuffle(a);
  // console.log(b);
  // [2, 7, 8, 6, 5, 3, 1, 4]

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
                ' clicks. Click on Wikipedia links to learn about this people',
            );
            // window.location.reload();
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
        <link
          href="http://www.fontonline.ir/css/IranNastaliq.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Nav />

      <a className="azsar" href="javascript:location.reload(true)">
        Play Again
        <br />
        Refresh the game
      </a>

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
      <div className="Yush" lang="fa">
        یاد بعضی نفرات
        <br />
        روشنم می‌دارد:
        <br />
        بی بی استرابادی
        <br />
        توران میرهادی.
        <br />
        <br />
        قوّتم می‌بخشد
        <br />
        رَه می‌اندازد
        <br />
        و اجاقِ کهنِ سردِ سَرایَم
        <br />
        گرم می‌آید از گرمیِ عالی دَمِشان.
        <br />
        <br />
        نام بعضی نفرات
        <br />
        رِزق روحم شده است.
        <br />
        وقت هر دلتنگی
        <br />
        سویِشان دارم دست
        <br />
        جُرأتم می‌بخشد
        <br />
        روشنم می‌دارد.
        <br />
        -نیما یوشیج
      </div>

      <style jsx>{`
        .Yush {
          padding-top: 50px;
          padding-right: 50px;
          font-family: 'IranNastaliq', tahoma;
          direction: rtl;
          font-size: 20px;
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

// Home.getInitialProps = () => {
//   const shuffled = shuffle(pics);
//   console.log('getInitialProps', shuffled);
//   return { shuffled };
// };
