$(function () {

  const form = $('.form2');
  const btn = $("button");
  const formText = $('.form2 h2');
  const leftBox = $("#left-box");
  const leftLines = $('#cover img');


  $(window).on("load", (() => {
    const slideForm = new Promise((resolve, reject) => {
      resolve(leftBox.addClass('left-slide'));
    });

    slideForm .then(
                setTimeout(() => {
                  form.addClass('slide-right')
                }, 500))
              .then(formText.css('white-space', 'normal'))
              .then(
                setTimeout(() => {
                  leftLines.addClass('img-resize');
                  form.css('overflow', 'visible');
                  btn.css("display", "inline-block");
                  btn.addClass('btn-slide');
                }, 1300));
	}));
});

//.then(formText.css('white-space', 'normal'))
