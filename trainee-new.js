import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateNamemail() {
    var name1 = [  "Aaliyah",  "Abigail",  "Adrian",  "Aiden",  "Alexander",  "Alice",  "Amelia",  "Andrew",  "Angel",  "Anthony",  "Ariana",  "Ariel",  "Asher",  "Ava",  "Avery",  "Benjamin",  "Brianna",  "Caleb",  "Camila",  "Caroline",  "Carter",  "Charlotte",  "Chloe",  "Christopher",  "Claire",  "Clara",  "Connor",  "Daniel",  "David",  "Dylan",  "Eleanor",  "Elena",  "Eli",  "Elijah",  "Elizabeth",  "Ella",  "Ellie",  "Emily",  "Emma",  "Ethan",  "Evelyn",  "Faith",  "Finn",  "Gabriel",  "Grace",  "Hailey",  "Hannah",  "Harper",  "Henry",  "Isaac",  "Isabella",  "Jackson",  "Jacob",  "Jasmine",  "Jayden",  "Jocelyn",  "John",  "Jonathan",  "Jordan",  "Joseph",  "Joshua",  "Julia",  "Julian",  "Katherine",  "Katie",  "Kayla",  "Kevin",  "Landon",  "Lauren",  "Leah",  "Levi",  "Liam",  "Lila",  "Lillian",  "Lily",  "Logan",  "Lucas",  "Lucy",  "Luke",  "Mackenzie",  "Madeline",  "Makayla",  "Maria",  "Mason",  "Matthew",  "Max",  "Maya",  "Mia",  "Michael",  "Mila",  "Miles",  "Molly",  "Natalie",  "Nathan",  "Nevaeh",  "Nicholas",  "Noah",  "Oliver",  "Olivia",  "Owen",  "Paige",  "Penelope",  "Peyton",  "Phoebe",  "Quinn",  "Rachel",  "Rebecca",  "Riley",  "Ryan",  "Sadie",  "Samuel",  "Sarah",  "Savannah",  "Scarlett",  "Sebastian",  "Sophia",  "Stella",  "Steven",  "Sydney",  "Taylor",  "Thomas",  "Trinity",  "Tyler",  "Victoria",  "Violet",  "William",  "Wyatt",  "Xander",  "Zachary",  "Zoe"];

    var ret = name1[getRandomInt(1,60)]+"@gmail.com"; 
    return ret;
}
function generateName() {
    var name1 = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoe", "Natalie", "Leah", "Hannah", "Lillian", "Evelyn", "Addison", "Aubree", "Ellie", "Stella", "Natalie", "Zoey", "Jasmine", "Hazel", "Natalie", "Aurora", "Brooklyn", "Bella", "Claire", "Skylar", "Liliana", "Natalie", "Aubree", "Rylee", "Allison", "Brooklyn", "Brielle", "Adalyn", "Raelynn", "Maria", "Athena", "Ximena", "Avery", "Aaliyah", "Jordyn", "Mackenzie", "Adalynn", "Harmony", "Adeline", "Ryleigh", "Melody", "Isabelle", "Brooklyn", "Arya", "Annabelle", "Kaylee", "Aaliyah", "Aurora", "Hailee", "Jasmine", "Gianna", "Aubree", "Bella", "Autumn", "Makayla", "Avery", "Brooklyn", "Brooklynn", "Bella", "Adalynn", "Raelynn", "Maria", "Lydia", "Peyton", "Makayla", "Avery", "Mariana", "Avery", "Eleanor", "Cameron", "Adalyn", "Makayla", "Avery", "Aria", "Avery", "Maria", "Naomi", "Avery", "Avery", "Mackenzie", "Autumn", "Makayla", "Avery", "Avery", "Maria", "Mackenzie", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery"];

    var name = name1[getRandomInt(0, name1.length + 1)];
    return name;

}
function generateAddress(){
    var numb = getRandomInt(1, 25) ;
    var name1 = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoe", "Natalie", "Leah", "Hannah", "Lillian", "Evelyn", "Addison", "Aubree", "Ellie", "Stella", "Natalie", "Zoey", "Jasmine", "Hazel", "Natalie", "Aurora", "Brooklyn", "Bella", "Claire", "Skylar", "Liliana", "Natalie", "Aubree", "Rylee", "Allison", "Brooklyn", "Brielle", "Adalyn", "Raelynn", "Maria", "Athena", "Ximena", "Avery", "Aaliyah", "Jordyn", "Mackenzie", "Adalynn", "Harmony", "Adeline", "Ryleigh", "Melody", "Isabelle", "Brooklyn", "Arya", "Annabelle", "Kaylee", "Aaliyah", "Aurora", "Hailee", "Jasmine", "Gianna", "Aubree", "Bella", "Autumn", "Makayla", "Avery", "Brooklyn", "Brooklynn", "Bella", "Adalynn", "Raelynn", "Maria", "Lydia", "Peyton", "Makayla", "Avery", "Mariana", "Avery", "Eleanor", "Cameron", "Adalyn", "Makayla", "Avery", "Aria", "Avery", "Maria", "Naomi", "Avery", "Avery", "Mackenzie", "Autumn", "Makayla", "Avery", "Avery", "Maria", "Mackenzie", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery"];
    var addre = (numb+" "+name1[getRandomInt(0, name1.length + 1)]+" Road"+ " , Dhaka").toString();
    return addre;

}

