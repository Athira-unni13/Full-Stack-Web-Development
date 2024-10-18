$("h1").addClass("big-title");
$("body").on("keydown",function(event){
  var keyValue = event.key;
  $("h1").text(keyValue);
})