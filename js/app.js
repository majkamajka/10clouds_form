$(function () {

//animations
  const form = $('.form2');
  const btn = $("button");
  const formText = $('.form2 h2');
  const leftBox = $("#left-box");
  const leftLines = $('#cover img');
  const tabs = $('.tab');
  const bgTop = $('#gradient-lines');
  const linesBottom = $('#lines-bottom');

//form
  const name = $('#name');
  const prefix = $('#prefix');
  const tel = $('#tel-number');
  const dobDay = $('#dobDay');
  const dobMonthNum = $('#dobMonth-num');
  const dobMonthName = $('#dobMonth-name');
  const dobYear = $('#dobYear');

  $(name).on("change", () => {
    $('span.warning.name-warn').empty();
    let warning = $("<span class='warning name-warn'></span>");

    if (name.val().length > 50) { // czy nie za długie
      warning.text("Name cannot be longer than 50 characters");
      $(name).after(warning);
    }

    if (name.val().indexOf(' ') > 0 && name.val().indexOf(' ') < name.val().length -2) { // czy jest spacja w środku
      console.log("name ok");
    } else {
      warning.text("Please enter both - first and second name");
      $(name).after(warning);
    }

    if (name.val().length === 0) { // czy wpisane
      warning.text("Please enter your name");
      $(name).after(warning);
    }
  });

  $(prefix).on("change", () => console.log(prefix.val()));

  $(tel).on("change", () => {
    $('span.warning.tel-warn').empty();
    let warning = $("<span class='warning tel-warn'></span>");
    if (tel.val().match(/^\d+$/) && tel.val().length === 9) { // match via stack overflow
      console.log("telephone number ok");
    } else {
      warning.text("Please enter valid phone number (9 digits)");
      $(tel).after(warning);
    }
  });

  $(dobDay).on("change", () => {
    $('span.warning.dobDay-warn').empty();
    let warning = $("<span class='warning dobDay-warn'></span>");
    if (dobDay.val() < 1 || dobDay.val() >31) {
      warning.text("range: 1-31");
      $('#dob').append(warning);
    }
  });

  $(dobMonthNum).on("change", () => console.log(dobMonthNum.val()));
  $(dobMonthName).on("change", () => console.log(dobMonthName.val()));

  $(dobYear).on("change", () => {
    $('span.warning.dobYear-warn').empty();
    let warning = $("<span class='warning dobYear-warn'></span>");
    if (dobYear.val() < 1900 || dobYear.val() >2017) {
      warning.text("range: 1900-2017");
      $('#dob').append(warning);
    }
  });

  $(btn).on("click", () => {
    event.preventDefault();
    console.log($('.warning'));
  });









  $(window).on("load", (() => {
    const slideForm = new Promise((resolve, reject) => {
      resolve(leftBox.addClass('left-slide'));
    });

    slideForm .then(bgTop.addClass('grow-gradient'))
              .then(linesBottom.addClass('slide-bottom-lines'))
              .then(setTimeout(() => {
                  form.addClass('slide-right');
                  leftLines.addClass('img-resize');
                }, 500))
              .then(formText.css('white-space', 'normal'))
              .then(setTimeout(() => {
                  form.css('overflow', 'visible');
                  btn.css("display", "inline-block");
                  btn.addClass('btn-slide');
                  tabs.addClass('slide-tabs')
                }, 900));
	}));
});
