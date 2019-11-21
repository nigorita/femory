const pics = [
  {
    id: 1,
    name: 'sonia',
    image:
      'https://media.gettyimages.com/photos/sonja-kowalewski-mathematician-russia-picture-id537139227?s=612x612',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Sofya_Kovalevskaya',
  },
  {
    id: 2,
    name: 'sonia',
    image:
      'https://media.gettyimages.com/photos/sonja-kowalewski-mathematician-russia-picture-id537139227?s=612x612',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Sofya_Kovalevskaya',
  },
  {
    id: 3,
    name: 'maryam',
    image:
      'https://www.welt.de/img/wissenschaft/mobile131160790/3312501427-ci102l-w1024/Maryam-Mirzakhani.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Maryam_Mirzakhani',
  },
  {
    id: 4,
    name: 'grace',
    image:
      'https://gi.de/fileadmin/GI/Hauptseite/Aktuelles/Projekte/Persoenlichkeiten/Grace-Hopper_1.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Grace_Hopper',
  },
  {
    id: 5,
    name: 'emmy',
    image:
      'https://www.sciencenews.org/wp-content/uploads/2018/06/062318_noether_portrait_730.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Emmy_Noether',
  },
  {
    id: 6,
    name: 'maryam',
    image:
      'https://www.welt.de/img/wissenschaft/mobile131160790/3312501427-ci102l-w1024/Maryam-Mirzakhani.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Maryam_Mirzakhani',
  },
  {
    id: 7,
    name: 'grace',
    image:
      'https://gi.de/fileadmin/GI/Hauptseite/Aktuelles/Projekte/Persoenlichkeiten/Grace-Hopper_1.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Grace_Hopper',
  },
  {
    id: 8,
    name: 'Bhama',
    image: 'https://www.math.uic.edu/mugshots/srinivas',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Bhama_Srinivasan',
  },

  {
    id: 9,
    name: 'Hema',
    image:
      'https://www.math.missouri.edu/sites/default/files/styles/faculty_full_image/public/people/srinivasan.jpg?itok=moIE42U8',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Hema_Srinivasan',
  },
  {
    id: 10,
    name: 'Bhama',
    image: 'https://www.math.uic.edu/mugshots/srinivas',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Bhama_Srinivasan',
  },
  {
    id: 11,
    name: 'Hema',
    image:
      'https://www.math.missouri.edu/sites/default/files/styles/faculty_full_image/public/people/srinivasan.jpg?itok=moIE42U8',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Hema_Srinivasan',
  },
  {
    id: 12,
    name: 'emmy',
    image:
      'https://www.sciencenews.org/wp-content/uploads/2018/06/062318_noether_portrait_730.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Emmy_Noether',
  },
];

export default pics;

// <div className="hero">
//       <div className="row">
//         <a href="https://nextjs.org/learn" className="card">
//           <p id="title">Play Femory!</p>
//           <p align="center">Test your feminist memory! </p>
//         </a>
//       </div>
//     </div>

//     <div class="flex-container">
//       <div id="child">
//         <div id="gc">
//           <img
//             src="https://media.gettyimages.com/photos/sonja-kowalewski-mathematician-russia-picture-id537139227?s=612x612"
//             alt="sonia kowalowskei"
//           />
//         </div>
//         <div id="gc">b</div>
//         <div id="gc">
//           <img
//             src="https://imgix.ranker.com/node_img/77/1524566/original/marjorie-lee-browne-all-people-photo-1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
//             alt="Marjorie Lee"
//           />
//         </div>
//         <div id="gc">d</div>
//       </div>
//       <div id="child">
//         <div id="gc">
//           <img
//             src="https://www.welt.de/img/wissenschaft/mobile131160790/3312501427-ci102l-w1024/Maryam-Mirzakhani.jpg"
//             alt="mirzakhani"
//           />
//         </div>
//         <div id="gc">f</div>
//         <div id="gc">
//           <img
//             src="https://gi.de/fileadmin/GI/Hauptseite/Aktuelles/Projekte/Persoenlichkeiten/Grace-Hopper_1.jpg"
//             alt="grace hopper"
//           />
//         </div>
//         <div id="gc">h</div>
//       </div>
//       <div id="child">
//         <div id="gc">p</div>
//         <div id="gc">o</div>
//         <div id="gc">n</div>
//         <div id="gc">m</div>
//       </div>
//     </div>

//     <style jsx>{`
//       #title {
//         color: white;
//         font-size: 30px;
//         font-weight: 800;
//         align: center;
//       }
//       img {
//         width: 120px;
//         height: 150px;
//         border-radius: 10%;
//       }
//       #gc {
//         background-color: #f1f1f1;
//         margin: 10px;
//         border-radius: 10%;

//         font-size: 30px;
//         width: 120px;
//         height: 150px;

//         transform: rotateY(0) !important;
//         background: #4e754e;
//         cursor: default;
//       }

//       }
//       #child {
//         margin: 10px;
//         padding: 20px;
//         font-size: 30px;
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//       }

//       .flex-container {
//         display: flex;
//         background-color: #7cf29b;
//         flex-direction: row;
//       }

//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title,
//       .description {
//         text-align: center;
//       }
//       .row {
//         max-width: 880px;
//         margin: 80px auto 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }
//       .card {
//         padding: 18px 18px 24px;
//         width: 220px;
//         text-align: left;
//         text-decoration: none;
//         color: #434343;
//         border: 1px solid #9b9b9b;
//       }
//       .card:hover {
//         border-color: #067df7;
//       }
//       .card h3 {
//         margin: 0;
//         color: #067df7;
//         font-size: 18px;
//       }
//       .card p {
//         margin: 0;
//         padding: 12px 0 0;
//         font-size: 13px;
//         color: #333;
//       }
//       #kol {
//         background-color: #7cf29b;
//       }
//     `}

//     </style>
