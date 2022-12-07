/* Выпадающее меню каталога */
if ( document.querySelector('.new-list-catalog__content') ) {
	const catalogContents = document.querySelectorAll('.new-list-catalog__content'),
		search = document.querySelector('.new-header__search'),
		catalogList = document.querySelector('.new-list-catalog');

	catalogContents.forEach(function(item) {
		item.style.width = search.clientWidth + 68 + 'px';
		item.style.height = catalogList.clientHeight + 'px';
	});
}

/* Слайдер */
if ( document.querySelector('.new-slider__init') ) {
	tns({
		container: '.new-slider__init',
		items: 1,
		loop: true,
		rewind: false,
		gutter: 0,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: true,
		navContainer: '.new-slider__dots',
		controls: false
	});
}

/* Карусели в табах на главной странице */
if ( document.querySelector('.new-home-tabs__carousel') ) {
	const homeTabsCarousels = document.querySelectorAll('.new-home-tabs__carousel');

	homeTabsCarousels.forEach(function(item) {
		tns({
			container: item,
			items: 4,
			loop: true,
			gutter: 28,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: true,
			controlsContainer: item.closest('.new-home-tabs__content').querySelector('.carousel-arrows'),
			responsive: {
				767: {
					items: 3,
					gutter: 20
				},
				1199: {
					items: 3,
					gutter: 28
				},
				1609: {
					items: 4,
					gutter: 28
				}
			}
		});
	});
}

/* Табы на главной странице */
if ( document.querySelector('.new-home-tabs__button') ) {
	const homeTabsButtons = document.querySelectorAll('.new-home-tabs__button'),
		homeTabsContents = document.querySelectorAll('.new-home-tabs__content');

	homeTabsButtons.forEach(function(item) {
		item.onclick = function() {
			let itemActive = this.getAttribute('data-item');

			homeTabsButtons.forEach(function(elem) {
				elem.classList.remove('_active');
			});

			homeTabsContents.forEach(function(elem) {
				elem.classList.remove('_active');
			});

			this.classList.add('_active');

			this.closest('.new-home-tabs').querySelector('.new-home-tabs__content[data-item="'+itemActive+'"]').classList.add('_active');
		}
	});
}

/* Мобильное меню */
if ( document.querySelector('.new-header__catalog._mobile') && document.querySelector('.new-mobile-nav') ) {
	const mobileBtn = document.querySelector('.new-header__catalog._mobile'),
		mobileNav = document.querySelector('.new-mobile-nav');

	mobileBtn.onclick = function() {
		this.classList.toggle('_active');
		mobileNav.classList.toggle('_active');
	}
}

/* Карусель "Товары месяца" */
if ( document.querySelector('.new-month__carousel') ) {
	tns({
		container: '.new-month__carousel',
		items: 5,
		loop: true,
		gutter: 28,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-month .carousel-arrows',
		responsive: {
			0: {
				disable: true
			},
			767: {
				items: 3,
				gutter: 20,
				disable: false
			},
			1199: {
				items: 4,
				gutter: 28
			},
			1609: {
				items: 5
			}
		}
	});
}

/* Карусель "Акционные товары" */
if ( document.querySelector('.new-discount__carousel') ) {
	tns({
		container: '.new-discount__carousel',
		items: 5,
		loop: true,
		gutter: 28,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-discount .carousel-arrows',
		responsive: {
			0: {
				disable: true
			},
			767: {
				items: 3,
				gutter: 20,
				disable: false
			},
			1199: {
				items: 4,
				gutter: 28
			},
			1609: {
				items: 5
			}
		}
	});
}

/* Карусель "Рекомендуем" */
if ( document.querySelector('.new-recomended__carousel') ) {
	tns({
		container: '.new-recomended__carousel',
		items: 2,
		loop: true,
		gutter: 16,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-recomended .carousel-arrows',
	});
}

/* Карусель "Новинки" */
if ( document.querySelector('.new-novelty__carousel') ) {
	tns({
		container: '.new-novelty__carousel',
		items: 5,
		loop: true,
		gutter: 28,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-novelty .carousel-arrows',
		responsive: {
			0: {
				disable: true
			},
			767: {
				items: 3,
				gutter: 20,
				disable: false
			},
			1199: {
				items: 4,
				gutter: 28
			},
			1609: {
				items: 5
			}
		}
	});
}

/* Карусель "Наши сервисы" */
if ( document.querySelector('.new-services__carousel') ) {
	tns({
		container: '.new-services__carousel',
		items: 3,
		loop: true,
		gutter: 20,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-services .carousel-arrows',
	});
}

/* Карусель "Работает для вас" */
if ( document.querySelector('.new-our-work__carousel') ) {
	tns({
		container: '.new-our-work__carousel',
		items: 3,
		loop: true,
		gutter: 20,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-our-work .carousel-arrows',
	});
}

