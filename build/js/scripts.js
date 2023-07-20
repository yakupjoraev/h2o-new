// Custom Scripts
// Custom scripts



// селект для сводной таблицы

// $(function () {
//   $("#table-form-select").selectmenu();
// });

// подключение и настройка jq ui календаря

$(function () {

  $("#datepicker-10").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
    dateFormat: 'dd.mm.yy',
  });


  $("#datepicker-11").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
    dateFormat: 'dd.mm.yy',
  });


  $("#datepicker-12").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });


  $("#datepicker-13").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });


  $("#datepicker-14").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });


  $("#datepicker-15").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });



  $("#datepicker-16").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });



  $("#datepicker-17").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });



  $("#datepicker-18").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });



  $("#datepicker-19").datepicker({
    changeMonth: false,
    changeYear: true,
    showOn: "button",
    buttonImage: "./img/icons/datepicker.svg",
    // buttonImageOnly: true,
    buttonText: "Выбрать дату",
  });



  $("#datepicker-20").datepicker({
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
    dateFormat: 'yy-mm-dd',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
});



// // вызов модалки

// const modal = new GraphModal();

const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});


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

const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? 'placeholder не указан';

  const items = data.map(item => {
    let cls = '';
    if (item.id === selectedId) {
      text = item.value;
      cls = 'selected';
    }
    return `
          <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
      `;
  });

  return `
      <input type="hidden" class="hidden__input">
      <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input">
      <span class="cards__item-header-circkle"></span>
          <div data-type="value" class="select__input-value">
         
            ${text}
          </div>
          <img src="./img/select-arrow.svg" alt="arrow" data-type="arrow" class="select__arrow">
      </div>
      <div class="select__dropdown">
          <ul class="select__list">
              ${items.join('')}
          </ul>
      </div>
  `;
};

class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;

    this.render();
    this.setup();
    this.updateCircleColor(this.current.value); // Вызов метода для установки начального цвета круга
  }

  render() {
    const { placeholder, data } = this.options;
    this.$el.classList.add('select');
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$value = this.$el.querySelector('[data-type="value"]');

    this.updateCircleColor(this.$value.textContent); // Вызов метода для установки начального цвета круга
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === 'input') {
      this.toggle();
    } else if (type === 'item') {
      const id = event.target.dataset.id;
      this.select(id);
    } else if (type === 'backdrop') {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open');
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId);
  }

  select(id) {
    this.selectedId = id;
    this.$value.textContent = this.current.value;
    this.updateCircleColor(this.current.value); // Добавляем обновление цвета при выборе нового значения

    this.$el
      .querySelectorAll(`[data-type="item"]`)
      .forEach(el => el.classList.remove('selected'));
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');

    this.options.onSelect ? this.options.onSelect(this.current) : null;
    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add('open');
    this.$arrow.classList.add('open');
  }

  close() {
    this.$el.classList.remove('open');
    this.$arrow.classList.remove('open');
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler);
    this.$el.innerHTML = '';
  }

  updateCircleColor(value) {
    const circle = this.$el.querySelector('.cards__item-header-circkle');
    if (value === 'Ожидание') {
      circle.style.backgroundColor = '#ff6f6f';
    } else if (value === 'Ожидание оплаты') {
      circle.style.backgroundColor = '#58c0d7';
    } else if (value === 'Оплачено') {
      circle.style.backgroundColor = '#79D758';
    } else if (value === 'В работе') {
      circle.style.backgroundColor = '#f90';
    } else if (value === 'Выполнено') {
      circle.style.backgroundColor = '#bf56ff';
    } else {
      // Здесь можно установить цвет круга по умолчанию (если нужно)
      circle.style.backgroundColor = '';
    }
  }
}

// Инициализация плагина
const select = new Select('#select', {
  placeholder: 'Выберите элемент',
  selectedId: '1',
  data: [
    { id: '1', value: 'Ожидание' },
    { id: '2', value: 'Ожидание оплаты' },
    { id: '3', value: 'Оплачено' },
    { id: '4', value: 'В работе' },
    { id: '5', value: 'Выполнено' },
  ],
  onSelect(item) {
    const input = document.querySelector('.hidden__input');
    input.value = item.value;
  },
});

// Инициализация плагина
const select2 = new Select('#select2', {
  placeholder: 'Выберите элемент',
  selectedId: '6',
  data: [
    { id: '6', value: 'Ожидание' },
    { id: '7', value: 'Ожидание оплаты' },
    { id: '8', value: 'Оплачено' },
    { id: '9', value: 'В работе' },
    { id: '10', value: 'Выполнено' },
  ],
  onSelect(item) {
    const input = document.querySelector('#select2 .hidden__input');
    input.value = item.value;
  },
});

// Инициализация плагина
const select3 = new Select('#select3', {
  placeholder: 'Выберите элемент',
  selectedId: '15',
  data: [
    { id: '11', value: 'Ожидание' },
    { id: '12', value: 'Ожидание оплаты' },
    { id: '13', value: 'Оплачено' },
    { id: '14', value: 'В работе' },
    { id: '15', value: 'Выполнено' },
  ],
  onSelect(item) {
    const input = document.querySelector('#select3 .hidden__input');
    input.value = item.value;
  },
});
// Вызываем метод updateCircleColor для установки цвета круга по умолчанию
select.updateCircleColor(select.current.value);



