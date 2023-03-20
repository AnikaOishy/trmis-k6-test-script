import http from 'k6/http';
import { check } from 'k6';
import accesso from './token.js';
import url from './url.js';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

const img1 = open('../TrMIS-testscript/assest/anki.jpeg', 'b');
// const img2 = open('./TrMIS-testscript/assest/Lamia Parven Khan.jpg', 'b');
// const txt = open('/path/to/text.txt');
export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '10s', // total duration
      preAllocatedVUs: 11, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const fd = new FormData();
  // fd.append('someTextField', 'someValue');
  // fd.append('aBinaryFile', { data: new Uint8Array(img1).buffer, filename: 'logo.png', content_type: 'image/jpeg' });
  // fd.append('anotherTextField', 'anotherValue');
  fd.append('files', http.file(img1, 'image1.jpeg', 'image/jpeg'));
  // fd.append('images', http.file(img2, 'image2.jpg', 'image/jpeg'));
  // fd.append('title', "TITLE");
  // fd.append('description', "ddescription");
  // fd.append('show_in_home_page', "true");
  // fd.append('expiration_date', "2023-02-26T04:11:33.130Z");
  const data = {
    'title' : 'new t',
    'description' : 'descripsdf',
    'show_in_home_page' : "true",
    'expiration_date' : "2023-02-26T04:11:33.130Z",
    'files' : fd
  }


  const headers = { 'Content-Type': 'multipart/form-data; boundary=' + fd.boundary, 'Authorization': 'Bearer '+accesso };
  http.post(url+'notice/', data, { headers });
  // check(res, {
  //   'is status 200': (r) => r.status === 200,
  // });
}


// import http from 'k6/http';
// import accesso from './token.js';
// import url from './url.js';





// function getRandomInt(min, max) {
//   	return Math.floor(Math.random() * (max - min)) + min;
// }

// function generateName(){
// 	var name1 = ["TinciduntEgetTempus.mp3","NislDuis.jpeg","AmetNunc.mov","PurusEuMagna.avi","EstQuam.ppt","TinciduntEgetTempus.gif","Lectus.jpeg","Nam.xls","Vestibulum.avi","DictumstMorbiVestibulum.pdf","PulvinarNulla.mp3","Morbi.doc","EleifendQuamA.avi","Quam.xls","EtUltrices.xls","EnimSitAmet.ppt","NibhQuisque.gif","PretiumIaculisJusto.xls","Aliquet.ppt","EstQuam.mp3","MassaDonecDapibus.mpeg","NislAeneanLectus.jpeg","Volutpat.ppt","LiberoNamDui.jpeg","EtiamVel.pdf","Donec.mov","Arcu.mov","Etiam.xls","Maecenas.ppt","Diam.tiff","VulputateVitae.doc","VelNullaEget.tiff","MassaDonec.tiff","Quam.tiff","IpsumPrimisIn.doc","PotentiNullamPorttitor.pdf","PotentiInEleifend.png","Adipiscing.tiff","LoremVitae.jpeg","ViverraDapibus.mpeg","SagittisDuiVel.tiff","Ut.mp3","EleifendQuam.gif","Pede.ppt","Congue.ppt","EstDonec.avi","Sem.avi","CrasInPurus.jpeg","Accumsan.ppt","Sit.avi"];

 



// 	var name = name1[getRandomInt(0, name1.length + 1)];
// 	return name;

// }

// function generatefile(){
// 	var name2 = ["TinciduntEgetTempus.mp3","NislDuis.jpeg","AmetNunc.mov","PurusEuMagna.avi","EstQuam.ppt","TinciduntEgetTempus.gif","Lectus.jpeg","Nam.xls","Vestibulum.avi","DictumstMorbiVestibulum.pdf","PulvinarNulla.mp3","Morbi.doc","EleifendQuamA.avi","Quam.xls","EtUltrices.xls","EnimSitAmet.ppt","NibhQuisque.gif","PretiumIaculisJusto.xls","Aliquet.ppt","EstQuam.mp3","MassaDonecDapibus.mpeg","NislAeneanLectus.jpeg","Volutpat.ppt","LiberoNamDui.jpeg","EtiamVel.pdf","Donec.mov","Arcu.mov","Etiam.xls","Maecenas.ppt","Diam.tiff","VulputateVitae.doc","VelNullaEget.tiff","MassaDonec.tiff","Quam.tiff","IpsumPrimisIn.doc","PotentiNullamPorttitor.pdf","PotentiInEleifend.png","Adipiscing.tiff","LoremVitae.jpeg","ViverraDapibus.mpeg","SagittisDuiVel.tiff","Ut.mp3","EleifendQuam.gif","Pede.ppt","Congue.ppt","EstDonec.avi","Sem.avi","CrasInPurus.jpeg","Accumsan.ppt","Sit.avi"];

 



// 	var nam = name2[getRandomInt(0, name2.length + 1)];
// 	return nam;

// }






// export const options = {
//   scenarios: {
//     my_scenario1: {
//       executor: 'constant-arrival-rate',
//       duration: '5s', // total duration
//       preAllocatedVUs: 5, // to allocate runtime resources     preAll

//       rate: 1, // number of constant iterations given `timeUnit`
//       timeUnit: '1s',

      
//     },
//   },
// };

// export default function () {
//   const payload = JSON.stringify({

    
    
//           "title": "CS",
//           "description": "string",
//           "uploaded_files": [generateName()]
        
//   });
//   const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
//   http.post(url+'notice/', payload, { headers });
// }


// // let res = http.post("http://your-api.com/upload", JSON.stringify({file: file}), {
// //   headers: { "Content-Type": "application/json" }
// // });