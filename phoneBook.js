/*names are the keys and number are the values*/
var phoneBook = {
  Dorothy : '123-123-1234',
  TinMan: '12344-123435',
  Lion: '123-124-1241'
};

var name = "Dorothy"
var dorothyNumber = phoneBook[name]; //you have more flexability using subscript location
var alsoDorothyNumber = phoneBook.Dorothy

console.log(dorothyNumber);
console.log(alsoDorothyNumber);
//console.log(phoneBook);

//loop through an object
for(var key in phoneBook) {
  console.log("number for " + key);
}

/*looking up name by number */
var someoneNumber = '123-124-1241'
for(var key in phoneBook) {
  var phoneNumber = phoneBook[key];
  if(phoneNumber === someoneNumber) {
    console.log("that " + key + "'s phone number'");
  }
}

/*add or update values*/
phoneBook.Dorothy = '987-555-5555';

/* Add a key and value after the declaration of the object*/
phoneBook.Crow = '455-555-5555';

/*delete entry*/
delete.phoneBook.Dorothy;
