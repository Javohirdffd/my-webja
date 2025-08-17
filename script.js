var elLightThemeButton=document.querySlector(".js-light-theme-button");
var elDarkThemeButton=document.querySlector(".js-dark-theme-button");
elLightThemeButton.addEventListener('click',function () {
	alert("Kunduzgi rejim tanlandi")
		document.body.classList.remove("idish")
		document.body.classList.add("joy")
});
elDarkThemeButton.addEventListener('click',function () {
	document.body.classList.remove("joy")
	document.body.classList.add("idish")
});