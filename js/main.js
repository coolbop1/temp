/* ===================================
--------------------------------------
  LOANS2GO | Loans HTML Template
  Version: 1.0
--------------------------------------
======================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$(".main-menu").slicknav({
        appendTo: '.header-section',
		allowParentLinks: true,
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>'
	});

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});

	/*--------------------------
		Loans slide calculator
	------------------------------*/
	$("#slider-range-max").slider({
	  range: "max",
	  min: 1000,
	  max: 15000,
	  step: 10,
	  change: function (event, ui) {
		$("#loan-value").text('$' + ui.value);
		$("#lone-emi").text('$' + emi(ui.value));
		console.log(ui);
		
	  },
	  slide: function (event, ui) {
		$("#loan-value").text('$' + ui.value);
		$("#lone-emi").text('$' + emi(ui.value));
	  }
	});
  
	$("#lc-inc").click(function () {
	  var value = $("#slider-range-max").slider("value");
	  var step = $("#slider-range-max").slider("option", "step");
	  $("#slider-range-max").slider("value", value + step);
	  
	});

	$("#lc-dec").click(function () {
	  var value = $("#slider-range-max").slider("value")
	  var step = $("#slider-range-max").slider("option", "step");
	  $("#slider-range-max").slider("value", value - step);
	});

	function emi (amount) {
		var result,
			emi = 52;
		result = Math.round(amount/emi);
		return result;
	}

	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});

	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 163,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 163,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);


const signup = () => {
	const firstname = document.getElementById("firstname").value;
	const lastname = document.getElementById("lastname").value;
	const gender = document.getElementById("gender").value;
	const status = document.getElementById("status").value;
	const country = document.getElementById("country").value;
	const phone = document.getElementById("phone").value;
	const address = document.getElementById("address").value;
	const occupation = document.getElementById("occupation").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	let url = `https://sprout-backends.herokuapp.com/api/v1/signup`;
	fetch(url, { 
		method: 'POST', 
		headers : new Headers({"Content-Type": "application/json; charset=UTF-8"}),
		 body:JSON.stringify({
			 "firstname": firstname,
		  "lastname":lastname, 
		  "gender": gender, 
		  "status": status, 
		  "country": country,
		  "phone": phone, 
		  "address": address,
		  "occupation": occupation,
		  "email": email ,
		  "password": password
		}) })
		.then((res) => res.json())
		.then((datas) => {
			if (datas.status === 201) {
				const { data: { data }} = datas;
				console.log(data);

			} else {

			}

		})
		.catch((err)=>console.log(err));

	return false;
}