/* Карусель "Популярные категории" */
if ( document.querySelector('.new-popular__carousel') ) {
	tns({
		container: '.new-popular__carousel',
		items: 5,
		loop: true,
		gutter: 28,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-popular .carousel-arrows',
		responsive: {
			0: {
				disable: true
			},
			767: {
				items: 4,
				gutter: 20,
				disable: false
			},
			1199: {
				items: 4,
				gutter: 28
			},
			1609: {
				items: 5
			}
		}
	});
}

/* Карусель "Производители" */
if ( document.querySelector('.new-manufacturers__carousel') ) {
	tns({
		container: '.new-manufacturers__carousel',
		items: 6,
		loop: true,
		gutter: 28,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		nav: false,
		controls: true,
		controlsContainer: '.new-manufacturers .carousel-arrows',
		responsive: {
			767: {
				items: 4,
				gutter: 20
			},
			1199: {
				items: 5,
				gutter: 28
			},
			1609: {
				items: 6
			}
		}
	});
}

/* Ползунок в фильтре */
if ( document.querySelector('.new-filter__slider') && document.querySelector('.new-filter__prices .new-filter__input') ) {
	var sliderPrice = document.querySelector('.new-filter__slider'),
		sliderValues = [
			document.querySelector('.new-filter__prices .new-filter__input:first-child'),
			document.querySelector('.new-filter__prices .new-filter__input:last-child')
		];

	noUiSlider.create(sliderPrice, {
		start: [2000, 10000],
		connect: true,
		step: 10,
		range: {
			'min': 120,
			'max': 39000
		}
	});

	sliderPrice.noUiSlider.on('update', function (values, handle) {
		sliderValues[handle].value = Math.round(values[handle]).toLocaleString() + ' ₽';
	});
}

/* Показ всех фильтров */
if ( document.querySelector('.new-filter__all') ) {
	let allFilters = document.querySelectorAll('.new-filter__all');

	allFilters.forEach(function(item) {
		item.onclick = function() {
			item.closest('.new-filter__block-content').querySelectorAll('.new-filter__block-col').forEach(function(col) {
				col.classList.remove('_hidden');
			});

			item.classList.add('_hidden');
		}
	});
}

/* Очистка формы */
if ( document.querySelector('.new-filter__button._reset') ) {
	const resetButton = document.querySelector('.new-filter__button._reset');

	resetButton.onclick = function() {
		sliderPrice.noUiSlider.reset();
	}
}

/* Toggle блоков фильтра */
if ( document.querySelector('.new-filter__title') ) {
	const filterTitles = document.querySelectorAll('.new-filter__title');

	filterTitles.forEach(function(item) {
		item.onclick = function() {
			this.classList.toggle('_active');
			this.closest('.new-filter__block').querySelector('.new-filter__block-content').classList.toggle('_active');
		}
	});
}

/* Фильтр на мобиле */
if ( document.querySelector('.new-filter__head') && document.querySelector('.new-filter__content') ) {
	const filterHead = document.querySelector('.new-filter__head'),
		filterContent = document.querySelector('.new-filter__content');

	toggleFilterMobile(filterHead, filterContent);

	window.addEventListener('resize', function(event) {
		toggleFilterMobile(filterHead, filterContent);
	});

	function toggleFilterMobile(head, content) {
		if ( window.innerWidth < 1200 ) {
			head.onclick = function() {
				this.classList.toggle('_active');
				content.classList.toggle('_active');
			}
		}
	}
}

/* Маска на числа */
function maskedNumber(object) {
	object.value = object.value.replace(/([^0-9])/g,'');
}

if ( document.querySelector('.new-product__count') ) {
	const inputsProductCount = document.querySelectorAll('.new-product__count');

	inputsProductCount.forEach(function(item) {
		item.onchange = function() {
			maskedNumber(this);
		}
		item.onkeyup = function() {
			maskedNumber(this);
		}
		item.onmousedown = function() {
			maskedNumber(this);
		}
	});
}

/* Выравнивание высоты */
function equalHeight(object) {
	let height = 0;

	for( let i = 0; i < object.length; i++ ){
		let current_height = object[i].offsetHeight;
		if(current_height > height) {
			height = current_height;
		}
	}

	for( let i = 0; i < object.length; i++ ){
		object[i].style.height = height + 'px';
	}
}

setTimeout(function(){
	equalHeight( document.querySelectorAll('.new-month .new-product__title') );
}, 200);

window.addEventListener('resize', function(event) {
	if ( document.querySelector('.new-month .new-product__title') ) {
		let newMonthTitle = document.querySelectorAll('.new-month .new-product__title');

		newMonthTitle.forEach(function(item) {
			item.style.height = 'auto';
		});

		equalHeight( newMonthTitle );
	}
}, true);