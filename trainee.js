import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateNamemail() {
    var name1 = ["Md. Omar Faruk", "Md. Nazibul Haque", "Md. Hasibul Islam", "Nasrin Jahan Nipa", "Chondon Mondal", "Mst. Taslima Akter", "Md. Zakaria", "Imran Ali", "Mst. Sharmin Akter", "Md. Millat Hossain", "Md. Ariful Islam", "Taharul Islam", "Parvej Mosharof", "Khairunnahar", "Shibly Akter", "Md. Tamim Islam", "Nasrin Akter", "Md. Zahid Ali", "Md. Mahbub Hossain", "Md. Sabbir Ahmed"];
    var ret = name1[getRandomInt(1,60)]+"@gmail.com"; 
    return ret;
}
function generateName() {
    var name1 = ["Md. Omar Faruk", "Md. Nazibul Haque", "Md. Hasibul Islam", "Nasrin Jahan Nipa", "Chondon Mondal", "Mst. Taslima Akter", "Md. Zakaria", "Imran Ali", "Mst. Sharmin Akter", "Md. Millat Hossain", "Md. Ariful Islam", "Taharul Islam", "Parvej Mosharof", "Khairunnahar", "Shibly Akter", "Md. Tamim Islam", "Nasrin Akter", "Md. Zahid Ali", "Md. Mahbub Hossain", "Md. Sabbir Ahmed"];

    var name = name1[getRandomInt(0, name1.length + 1)];
    return name;

}
function generateAddress(){
    var numb = getRandomInt(1, 25) ;
    var name1 = ["Md. Omar Faruk", "Md. Nazibul Haque", "Md. Hasibul Islam", "Nasrin Jahan Nipa", "Chondon Mondal", "Mst. Taslima Akter", "Md. Zakaria", "Imran Ali", "Mst. Sharmin Akter", "Md. Millat Hossain", "Md. Ariful Islam", "Taharul Islam", "Parvej Mosharof", "Khairunnahar", "Shibly Akter", "Md. Tamim Islam", "Nasrin Akter", "Md. Zahid Ali", "Md. Mahbub Hossain", "Md. Sabbir Ahmed"];
    var addre = (numb+" "+name1[getRandomInt(0, name1.length + 1)]+" Road"+ " , Dhaka").toString();
    return addre;

}



export const options = {
    scenarios: {
        my_scenario1: {
            executor: 'constant-arrival-rate',
            duration: '5s', // total duration
            preAllocatedVUs: 5, // to allocate runtime resources     preAll

            rate: 1, // number of constant iterations given `timeUnit`
            timeUnit: '1s',
        },
    },
};

export default function () {
    const payload = JSON.stringify({
        // "phone": Math.floor(Math.random() * 10000000),
        // "name": generateName(),
        // "nid": Math.floor(Math.random() * 1000000),
        // "email": generateNamemail(),
        // "gender": getRandomInt(1, 3),
        // "marital_status": getRandomInt(1, 3),
        // "address": generateAddress(),
        // "designation": getRandomInt(28, 29),
        // "organization": getRandomInt(10, 13),
        // "division": getRandomInt(1, 8),
        // "district": getRandomInt(1, 64),
        // "sub_district": getRandomInt(1, 491),

        // "phone": Math.floor(Math.random() * 10000000),
        // "gender": 3,
        // "marital_status": 6,
        // "name": generateName(),
        // "nid": Math.floor(Math.random() * 10000000),
        // "email": generateNamemail(),
        // "address": generateAddress(),
        // "designation": 1,
        // "organization": 1,
        // "division": 1,
        // "district": 1,
        // "sub_district": 1,
        // "area_of_specialization": "OK",
        // "dob": "2023-02-23",

        "phone": Math.floor(Math.random() * 10000000),
        "gender": 2,
        "name": generateName(),
        "nid": Math.floor(Math.random() * 10000000),
        "email": generateNamemail(),
        "address": generateAddress(),
        "marital_status": 6,
        "designation": getRandomInt(1,2),
        "organization": getRandomInt(1,2),
        "division": 1,
        "district": 1,
        "sub_district": 1,
        "hris": Math.floor(Math.random() * 10000000)
//        "hris": Math.floor(Math.random() * 2),
    });
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accesso };
    http.post(url + "trainee/", payload, { headers });

}