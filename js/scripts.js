function pingPongList(number) {
  // var baseNumbers = ["1","2","3",'4',"5","6","7","8"]
  var numbers = [];
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

      $("#counting-list").text(countingList);

      $("#counting-list").show();

  });
});



  // $("#result").show();
