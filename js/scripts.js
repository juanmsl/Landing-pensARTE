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
	center:true,
	dots:true,
	stagePadding: 100,
	responsive:{
		0:{
			items:1
		},
		640:{
			items:1
		},
		768:{
			items:2
		},
		1024:{
			items:3
		}
	}
})
