const pics = [
  {
    id: 1,
    name: 'Sofya Kowalewski',
    image:
      'https://media.gettyimages.com/photos/sonja-kowalewski-mathematician-russia-picture-id537139227?s=612x612',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Sofya_Kovalevskaya',
  },
  {
    id: 2,
    name: 'Tooran Mirhadi',
    image:
      'https://www.farhangnameh.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-27-at-2.49.24-PM-800x800.jpeg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Touran_Mirhadi',
  },
  {
    id: 3,
    name: 'Maryam Mirzakhani',
    image:
      'https://www.welt.de/img/wissenschaft/mobile131160790/3312501427-ci102l-w1024/Maryam-Mirzakhani.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Maryam_Mirzakhani',
  },
  {
    id: 4,
    name: 'Grace Hopper',
    image:
      'https://gi.de/fileadmin/GI/Hauptseite/Aktuelles/Projekte/Persoenlichkeiten/Grace-Hopper_1.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Grace_Hopper',
  },
  {
    id: 5,
    name: 'Emmy Noether',
    image:
      'https://www.sciencenews.org/wp-content/uploads/2018/06/062318_noether_portrait_730.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Emmy_Noether',
  },
  {
    id: 6,
    name: 'Alenush Teriyan',
    image:
      'https://www.paymanonline.com/wp-content/uploads/2019/07/53-06-06.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Alenush_Terian',
  },
  {
    id: 7,
    name: 'Mah-Laqa Mallah',
    image: 'https://pbs.twimg.com/media/DzILBIMWsAAKYAY.png',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://fa.wikipedia.org/wiki/مه‌لقا_ملاح',
  },
  {
    id: 8,
    name: 'Bhama Srinivsan',
    image: 'https://www.math.uic.edu/mugshots/srinivas',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Bhama_Srinivasan',
  },

  {
    id: 9,
    name: 'Hema Srinivsan',
    image:
      'https://www.math.missouri.edu/sites/default/files/styles/faculty_full_image/public/people/srinivasan.jpg?itok=moIE42U8',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Hema_Srinivasan',
  },
  {
    id: 10,
    name: 'Anoosheh Ansari',
    image:
      'https://amirhemmati.com/wp-content/uploads/2019/07/anousheh-ansari-2.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Anousheh_Ansari',
  },
  {
    id: 11,
    name: 'Nooshafarin Ansari',
    image: 'http://www.ibna.ir/images/docs/000209/n00209832-b.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Noushafarin_Ansari',
  },
  {
    id: 12,
    name: 'Qamar Vaziri',
    image:
      'http://zahramohammadiofficial.com/wp-content/uploads/2019/08/qamar.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Qamar-ol-Moluk_Vaziri',
  },
  {
    id: 13,
    name: 'Bibi Astarabadi',
    image:
      'https://mandegar.tarikhema.org/images/2017/06/main-qimg-c21fe8085644df53ae5d44f2be523d5c-c.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Bibi_Khanoom_Astarabadi',
  },
  {
    id: 14,
    name: 'Nawal Sadawi',
    image: 'https://halale.files.wordpress.com/2011/06/saadawi.jpeg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Nawal_El_Saadawi',
  },
  {
    id: 15,
    name: 'Maryam Zandi',
    image: 'http://vizorio.com/wp-content/uploads/2017/01/مریم-زندی.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Maryam_Zandi',
  },
  {
    id: 16,
    name: 'Azar Andami',
    image:
      'http://parsplanet-deh.persiangig.com/weblog/post/daryabanoo/azar%20andami.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Azar_Andami',
  },
  {
    id: 17,
    name: 'Rosalind Franklin',
    image:
      'https://383jct21p04k32hydj1dwif0-wpengine.netdna-ssl.com/wp-content/uploads/2011/10/R_Franklin.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
  },
  {
    id: 18,
    name: 'Parvaneh Vosough',
    image: 'https://images.hamshahrionline.ir/images/2013/5/vosogh.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Parvaneh_Vossough',
  },
  {
    id: 19,
    name: 'Sediqeh Dowlatabadi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sedigheh_Dowlatabadi02.jpg/190px-Sedigheh_Dowlatabadi02.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Sediqeh_Dowlatabadi',
  },
  {
    id: 20,
    name: 'Leila Esfandyari',
    image:
      'https://upload.wikimedia.org/wikipedia/fa/1/12/Leila_Esfandyari.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Leila_Esfandyari',
  },
  {
    id: 21,
    name: 'Sophie Germain',
    image: 'https://www.onthisday.com/images/people/sophie-germain-medium.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Sophie_Germain',
  },
  {
    id: 22,
    name: 'Hypatia',
    image: 'https://cdn.britannica.com/57/19157-050-7C257C1D/Hypatia.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Hypatia',
  },
  {
    id: 23,
    name: 'Katherine Johnson',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Katherine_Johnson_at_NASA%2C_in_1966.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Katherine_Johnson',
  },
  {
    id: 24,
    name: 'Jane Goodall',
    image:
      'https://ontaponline.com/wp-content/uploads/2019/11/Jane-Goodall-Photo-Michael-Nichols.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Jane_Goodall',
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
