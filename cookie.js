const cookieEl = document.querySelector('.cookie-block');
const okEl = document.querySelector('.cookie-block__btn');

// Проверяем, есть ли cookie перед показом блока
function checkCookie() {
	if (Cookies.get('hide-cookie')) {
		 cookieEl.style.display = 'none'; // Если cookie есть, скрываем блок
	} else {
		setTimeout(() => {
			  cookieEl.style.display = 'flex'; // Если нет - показываем
		}, 1000);
	}
}

// Обработчик клика по кнопке "Хорошо"
okEl.addEventListener('click', () => {
	Cookies.set('hide-cookie', 'true', { expires: 30 }); // Устанавливаем cookie на 30 дней
	cookieEl.style.display = 'none';
});

// Запуск проверки
checkCookie();


