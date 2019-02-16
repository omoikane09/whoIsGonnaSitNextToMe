const organaizePairs = (nextSprintTime, seatMap, persons) => {
  if (!nextSprintTime) {
    nextSprintTime = 0;
  }

  let futureSeatMap = seatMap.map(row => {
    return [...row];
  });

  for (let i = 0; i < seatMap.length; i++) {
    for (let j = 0; j < seatMap[i].length; j++) {
      if (seatMap[i][j] !== -1) {
        let _tmp = seatMap[i][j] - nextSprintTime;
        if (_tmp < 0) {
          futureSeatMap[i][j] = _tmp + persons.length;
        } else {
          futureSeatMap[i][j] = _tmp;
        }
      }
    }
  }

  for (let i = 0; i < futureSeatMap.length; i++) {
    for (let j = 0; j < futureSeatMap[i].length; j++) {
      if (futureSeatMap[i][j] === -1) {
        futureSeatMap[i][j] = "empty";
      } else {
        futureSeatMap[i][j] = persons[futureSeatMap[i][j]];
      }
    }
  }
  // eslint-disable-next-line
  console.log(futureSeatMap);
};

module.exports = organaizePairs;
