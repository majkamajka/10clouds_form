$(() => {

// animations
  const form = $('.form2');
  const btn = $('button');
  const formText = $('.form2 h2');
  const leftBox = $('#left-box');
  const leftLines = $('#cover img');
  const tabs = $('.tab');
  const bgTop = $('#gradient-lines');
  const linesBottom = $('#lines-bottom');

// form
  const name = $('#name');
  const prefix = $('#prefix');
  const tel = $('#tel-number');
  const gender = $('[name="gender"]');
  const dobMonths = $('[name="month"]');
  const dobDay = $('#dobDay');
  const dobYear = $('#dobYear');
  let warning;

// ANIMATIONS
  $(window).on('load', (() => {
    const slideForm = new Promise((resolve, reject) => {
      resolve(leftBox.addClass('left-slide'));
    });

    slideForm.then(bgTop.addClass('grow-gradient'))
      .then(linesBottom.addClass('slide-bottom-lines'))
      .then(setTimeout(() => {
        form.addClass('slide-right');
        leftLines.addClass('img-resize');
      }, 500))
      .then(formText.css('white-space', 'normal'))
      .then(setTimeout(() => {
        form.css('overflow', 'visible');
        btn.css('display', 'inline-block');
        btn.addClass('btn-slide');
        tabs.addClass('slide-tabs');
      }, 900));
  }));

// FORM VALIDATION

  $(name).on('change', () => {
    $('span.warning.name-warn').remove();
    warning = $(`<span class='warning name-warn'></span>`);
    if (name.val().length > 50) {
      warning.text('Name cannot be longer than 50 characters');
      $(name).after(warning);
    }
    if (!(name.val().indexOf(' ') > 0 && name.val().indexOf(' ') < name.val().length - 1)) {
      warning.text('Enter both - first and second name');
      $(name).after(warning);
    }
    if (name.val().length === 0) {
      warning.text('Enter your name');
      $(name).after(warning);
    }
  });

  $(prefix).on('change', () => {
    $('span.warning.prefix-warn').remove();
    warning = $(`<span class='warning prefix-warn'></span>`);
    if (!(prefix.val())) {
      warning.text('Select prefix');
      $('#tel').append(warning);
    }
  });

  $(tel).on('change', () => {
    $('span.warning.tel-warn').remove();
    warning = $(`<span class='warning tel-warn'></span>`);
    let telNum = tel.val();
    telNum = telNum.split(' ').join('');
    telNum = telNum.split('-').join('');
    if (!(telNum.match(/^\d+$/) && telNum.length === 9)) {
      warning.text('Enter valid phone number (9 digits)');
      if ($(window).width() < 900) {
        warning.css('white-space', 'normal');
      }
      $('#tel').append(warning);
    }
  });

  $(gender).on('change', () => {
    $('span.warning.gender-warn').remove();
    warning = $(`<span class='warning gender-warn'></span>`);
    if (!($('#female').is(':checked') || $('#male').is(':checked'))) {
      warning.text('Select gender');
      $('#gender').append(warning);
    }
  });

  $(dobDay).on('change', () => {
    $('span.warning.dobDay-warn').remove();
    warning = $(`<span class='warning dobDay-warn'></span>`);
    if (dobDay.val() && (dobDay.val() < 1 || dobDay.val() >31)) {
      warning.text('range: 1-31');
      $('#dob').append(warning);
    } else if (dobDay.val() === '') {
      warning.text('Select day');
      $('#dob').append(warning);
    }
  });

  $(dobMonths).on('change', () => {
    $('span.warning.dobMonth-warn').remove();
    warning = $(`<span class='warning dobMonth-warn'></span>`);
    if ($(window).width() < 900) {
      if ($('#dobMonth-num').val() === '') {
        warning.text('Select month');
        $('#dob').append(warning);
      } else if ($('#dobMonth-num').val() && ($('#dobMonth-num').val() < 1 || $('#dobMonth-num').val() >12)) {
        warning.text('range: 1-12');
        $('#dob').append(warning);
      }
    } else {
      if ($('#dobMonth-name').val() === null) {
        warning.text('Select month');
        $('#dob').append(warning);
      }
    }
  });

  $(dobYear).on('change', () => {
    $('span.warning.dobYear-warn').empty();
    warning = $(`<span class='warning dobYear-warn'></span>`);
    if (dobYear.val() && (dobYear.val() < 1900 || dobYear.val() > 2017)) {
      warning.text('range: 1900-2017');
      if ($(window).width() >= 900) {
        warning.css('left', '238px');
      }
      $('#dob').append(warning);
    } else if (dobYear.val() === '') {
      warning.text('Enter year');
      if ($(window).width() >= 900) {
        warning.css('left', '238px')
      }
      $('#dob').append(warning);
    }
  })

  $(btn).on('click', (event) => {
    event.preventDefault();
    $('.warning').remove();
// name
    $('span.warning.name-warn').remove();
    let warning = $(`<span class='warning name-warn'></span>`);
    if (name.val().length > 50) {
      warning.text('Name cannot be longer than 50 characters');
      $(name).after(warning);
    }
    if (!(name.val().indexOf(' ') > 0 && name.val().indexOf(' ') < name.val().length - 1)) {
      warning.text('Enter both - first and second name');
      $(name).after(warning);
    }
    if (name.val().length === 0) {
      warning.text('Enter your name');
      $(name).after(warning);
    }

// prefix
    $('span.warning.prefix-warn').remove();
    warning = $(`<span class='warning prefix-warn'></span>`);
    if (!(prefix.val())) {
      warning.text('Select prefix');
      $('#tel').append(warning);
    }

// tel-number
    $('span.warning.tel-warn').remove();
    warning = $(`<span class='warning tel-warn'></span>`);
    let telNum = tel.val();
    telNum = telNum.split(' ').join('');
    telNum = telNum.split('-').join('');
    if (!(telNum.match(/^\d+$/) && telNum.length === 9)) {
      warning.text('Enter valid phone number (9 digits)');
      if ($(window).width() < 900) {
        warning.css('white-space', 'normal');
      }
      $('#tel').append(warning);
    }

// gender
    $('span.warning.gender-warn').remove();
    warning = $(`<span class='warning gender-warn'></span>`);
    if (!($('#female').is(':checked') || $('#male').is(':checked'))) {
      warning.text('Select gender');
      $('#gender').append(warning);
    }

// dob-day
    $('span.warning.dobDay-warn').remove();
    warning = $(`<span class='warning dobDay-warn'></span>`);
    if (dobDay.val() && (dobDay.val() < 1 || dobDay.val() >31)) {
      warning.text('range: 1-31');
      $('#dob').append(warning);
    } else if (dobDay.val() === '') {
      warning.text('Select day');
      $('#dob').append(warning);
    }

// dob-month
    $('span.warning.dobMonth-warn').remove();
    warning = $(`<span class='warning dobMonth-warn'></span>`);

    if ($(window).width() < 900) {
      if ($('#dobMonth-num').val() === '') {
        warning.text('Select month');
        $('#dob').append(warning);
      } else if ($('#dobMonth-num').val() && ($('#dobMonth-num').val() < 1 || $('#dobMonth-num').val() >12)) {
        warning.text('range: 1-12');
        $('#dob').append(warning);
      }
    } else {
      if ($('#dobMonth-name').val() === null) {
        warning.text('Select month');
        $('#dob').append(warning);
      }
    }

// dob-year
    $('span.warning.dobYear-warn').empty();
    warning = $(`<span class='warning dobYear-warn'></span>`);
    if (dobYear.val() && (dobYear.val() < 1900 || dobYear.val() > 2017)) {
      warning.text('range: 1900-2017');
      if ($(window).width() >= 900) {
        warning.css('left', '238px');
      }
      $('#dob').append(warning);
    } else if (dobYear.val() === '') {
      warning.text('Enter year');
      if ($(window).width() >= 900) {
        warning.css('left', '238px')
      }
      $('#dob').append(warning);
    }

    if ($('.warning').length === 0) {
      console.log('form ok');
    }
  });
});
