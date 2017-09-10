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
  // const gender
  const dobDay = $('#dobDay');
  const dobMonthNum = $('#dobMonth-num');
  const dobMonthName = $('#dobMonth-name');
  const dobYear = $('#dobYear');

  $(name).on("change", () => {
    $('.tel-warn').remove();

    let warning = $("<span class='warning tel-warn'></span>");



    if (name.val().length === 0) { // czy wpisane
      warning.text("Please enter your name");
      $(name).after(warning);
    }

    if (name.val().length >50) { // czy nie za długie
      console.log("name cannot be longet than 50 chars");
    }

    if (name.val().indexOf(' ') > 0 && name.val().indexOf(' ') < name.val().length -2) { // czy jest spacja w środku
      console.log("ok");
    } else {
      console.log("please enter both first and second name");
    }
  });


  $(prefix).on("change", () => console.log(prefix.val()));

  $(tel).on("change", () => {
    let tel2 = tel.val();
    tel2 = tel2.split(" ").join("");
    tel2 = tel2.split("-").join("");
    if (tel2.length != 9) {
      console.log("Please enter valid phone number (9 characters)");
    }
  });


  $(dobDay).on("change", () => console.log(dobDay.val()));
  $(dobMonthNum).on("change", () => console.log(dobMonthNum.val()));
  $(dobMonthName).on("change", () => console.log(dobMonthName.val()));
  $(dobYear).on("change", () => console.log(dobYear.val()));

  $(btn).on("click", () => {
    event.preventDefault();
    console.log();
  })


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
