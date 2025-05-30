let newArray = [2, 4, 3, 6, 7, 9, 1, 2, 5, 0];

function uppg9 (){
  function sort (array) {
	  for (let num of array){ 
  	  if (num % 2 === 0) {
    	  console.log(num, 'jämt');
    } else {
        console.log(num, 'udda')
    }  
  }
}
sort(newArray);
}
uppg9();

module.exports = { uppg9 };