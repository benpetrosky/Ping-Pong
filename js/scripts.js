function pingPongList(num) {
  var numbers = [];
  numbers.forEach(function(number){
    numbers.push(number * 1)
  };
}




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
