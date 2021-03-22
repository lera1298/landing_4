function ibg(){
let ibg=document.querySelectorAll(".ibg"); 
for (var i = 0; i < ibg.length; i++) 
	{ if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } } 
}
ibg();
 function ibg(){
$.each($('.ibg'), function(index, val) { if($(this).find('img').length>0){ $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); } }); 
}
ibg();
// скролл страницы
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__body__menu__menu');

 
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);

	});
	function onMenuLinkClick(e){
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset ;
			
			if (iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
				
			}



			window.scrollTo({
				top: gotoBlockValue,
				behavior:"smooth"
			});
			e.preventDefault();
		}
	}

}
