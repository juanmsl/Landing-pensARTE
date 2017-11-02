$.scrollify({
	section : ".scroll_section",
	interstitialSection : ".footer",
	easing: "easeOutExpo",
	scrollSpeed: 600,
	scrollbars: true,
	standardScrollElements: "",
	setHeights: false
});

$("body").prognroll({
	height: 5,
	color: "#0F6C7D",
	custom: false
});

$('.owl-carousel').owlCarousel({
	autoplay:true,
	loop:true,
	margin:30,
	items:3,
	center:true,
	dots:true,
	stagePadding:100
})
