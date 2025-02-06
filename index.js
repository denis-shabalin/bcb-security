window.addEventListener('scroll', function() {
	const scrollUp = document.getElementById('scroll-up');
	if (window.scrollY > 200) { // Показывать стрелку при прокрутке более 200px
		scrollUp.style.display = 'block';
	} else {
		scrollUp.style.display = 'none';
	}
});

const scrollUp = document.getElementById('scroll-up');
scrollUp.addEventListener('click', function(event) {
	event.preventDefault(); // Отменить стандартное поведение ссылки
	window.scrollTo({
		top: 0, // К началу страницы
		behavior: 'smooth' // Плавная прокрутка
	});
});

let mySwiper = new Swiper('.swiper-container', {
	// Параметры конфигурации
	loop: true, // Бесконечный слайдер
	navigation: {
			nextEl: '.partners-button-next',
			prevEl: '.partners-button-prev',
	},
	slidesPerView: 3, // Количество видимых слайдов
	spaceBetween: 24, 
	breakpoints: {
		// Если ширина экрана меньше 1280px
		1280: {
		  slidesPerView: 6, // Количество видимых слайдов
		  spaceBetween: 64, // Расстояние между слайдами
		},
		// Если ширина экрана меньше 768px
		768: {
		  slidesPerView: 4, // Количество видимых слайдов
		  spaceBetween: 25, // Расстояние между слайдами
		},
	},
});


// слайдер новостей 

let swiperNews = new Swiper('.swiper-container__news', {
	loop: true, 
	navigation: {
	nextEl: '.news-button-next',
	prevEl: '.news-button-prev',
	},
	slidesPerView: 1, 
	spaceBetween: 12, 

	
	breakpoints: {
	
	1280: {
		slidesPerView: 3, 
		spaceBetween: 30,
		slidesOffsetBefore: 0, 
		slidesOffsetAfter: 0, 
	},

	768: {
		slidesPerView: 2,
		spaceBetween: 30, 
		slidesOffsetBefore: 0, 
		slidesOffsetAfter: 0, 
	},
	},
});





