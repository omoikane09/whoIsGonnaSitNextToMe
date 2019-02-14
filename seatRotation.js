const imList = [ "Mariana"
               , "Alina"
               , "Osama"
               , "Mateo"
               , "Gertrude"
               , "Aiesha"
               , "Keelan"
               , "Alaw"
               , "Elly"
               , "Lili"
               , "Nimrah"
               , "Arran"
               , "Lilly"
               , "Charlize"
               ];

const seatMap = [ [ -1, -1, 9, 2]
                , [ 1, 10, 8, 3]
                , [ 0, 11, 7, 4]
                , [ 13, 12, 6, 5]
                ];

function whoIsGonnaSitNextToMe(name, nextSprintTime) {

  if (!name) {
    var name = "Mariana";
  }

  if (!nextSprintTime) {
    var nextSprintTime = 0;
  }

  var futureSeatMap = []
  for (var i=0; i<seatMap.length; i++) {
    for (var j=0; j<seatMap[i].length; j++) {
      if (seatMap[i][j] !== -1) {
        var _tmp = seatMap[i][j] - nextSprintTime;
        if (_tmp < 0) {
          futureSeatMap.push(_tmp + imList.length);
        } else {
          futureSeatMap.push(_tmp);
        }
      } else {
          futureSeatMap.push(-1);
      }
    }
  }

  console.log(futureSeatMap)
  var k = futureSeatMap.indexOf(imList.indexOf(name));
  if (k & 1 === 0) {
    return imList[futureSeatMap[k+1]];
  } else {
    return imList[futureSeatMap[k-1]];
  }

}

console.log(whoIsGonnaSitNextToMe("Mariana", 3));
