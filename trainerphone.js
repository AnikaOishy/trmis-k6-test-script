const trainers = require("./traner.json");


const trainerPhoneNumber = trainers.map(trainer => {
    return trainer.phone;
});

console.log(trainerPhoneNumber);

// export default trainerPhoneNumber;
