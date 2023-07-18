// Custom scripts

function filtersArchive() {
  const container = document.querySelector('.archive')

  if (!container) {
    return null
  }

  const filtersResult = document.querySelector('[data-filters-result]');
  const filtersBtn1 = document.querySelector('[data-filters-btn-1]');
  const filtersBtn2 = document.querySelector('[data-filters-btn-2]');

  filtersBtn1.addEventListener('click', () => {
    filtersResult.classList.remove('view-list');
    filtersResult.classList.add('view-cards');

    filtersBtn2.classList.remove('view-list');
    filtersBtn1.classList.add('view-cards');
  })

  filtersBtn2.addEventListener('click', () => {
    filtersResult.classList.remove('view-cards');
    filtersResult.classList.add('view-list');

    filtersBtn1.classList.remove('view-cards');
    filtersBtn2.classList.add('view-list');
  })
}

filtersArchive();

// селект для сводной таблицы

$(function () {
  $("#table-form-select").selectmenu();
});

// подключение и настройка jq ui календаря

$(function () {
  $("#datepicker-1").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });

  $("#datepicker-2").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });

  $("#datepicker-3").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });

  $("#datepicker-4").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });

  $("#datepicker-5").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });

  $("#datepicker-6").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });




  $("#datepicker-10").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });


  $("#datepicker-11").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });


  /* Локализация datepicker */
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
});



// вызов модалки

const modal = new GraphModal();