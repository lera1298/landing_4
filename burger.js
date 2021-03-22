$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger,.header__body__menu__menu').toggleClass('active_1');
		$('body').toggleClass('lock');
	});
});