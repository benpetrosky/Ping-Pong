var pingPongList = function (number) {

  var output = [];


  for(var i=1; i<=number; i++ ) {
    if (i % 15 === 0)
    {
      output.push("ping-pong");
    }
    else if (i % 5 === 0)
    {
      output.push("pong");
    }
    else if (i % 3 === 0)
    {
      output.push("ping");
    }
    else
    {
      output.push(i);
    }
    console.log(output)
  };
  return output
};




// below is the userinterface logic

$(document).ready(function() {
    $("form#number").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("input#final-number").val());
      var countingList = pingPongList(userInput);


      countingList.forEach(function(countingList){
      $("#counting-list").append("<li>" + countingList);

      $("#counting-list").show();
      $(".match").show();
    });
    });
  });




  // $("#result").show();
