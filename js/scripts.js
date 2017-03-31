function pingPongList(number) {

  
  var numbers = [];
  $(numbers.push(baseNumbers));

  // for( i=0; i<numbers.length, i++ ) {
  //   if (numbers[i] === baseNumbers)
  //   numbers.push(numbers[i])
  // }
  // numbers.unshift(function(number){
  //   numbers.push(number * 1)
  // };
}



// below is the userinterface logic

$(document).ready(function() {
    $("form#number").submit(function(event) {
      event.preventDefault();
      var finalNumber = $("input#final-number").val();
      var countingList = pingPongList(finalNumber);

      $("#counting-list").append(countingList);

      $("#counting-list").show();

  });
});



  // $("#result").show();
