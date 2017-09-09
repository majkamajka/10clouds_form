$(function () {

  // const x = new Promise((resolve, reject) => {
  //
  //     resolve($('.form2').addClass('slide-right'););
  //
  //
  // });



  $(window).on("load", (() => {
    const slideForm = new Promise((resolve, reject) => {
        resolve($('.form2').addClass('slide-right'));
    });


    slideForm.then(
      setTimeout(function () {
        
      $("button").css("display", "inline-block")
    }, 1000));


	}));

});
