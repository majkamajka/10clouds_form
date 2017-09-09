$(function () {

  const form = $('.form2');
  const btn = $("button");
  const formText = $('.form2 h2');
  const leftBox = $("#left-box");


  $(window).on("load", (() => {
    const slideForm = new Promise((resolve, reject) => {
      resolve(leftBox.addClass('left-slide'));
    });

    slideForm .then (form.addClass('slide-right'))
              .then(
                setTimeout(() => {
                  form.css('overflow', 'visible');
                  btn.css("display", "inline-block");
                  btn.addClass('btn-slide');
                }, 500));
	}));
});

//.then(formText.css('white-space', 'normal'))
