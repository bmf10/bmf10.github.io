$(document).ready(function () {
  var s = new Date().getHours();
  s < 10 && s >= 5
    ? $("#first").html("Hello,<br> Good Morning!")
    : s <= 15 && s >= 10
    ? $("#first").html("Hello,<br> Good Afternoon!")
    : s <= 18 && s > 15
    ? $("#first").html("Hello,<br> Good Evening!")
    : $("#first").html("Hello,<br> Good Night!"),
    s < 18 &&
      s > 6 &&
      ($(".body").css("background-color", "#E8EDDF"),
      $(".text").css("color", "#242423"),
      $(".tap").css("color", "#242423")),
    $("body").click(function () {
      var s = parseInt($("#tap").val());
      switch (s) {
        case 0:
          $("#text0").css("display", "none"),
            $("#text1").css("display", "inline");
          break;
        case 1:
          $("#text1").css("display", "none"),
            $("#text2").css("display", "inline");
          break;
        case 2:
          $("#text2").css("display", "none"),
            $("#text3").css("display", "inline");
          break;
        case 3:
          $("#text3").css("display", "none"),
            $("#text4").css("display", "inline");
          break;
        case 4:
          $("#text4").css("display", "none"),
            $("#text5").css("display", "inline");
          break;
        case 5:
          $("#text5").css("display", "none"),
            $("#text6").css("display", "inline");
          break;
        case 6:
          $("#text6").css("display", "none"),
            $("#text7").css("display", "inline");
          break;
        case 7:
          $("#text7").css("display", "none"),
            $("#text8").css("display", "inline");
          break;
        case 8:
          $("#text8").css("display", "none"),
            $("#text9").css("display", "inline");
          break;
        case 9:
          $("#text9").css("display", "none"),
            $("#text10").css("display", "inline");
          break;
        case 10:
          $("#text10").css("display", "none"),
            $("#text11").css("display", "inline");
          break;
        case 11:
          $("#text11").css("display", "none"),
            $("#text12").css("display", "inline");
          break;
        case 12:
          $("#text12").css("display", "none"),
            $("#text13").css("display", "inline");
          break;
        case 13:
          window.close();
      }
      $("#tap").val(s + 1);
    });
});
