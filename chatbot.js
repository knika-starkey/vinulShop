$(function () {
  const phrases = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!",
    "С Вами очень приятно общаться!",
  ];

  const hello = "Привіт! Я - радіо Марія";
  const goodbye = "До зустрічі!";
  //   $("h2").css("color", "red");

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });
  $("#answers").append(`<div class="bot_answ">${hello}</div>`);
  $("#answers").click(function () {
    return false;
  });
  $("#ok").click(function () {
    let q = $("#question").val().trim();
    if (q != "") {
      $("#answers").append(`<div class="human_answ">${q}</div>`);
      setTimeout(function () {
        if (q.toLowerCase().includes("bye")) {
          $("#answers").append(`<div class="bot_answ">${goodbye}</div>`);
        } else {
          $("#answers").append(`<div class="bot_answ">!!!</div>`);
        }

        let chatbot = document.getElementById("chatbot");
        $("#chatbot").animate(
          { scrollTop: chatbot.scrollHeight - chatbot.clientHeight },
          500
        );
      }, 1000);
    }

    $("#question").val("");
    return false;
  });
  function enterKey(event) {
    if (event.keyCode == 13) {
      $("#ok").click();
      return false;
    }
  }
  $("#question").keypress("keyup", enterKey);
  $("#question").click(function () {
    return false;
  });
});