function generateDate(){

    var name1 = [ "1990-02-01",
    "1990-06-07",
    "1990-11-12",
    "1991-03-19",
    "1991-07-25",
    "1991-12-30",
    "1992-05-05",
    "1992-09-10",
    "1992-12-15",
    "1993-04-22",
    "1993-08-27",
    "1993-12-01",
    "1994-03-08",
    "1994-07-14",
    "1994-12-19",
    "1995-04-26",
    "1995-08-31",
    "1995-12-06",
    "1996-01-11",
    "1996-05-17",
    "1996-10-22",
    "1997-02-26",
    "1997-07-03",
    "1997-12-08",
    "1998-01-13",
    "1998-05-20",
    "1998-10-25",
    "1999-03-03",
    "1999-07-08",
    "1999-12-13",
    "2000-02-18",
    "2000-06-24",
    "2000-11-29",
    "1990-01-02",
    "1990-05-08",
    "1990-10-13",
    "1991-02-18",
    "1991-06-24",
    "1991-11-29",
    "1992-03-05",
    "1992-07-10",
    "1992-11-15",
    "1993-03-22",
    "1993-07-27",
    "1993-12-02",
    "1994-02-07",
    "1994-06-13",
    "1994-11-18",
    "1995-03-25",
    "1995-07-30",
    "1995-11-04",
    "1996-02-09",
    "1996-06-15",
    "1996-11-20",
    "1997-03-28",
    "1997-08-02",
    "1997-11-07",
    "1998-02-11",
    "1998-06-17",
    "1998-11-22",
    "1999-03-01",
    "1999-07-06",
    "1999-12-11",
    "2000-01-16",
    "2000-05-22",
    "2000-10-27",
    "1990-02-01",
    "1990-06-07",
    "1990-11-12",
    "1991-03-19",
    "1991-07-25",
    "1991-12-30",
    "1992-05-05",
    "1992-09-10",
    "1992-12-15",
    "1993-04-22",
    "1993-08-27",
    "1993-12-01",
    "1994-03-08",
    "1994-07-14",
    "1994-12-19",
    "1995-04-26",
    "1995-08-31"];
    var name = name1[getRandomInt(0, name1.length + 1)];
    return name;

}




export const options = {
    scenarios: {
        my_scenario1: {
            executor: 'constant-arrival-rate',
            duration: '9', // total duration
            preAllocatedVUs: 10, // to allocate runtime resources     preAll

            rate: 1, // number of constant iterations given `timeUnit`
            timeUnit: '1s',
        },
    },
};

export default function () {
    const payload = JSON.stringify({



        "phone": Math.floor(Math.random() * 10000000),
        "name": generateName(),
        "emg_phone": Math.floor(Math.random() * 10000000),
        "nid": Math.floor(Math.random() * 1000000),
        "email": generateNamemail(),
        "gender": getRandomInt(1, 3),
        "marital_status": getRandomInt(1, 3),
        "dob": generateDate(),
        "address": generateAddress(),
        "designation": getRandomInt(1, 2),
        "organization": getRandomInt(1, 4),
        "division": getRandomInt(1, 8),
        "district": getRandomInt(1, 64),
        "sub_district": getRandomInt(1, 491),
        




    });
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accesso };
    http.post(url + "trainee/", payload, { headers });

}