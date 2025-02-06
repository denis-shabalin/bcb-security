const menuToggle = document.getElementById('menu-toggle')
const menuToggleClose = document.getElementById('menu-toggle-close')
const sideMenu = document.getElementById('side-menu')

// Добавляем обработчик для открытия меню
menuToggle.addEventListener('click', () => {
	sideMenu.classList.toggle('active') // Добавление или удаление класса 'active' для открытия/закрытия
	/* document.body.classList.toggle('no-scroll') */
	setTimeout(() => {
		document.body.classList.toggle('no-scroll');
	}, 1000);
})

// Добавляем обработчик для закрытия меню при клике на иконку
menuToggleClose.addEventListener('click', () => {
	sideMenu.classList.remove('active') 
	document.body.classList.remove('no-scroll')
})

