$(function () {

  const form = $('.form2');
  const btn = $("button");
  const formText = $('.form2 h2');

  $(window).on("load", (() => {
    const slideForm = new Promise((resolve, reject) => {
      resolve(form.addClass('slide-right'));
    });
    slideForm .then(formText.css('white-space', 'normal'))
              .then(
                setTimeout(() => {
                  form.css('overflow', 'visible');
                  btn.css("display", "inline-block");
                  btn.addClass('btn-slide');
                }, 770));
	}));
});
