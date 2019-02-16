function whoIsGonnaSitNextToMe(name, nextSprintTime, seatMap, persons) {
  if (!name) {
    var name = "Mariana";
  }

  if (!nextSprintTime) {
    var nextSprintTime = 0;
  }

  var futureSeatMap = [];
  for (var i = 0; i < seatMap.length; i++) {
    for (var j = 0; j < seatMap[i].length; j++) {
      if (seatMap[i][j] !== -1) {
        var _tmp = seatMap[i][j] - nextSprintTime;
        if (_tmp < 0) {
          futureSeatMap.push(_tmp + persons.length);
        } else {
          futureSeatMap.push(_tmp);
        }
      } else {
        futureSeatMap.push(-1);
      }
    }
  }

  var k = futureSeatMap.indexOf(persons.indexOf(name));
  if (k & (1 === 0)) {
    return persons[futureSeatMap[k + 1]];
  } else {
    return persons[futureSeatMap[k - 1]];
  }
}

module.exports = whoIsGonnaSitNextToMe;
