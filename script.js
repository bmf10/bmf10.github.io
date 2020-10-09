$(document).ready(function () {
  for (let i = 0; i < 13; i++) {
    $(`#text${i + 1}`).css("display", "none");
  }

  $(".body").click(function () {
    var c = parseInt($("#tap").val());

    switch (c) {
      case 0:
        $("#text0").css("display", "none");
        $("#text1").css("display", "table-cell");
        break;
      case 1:
        $("#text1").css("display", "none");
        $("#text2").css("display", "table-cell");
        break;
      case 2:
        $("#text2").css("display", "none");
        $("#text3").css("display", "table-cell");
        break;
      case 3:
        $("#text3").css("display", "none");
        $("#text4").css("display", "table-cell");
        break;
      case 4:
        $("#text4").css("display", "none");
        $("#text5").css("display", "table-cell");
        break;
      case 5:
        $("#text5").css("display", "none");
        $("#text6").css("display", "table-cell");
        break;
      case 6:
        $("#text6").css("display", "none");
        $("#text7").css("display", "table-cell");
        break;
      case 7:
        $("#text7").css("display", "none");
        $("#text8").css("display", "table-cell");
        break;
      case 8:
        $("#text8").css("display", "none");
        $("#text9").css("display", "table-cell");
        break;
      case 9:
        $("#text9").css("display", "none");
        $("#text10").css("display", "table-cell");
        break;
      case 10:
        $("#text10").css("display", "none");
        $("#text11").css("display", "table-cell");
        break;
      case 11:
        $("#text11").css("display", "none");
        $("#text12").css("display", "table-cell");
        break;
      case 12:
        $("#text12").css("display", "none");
        $("#text13").css("display", "table-cell");
        break;
      default:
        break;
    }

    $("#tap").val(c + 1);
  });
});
