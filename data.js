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
      'https://en.wikipedia.org/wiki/Qamar-ol-Moluk_Vaziri#/media/File:Qamar-ol-Moluk_Vaziri.jpg',
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
    image: 'https://farhang.org/images/press/2018-0517-Maryam-Zandi.JPG',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Maryam_Zandi',
  },
  {
    id: 16,
    name: 'Azar Andami',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Azar_Andami.jpg',
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
      'https://d2v9ipibika81v.cloudfront.net/uploads/sites/21/NASA_Johnson_lrc-2016-h1_p_katherine_g._johnson-050507-1024x768.jpg',
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
  {
    id: 25,
    name: 'Frida Kahlo',
    image:
      'https://66.media.tumblr.com/76f5a072afe5fb9977a1ec1d96c1f662/tumblr_ovlchh1sYf1w3v1xmo1_540.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Frida_Kahlo',
  },
  {
    id: 26,
    name: 'Virginia Woolf',
    image:
      'https://www.theargus.co.uk/resources/images/4892533?type=responsive-gallery-fullscreen',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Virginia_Woolf',
  },
  {
    id: 27,
    name: 'Joan Baez',
    image:
      'https://alchetron.com/cdn/joan-baez-cb95a0c6-92f2-469c-879d-045e880dc01-resize-750.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Joan_Baez',
  },
  {
    id: 28,
    name: 'Soosan Taslimi',
    image:
      'https://d1i5cf397ceebi.cloudfront.net/uploads/employee/profile_image/389/normal_cb94d824-e932-41bf-86bd-e84dbc95d984.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Susan_Taslimi',
  },
  {
    id: 29,
    name: 'Natalia Ginzburg',
    image:
      'https://media.newyorker.com/photos/5d31f60559b22d000965ee94/master/w_727,c_limit/190729_r34698.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Natalia_Ginzburg',
  },
  {
    id: 30,
    name: 'Susan Sontag',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Susan_Sontag_1979_%C2%A9Lynn_Gilbert_%28headshot%29.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: ' https://en.wikipedia.org/wiki/Susan_Sontag',
  },
  {
    id: 31,
    name: 'Amelia Earhart',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Amelia_Earhart_standing_under_nose_of_her_Lockheed_Model_10-E_Electra%2C_small.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Amelia_Earhart',
  },
  {
    id: 32,
    name: 'Valentina Tereshkova',
    image:
      'https://starchild.gsfc.nasa.gov/Images/StarChild/scientists/tereshkova_l2.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Valentina_Tereshkova',
  },
  {
    id: 33,
    name: 'Harriet Beecher-Stowe',
    image:
      'https://www.naakojaa.com/sites/default/files/imagecache/author/0478-0611-1410-1149_harriet_beecher_stowe_o.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Harriet_Beecher_Stowe',
  },
  {
    id: 34,
    name: 'George Eliot',
    image: 'https://creativequotations.com/pix/399.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/George_Eliot',
  },
  {
    id: 35,
    name: 'Mary Wollstonecraft',
    image: 'https://www.tate.org.uk/art/images/work/N/N01/N01167_9.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Mary_Wollstonecraft',
  },
  {
    id: 36,
    name: 'Kathrine Switzer',
    image:
      'https://en.wikipedia.org/wiki/Kathrine_Switzer#/media/File:Kathrine_Switzer_at_the_2011_Berlin_Marathon_Expo.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Kathrine_Switzer',
  },
  {
    id: 37,
    name: 'Alfonsina Strada',
    image:
      'http://www.joanseguidor.com/wp-content/uploads/2018/04/Giro-de-Italia-Alfonsina-Strada.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Alfonsina_Strada',
  },
  {
    id: 38,
    name: 'Sara Khadem',
    image:
      'https://i.pinimg.com/originals/be/c1/4d/bec14dd1d84498effffe4ef2c0d80988.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Sarasadat_Khademalsharieh',
  },
  {
    id: 39,
    name: 'Forough Farrokhzad',
    image:
      'https://i.pinimg.com/originals/20/aa/de/20aade70717a64867808506937d11d7f.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Forough_Farrokhzad',
  },
  {
    id: 40,
    name: 'Zaha Hadid',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/73/Zaha_Hadid_in_Heydar_Aliyev_Cultural_center_in_Baku_nov_2013.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Zaha_Hadid',
  },
  {
    id: 41,
    name: 'Zahra Nemati',
    image:
      'https://en.wikipedia.org/wiki/Zahra_Nemati#/media/File:Zahra_Nemati_in_43rd_N.O.I.C_General_Assembly.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Zahra_Nemati',
  },
   {
    id: 42,
    name: 'Fershteh Taerpour',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Fereshteh_Taerpour.jpg',
    isFlipped: false,
    cl: 'card',
    wiki: 'https://en.wikipedia.org/wiki/Fereshteh_Taerpour',
  },
  {id:43,
   name: 'Kimia Alizadeh',
   image: 'https://cdn-blog.scorum.com/production/alizali/f9216de5734c2bb8_500',
   isFlipped: false,
   cl: 'card',
   wiki: 'https://en.wikipedia.org/wiki/Kimia_Alizadeh',
  },
  {
  id:44,
  name: 'Emel Mathlouthi',
    image:'https://i.pinimg.com/236x/7e/fb/c2/7efbc2f34c62cdba5fee2a4027f942ad--rapper-female-singers.jpg',
    isFlipped: false,
    cl: 'card',
    wiki:'https://en.wikipedia.org/wiki/Emel_Mathlouthi',
},
  {
  id:45,
  name: 'Jaleh Amouzgar',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr29QZpUEFuXchruynX1kmqdIBllNfTeNSTg&usqp=CAU',
    isFlipped: false,
    cl: 'card',
    wiki:'https://en.wikipedia.org/wiki/Jaleh_Amouzgar',
https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr29QZpUEFuXchruynX1kmqdIBllNfTeNSTg&usqp=CAU
  {
    id: 46,
    name: 'Wilma Rudolph',
    image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wilma-rudolph-1940-1994-was-the-first-everett.jpg',
    isFlipped: false,
    cl : 'card',
    wiki: 'https://de.wikipedia.org/wiki/Wilma_Rudolph'
  },
   {
    id: 47,
    name: 'Behjat Sadr',
    image: 'https://upload.wikimedia.org/wikipedia/fa/0/00/Behjat.jpg',
    isFlipped: false,
    cl : 'card',
    wiki: 'https://en.wikipedia.org/wiki/Behjat_Sadr'
  },
   {
    id: 48,
    name: 'Leila Araghian',
    image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/20/1429533225225/6ce19303-1e93-4a9e-bd28-72445c5c156e-660x720.jpeg?width=300&quality=45&auto=format&fit=max&dpr=2&s=de55de1228a47430a6f5d442a3561e67',
    isFlipped: false,
    cl : 'card',
    wiki: 'https://en.wikipedia.org/wiki/Leila_Araghian'
  },
  {id:49,
   name: 'Hayedeh Safiyari',
   image:'https://i1.wp.com/www.cinedergi.com/wp-content/uploads/2019/05/Hayedeh-Safiyari.png?resize=569%2C858',
   wiki:'https://en.wikipedia.org/wiki/Hayedeh_Safiyari',
   isFlipped: false,
   cl: 'card'
  },
  {id:50,
   name: 'Nina Simone',
   image:'https://static.universal-music.de/asset_new/419487/881/view/c/Nina-Simone.jpg',
   wiki:'https://de.wikipedia.org/wiki/Nina_Simone',
   isFlipped: false,
   cl: 'card'
  },
   {id:51,
   name: 'Marjane Satrapi',
   image:'https://www.sueddeutsche.de/image/sz.1.2462414/1280x720?v=1520210258&format=webp',
   wiki:'https://en.wikipedia.org/wiki/Marjane_Satrapi',
   isFlipped: false,
   cl: 'card'
  },
   {id:52,
   name: 'Nasrin Moazami',
   image:'https://irost.org/biotech/en/sites/default/files/d_ct_staff/Prof%20Nasrin%20Moazzami1.jpg',
   wiki:'https://en.wikipedia.org/wiki/Nasrin_Moazami',
   isFlipped: false,
   cl: 'card'
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
