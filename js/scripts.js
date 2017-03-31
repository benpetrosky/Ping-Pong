function pingPongList(number) {

  var numbers = [];
  alert(numbers)

  // for( i=0; i<numbers.length, i++ ) {
  //   if (numbers[i] ===)
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

      $("#countinglist").text(countingList);

      $("#counting-list").show();
    $("#swing").mouseover(function() {
      $("#swing").attr("src", "img/obama-horz.jpeg");
    });
    $("#swing").mouseout(function() {
      $("#swing").attr("src", "img/obama.jpeg");
    });
  });
});



  // $("#result").show();
