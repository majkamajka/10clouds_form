$(function () {

  const form = $('.form2');
  const btn = $("button");
  const formText = $('.form2 h2');
  const leftBox = $("#left-box");
  const leftLines = $('#cover img');
  const tabs = $('.tab');
  const bgTop = $('#gradient-lines');
  const linesBottom = $('#lines-bottom');


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

//.then(formText.css('white-space', 'normal'))
