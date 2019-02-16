const { persons, sprints, seatMap } = require("./data");
const organizePair = require("./organizePair");
const whoIsGonnaSitNextToMe = require("./seatRotation");

for (let sprint in sprints) {
  console.log(sprint);
  organizePair(sprints[sprint], seatMap, persons);
}

const nextPeer = whoIsGonnaSitNextToMe(null, null, seatMap, persons);
console.log(nextPeer);
