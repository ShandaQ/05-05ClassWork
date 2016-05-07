var str = "welcome to disney world";
var strLength = str.length;
var i = 0;

while (i < strLength) {
  var letter = str.charAt(i);
  var prevLetter = str.charAt(i -1);
  if(i ===0)
    console.log(letter.toUpperCase());
  else if (prevLetter === " ") {
    console.log(letter.toUpperCase());
  }
  else {
    console.log(letter);
  }

  i++;
}

/**** using split() method)***/
