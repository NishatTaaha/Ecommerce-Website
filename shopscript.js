var swiper = new Swiper(".mySwiper", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: 
		{
			delay: 2500,
		},
		loop: true,
	});


	$(document).ready(function(){
		$("#search, .fa-search").mouseenter(function(){
			$(".logo").hide();
		});

		$("#search, .fa-search").mouseleave(function(){
			$(".logo").show();
		})

		$('.fa-bars').click(function(){
			$('.navbar').toggle();
			$(this).toggleClass('fa-times');
		});

		$(".navbar, .navbar a").click(function(){
			$(".navbar").hide();
			$(".fa-bars").removeClass("fa-times");
		});

		var swiper = new Swiper(".sponsore-Swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: 
		{
			delay: 1500,
		},
		loop: true,
      });
	});