/*    An exercise using react to build a phonetic alphabet converter

      Author: Richard Myatt
      Date: 28 June 2018
*/

function convertLetter(letter) {
  switch(letter.toUpperCase()) {
    case "A":
      return "Alpha";
    case "B":
      return "Bravo";
    case "C":
      return "Charlie";
    case "D":
      return "Delta";
    case "E":
      return "Echo";
    case "F":
      return "Foxtrot";
    case "G":
      return "Golf";
    case "H":
      return "Hotel";
    case "I":
      return "India";
    case "J":
      return "Juliett";
    case "K":
      return "Kilo";
    case "L":
      return "Lima";
    case "M":
      return "Mike";
    case "N":
      return "November";
    case "O":
      return "Oscar";
    case "P":
      return "Papa";
    case "Q":
      return "Quebec";
    case "R":
      return "Romeo";
    case "S":
      return "Sierra";
    case "T":
      return "Tango";
    case "U":
      return "Uniform";
    case "V":
      return "Victor";
    case "W":
      return "Whiskey";
    case "X":
      return "X-ray";
    case "Y":
      return "Yankee";
    case "Z":
      return "Zulu";
    default:
      return ">>> ";
  }
}

function convertText(txt) {
  var res = "";
  for(var i = 0; i < txt.length; i++) {
    res += convertLetter(txt[i]) + " ";
  }
  return res;
}
