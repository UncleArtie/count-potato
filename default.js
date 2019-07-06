$(document).ready(function() {
  var potatoes = [
    0,
    "1:A single potato.",
    "2:A pair of potato.",
    "3:A trio of potato.",
    "4:Four",
    "5:A quintuplet of potato.",
    "6:Two trio of potatoes.",
    "7:A great many potato.",
    "8:More.More than previous posse of potatoes.",
    ".....",
    "okay, that's great",
    "you can stop now",
    "no, stop",
    "we only had 8 potatoes",
    "that's it",
    "stop",
    "STOP",
    "quit it",
    "SSTOOOOOOOOPPPP!",
    ".....",
    "......",
    "we're done",
    "DONE",
    "finished",
    ".....",
    "Are you still here?",
    "please...",
    "stop counting",
    "no more",
    "no potatoes",
    "no",
    "none",
    ".....",
    "great",
    "be a potato farmer, they said",
    "people love potato, they said",
    ".....",
    "I quit",
    "No, seriously. I quit",
    "reset",
    "RESET",
    "Hit the reset!",
    "Fine.",
    "I'll do it."
  ];

  $("#success").hide();
  $("#reset").addClass("hoverOut");
  var p = 0;
  $("#potato").click(function() {
    //alert('got here');
    //p = (p + 1) % potatoes.length;
    p++;
    $("#count").text(potatoes[p]);
    $("#success")
      .show("slow")
      .fadeOut(1000);
  });

  $("#reset").hover(
    function() {
      i = 0;
      $("#count").text(i);
      p = 0;
      $("#reset")
        .addClass("hoverIn")
        .removeClass("hoverOut");
    },
    function() {
      $("#reset")
        .removeClass("hoverIn")
        .addClass("hoverOut");
    }
  );
});
