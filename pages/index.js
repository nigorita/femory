import React, { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import pics from "../data";

const Home = () => {
  const [listo, setListo] = useState(pics);
  const [names, setNames] = useState([]);

  useEffect(() => {
    if (names.length === 2) {
      if (names[0].name !== names[1].name) {
        console.log("they do not match");
        setTimeout(function() {
          listo.map((x, index) => {
            if (x.name === names[0].name || x.name === names[1].name) {
              const list2 = [...listo];

              list2[index].isFlipped = false;
              setListo(list2);
            }
          });
        }, 1000);
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

      {JSON.stringify(names)}
      <ul>
        {listo.map((fig, index) => {
          return (
            <div className="container">
              <div className={!fig.isFlipped ? "card" : "card is-flipped"}>
                <div className="cardface front">
                  <li>
                    <button
                      onClick={() => {
                        if (!fig.isFlipped) {
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
                    >
                      {" "}
                    </button>
                  </li>
                </div>
                <div className="cardface back">
                  <img src={fig.image} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </ul>

      <style jsx>{`
        .container {
          margin: 0 auto;
          perspective: 600px;
          width: 132px;
          height: 192px;
          padding-left: 10px;
          padding-top: 10px;
        }
        img {
          position: absolute;
          width: 120px;
          height: 180px;
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
        }

        button {
          position: absolute;
          width: 120px;
          height: 180px;
          color: #5c852c;
          background: #5c852c;
          z-index: 1;
          cursor: pointer;
        }

        .back {
          position: absolute;
          width: 120px;
          height: 180px;
          background: red;
          transform: rotateY(180deg);
          pointer-events: none;
        }

        .card {
          width: 120px;
          height: 180px;
          position: relative;
          transition: transform 1s;
          transform-style: preserve-3d;
        }

        .is-flipped {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Home;
