function clearChoice(array, remove) {
	for (let i = 0; i < array.length; i++) {
		array[i].classList.remove(remove);
	}
};


// BURGER MENU
let body = document.querySelector('body');
let burgerButton = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let closeButton = document.querySelector('.close-menu');

burgerButton.addEventListener('click', () => {
	body.style.overflowY = "hidden";
	nav.classList.add('active');
});

closeButton.addEventListener('click', () => {
	nav.classList.remove('active');
	body.style = "";
});


// FEEDBACK TOGGLE
let tabsNav = document.querySelectorAll('.tabs--nav ul li');
let tabsContent = document.querySelectorAll('.tabs--content');

for (let i = 0; i < tabsNav.length; i++) {
	tabsNav[i].addEventListener('click', (event) => {
		clearChoice(tabsNav, 'is-active');
		event.currentTarget.classList.add('is-active');
		toggleTabsContent(tabsNav);
	})
}

function toggleTabsContent(array) {
	for (let i = 0; i < tabsContent.length; i++) {
		tabsContent[i].style.display = "none";
	};

	let index = 0;
	var condition = array[index].classList.contains('is-active');
	while (!condition) {
		index++;
		condition = array[index].classList.contains('is-active');
	};

	tabsContent[index].style.display = "";
}


// OPEN/CLOSE AGREEMENT
let agreementButton = document.querySelectorAll('.booking__agreement .booking__agreement_agreement span');
let agreementCloseButton = document.querySelectorAll('.agreement .close');
let agreement = document.querySelector('.agreement');


for (let i = 0; i < agreementButton.length; i++) {
	agreementButton[i].addEventListener('click', () => {
		agreement.classList.add('active');
	});
};
for (let i = 0; i < agreementCloseButton.length; i++) {
	agreementCloseButton[i].addEventListener('click', () => {
		agreement.classList.remove('active');
	});
}


// NEWS TOGGLER
let newsButtons = document.querySelectorAll('.news .news-list .news-item .news-item__short-title');
let news = document.querySelectorAll('.news .news-list .news-item');

for (let i = 0; i < newsButtons.length; i++) {
	newsButtons[i].addEventListener('click', (event) => {
		let clickedNews = event.currentTarget.closest('.news-item');
		if (clickedNews.classList.contains('show')) {
			clickedNews.classList.remove('show');
		} else {
			clearChoice(news, 'show');
			clickedNews.classList.add('show');
		}
	});
}


// PUBLICATIONS TOGGLER
let publicButtons = document.querySelectorAll('.public .public-list .public-item .public-item__short-title');
let public = document.querySelectorAll('.public .public-list .public-item');

for (let i = 0; i < publicButtons.length; i++) {
	publicButtons[i].addEventListener('click', (event) => {
		let clickedPublic = event.currentTarget.closest('.public-item');
		if (clickedPublic.classList.contains('show')) {
			clickedPublic.classList.remove('show');
		} else {
			clearChoice(public, 'show');
			clickedPublic.classList.add('show');
		}
	});
}


//SWIPER-PAGINATION TOGGLER
let swiperWrapper = document.querySelector('.services--slider .swiper-wrapper');
let swipers = document.querySelectorAll('.services--slider .swiper-slide');
let swiperButtons = document.querySelectorAll('.services--slider .swiper-pagination-bullets .swiper-pagination-bullet');

for (let i = 0; i < swiperButtons.length; i++) {
	swiperButtons[i].addEventListener('click', (event) => {
		let clickedSwiperButton = event.currentTarget;
		if (!clickedSwiperButton.classList.contains('swiper-pagination-bullet-active')) {
			clearChoice(swiperButtons, 'swiper-pagination-bullet-active');
			clearChoice(swipers, 'swiper-slide-active');
			clickedSwiperButton.classList.add('swiper-pagination-bullet-active');
			swipers[i].classList.add('swiper-slide-active');
			swiperWrapper.style = 'transform: translate3d(calc(' + (-100) * i + '%), 0px, 0px); transition-duration: 300ms'
		};
	});
}


//SELECTED OPTION COLOR
let selects = document.querySelectorAll('select');

if (selects) {
	for (let i = 0; i < selects.length; i++) {
		let options = selects[i].querySelectorAll('option');
		if (options) {
			selects[i].addEventListener('click', () => {
				let selectedOption = selects[i].querySelector('[selected]');
				if (selects[i].selectedOptions[0].label !== selectedOption.label) {
					selectedOption.removeAttribute('selected');
					console.log(selects[i]);
					options[selects[i].selectedIndex].setAttribute('selected', '');
				}
			})
		}
	}
}