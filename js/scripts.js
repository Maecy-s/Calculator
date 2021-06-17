// var add = (number1, number2) => number1 + number2;
// console.log(add(3,4));
// var add = function(number1, number2){
//     return number1 + number2;
//     };
//     var number1 = parseInt(prompt("Enter a number:"));
//     var number2 = parseInt(prompt("Enter another number:"));
//     alert(add(number1, number2));
var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  var divide = function(number1, number2) {
    return number1 / number2;
  };


  
  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number:"));
  // var result = add(number1, number2);
  // alert(add(number1, number2));

                   //front end



// $(document).ready(function() {
//  var number1 = parseInt(prompt("Enter a number:"));
//  var number2 = parseInt(prompt("Enter another number:"));
//  alert(add(number1, number2));
// });


// $(document).ready(function() {
//   var number1 = parseInt($("#add1").val());
//   var number2 = parseInt($("add2").val());
//   alert(add(number1, number2));
//  });


$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  // alert(add(number1, number2));
  var result = add(number1, number2);
  $("#output").text(result);
 });
});

$(document).ready(function() {
  $("form#subtract").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#subtract1").val());
  var number2 = parseInt($("#subtract2").val());
  // alert(subtract(number1, number2));
  var result = subtract(number1, number2);
  $("#output").text(result);
 });
});


$(document).ready(function() {
  $("form#multiply").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#multiply1").val());
  var number2 = parseInt($("#multiply2").val());
  // alert(multiply(number1, number2));
  var result = multiply(number1, number2);
  $("#output").text(result);
 });
});

$(document).ready(function() {
  $("form#divide").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#divide1").val());
  var number2 = parseInt($("#divide2").val());
  // alert(divide(number1, number2));
  var result = divide(number1, number2);
  $("#output").text(result);
 });
});