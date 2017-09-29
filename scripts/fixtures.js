//example album
var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
//another example album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
   };
   
   var albums = [albumPicasso, albumMarconi];
   var index = 1;
 albumImage.addEventListener("click", function(event){
       setCurrentAlbum(albums[index]);
       index++;
       if (index == albums.length){
         index = 0;
       }
 });

// // third album
// var albumPizza = {
//     title: 'Cheesy Crust Angst',
//     artist: 'Breadstick Don',
//     label: 'Sony',
//     year: '2017',
//     albumArtUrl: 'https://www.papaginos.com/assets/images/error-sadPizza.jpg',
//     songs: [
//         { title: 'Place an order?', duration: '2:01' },
//         { title: 'extra cheese is extra is that ok?', duration: '5:01' },
//         { title: 'Dont treat me like a Hot Pocket', duration: '3:21'},
//         { title: '400 Degrees is not hot enough', duration: '3:14' },
//         { title: 'I wont be your cold pizza', duration: '2:15'}
//     ]
//   };
