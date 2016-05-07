/**********************/
var n = 4;
for(var i = 0; i < n; i++){
  var row = '';
  for(var j = 0; j < n; j++){
/****** First Row ************/
    if(i === 0){
      if(j === 0)
        row = row + '*';
      if(j < (n-1) && j !== (n-1))
        if( j % 2 === 0)
          row = row + "--";
        else {
          row = row + '*';
        }
        if(j === (n-1))
          row = row + '*';
    }
/****** Second Row ************/
    if(i === 1){

    }
  }
    console.log(row);
  }
