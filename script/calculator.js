$(document).ready(function () {
  var s = new Date().getHours();
  s < 18 && s > 6 && $("body").css("background-color", "#E8EDDF");

  $(".button").click(function () {
    let btn = $(this).html();
    let input = $(".input");
    let value = input.val();
    let valid = isValid(value);

    switch (btn) {
      case "C":
        input.val("");
        break;
      case "+":
        if (valid) {
          input.val(`${value}+`);
        }
        break;
      case "-":
        if (valid) {
          input.val(`${value}-`);
        }
        break;
      case "*":
        if (valid) {
          input.val(`${value}*`);
        }
        break;
      case "/":
        if (valid) {
          input.val(`${value}/`);
        }
        break;
      case "1":
        input.val(`${value}1`);
        break;
      case "2":
        input.val(`${value}2`);
        break;
      case "3":
        input.val(`${value}3`);
        break;
      case "4":
        input.val(`${value}4`);
        break;
      case "5":
        input.val(`${value}5`);
        break;
      case "6":
        input.val(`${value}6`);
        break;
      case "7":
        input.val(`${value}7`);
        break;
      case "8":
        input.val(`${value}8`);
        break;
      case "9":
        input.val(`${value}9`);
        break;
      case "0":
        input.val(`${value}0`);
        break;
      case "=":
        let result = eval(value);
        input.val(result);
        break;
      default:
        break;
    }
  });

  function isValid(value) {
    let last = value.slice(-1);
    if (
      last == "+" ||
      last == "-" ||
      last == "*" ||
      last == "/" ||
      last == ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  setInterval(() => {
    $(".input").attr("readonly", true);
  }, 100);
});
