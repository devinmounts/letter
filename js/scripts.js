// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     var nameInput = $("input#name").val();
//     var addressInput = $("input#address").val();
//     var toInput= $("input#to").val();
//     var exclamationInput = $("input#exclamation").val();
//     var closingInput = $("input#closing").val();
//
//     $(".name").text(nameInput);
//     $(".address").text(addressInput);
//     $(".to").text(toInput);
//     $(".exclamation").text(exclamationInput);
//     $(".closing").text(closingInput);
//
//     $("#letter").show();
//
//     event.preventDefault();
//   });
// });

//
$(document).ready(function(){
  ("formOne").submit(function(event){
    var name = $("#name").val();
    var address = $("#address").val();
    var to = $("#to").val();
    var exclamation = $("#to").val();
    var closing = $("#closing").val();

    $(".name").text(name);
    $(".address").text(address);
    $(".to").text(to);
    $("exclamation").text(exclamation);
    $("closing").text(closing);
  })
})
