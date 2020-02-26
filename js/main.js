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

const login = () => {
	const loginButton = document.getElementById("logins");
	loginButton.innerHTML = "Signing In...";
	let emails = document.getElementById("logemail").value;
	let passwords = document.getElementById("logpassword").value;
	let url = `https://sprout-backends.herokuapp.com/api/v1/login`;
	fetch(url, { 
		method: 'POST', 
		headers : new Headers({"Content-Type": "application/json; charset=UTF-8"}),
		 body:JSON.stringify({
		  "email": emails ,
		  "password": passwords
		}) })
		.then((res) => res.json())
		.then((datas) => {
			if (datas.status === "success") {
				const { data, message} = datas;
				const {  token, name, id, gender ,country, address, occupation,email,balance,idcard,phone,acctnumber} = data;
				sessionStorage.setItem('sproutname',name);
				sessionStorage.setItem('sproutid',id);
				sessionStorage.setItem('sproutgender', gender);
				sessionStorage.setItem('sproutcountry', country);
				sessionStorage.setItem('sproutaddress', address);
				sessionStorage.setItem('sproutoccupation', occupation);
				sessionStorage.setItem('sproutemail', email);
				sessionStorage.setItem('sproutbalance', balance);
				sessionStorage.setItem('sproutidcard', idcard);
				sessionStorage.setItem('sproutphone', phone);
				sessionStorage.setItem('sproutacctnumber', acctnumber);
				window.localStorage.setItem('accessToken', token);
				document.getElementById("success-message").innerHTML = message;
				document.getElementById("success-message").classList.replace("myhide", "myshow");
				setTimeout("succesRegistered()", 2000);

			} else {
				const { message } = datas;
				loginButton.innerHTML = "login";
				document.getElementById("error-message").innerHTML = message;
				document.getElementById("error-message").classList.replace("myhide", "myshow");
				setTimeout("errorRegistered()", 2000);
			}

		})
		.catch((err)=>console.log(err));
		return false;
}

const signup = () => {
	const signupButton = document.getElementById("register");
	signupButton.innerHTML = "Creating Account..."
	let firstname = document.getElementById("firstname").value;
	let lastname = document.getElementById("lastname").value;
	let gender = document.getElementById("gender").value;
	let status = document.getElementById("status").value;
	let country = document.getElementById("country").value;
	let phone = document.getElementById("phone").value;
	let address = document.getElementById("address").value;
	let idcard = document.getElementById("pcpics").value;
	let occupation = document.getElementById("occupation").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let username = document.getElementById("username").value;
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
		  "username": username,
		  "password": password,
		  "idcard": idcard
		}) })
		.then((res) => res.json())
		.then((datas) => {
			if (datas.status === "success") {
				const { data, message} = datas;
				const {  token, name, id, gender ,country, address, occupation,email,balance,idcard,phone,acctnumber} = data;
				sessionStorage.setItem('sproutname',name);
				sessionStorage.setItem('sproutid',id);
				sessionStorage.setItem('sproutgender', gender);
				sessionStorage.setItem('sproutcountry', country);
				sessionStorage.setItem('sproutaddress', address);
				sessionStorage.setItem('sproutoccupation', occupation);
				sessionStorage.setItem('sproutemail', email);
				sessionStorage.setItem('sproutbalance', balance);
				sessionStorage.setItem('sproutidcard', idcard);
				sessionStorage.setItem('sproutphone', phone);
				sessionStorage.setItem('sproutacctnumber', acctnumber);
				window.localStorage.setItem('accessToken', token);
				document.getElementById("success-message").innerHTML = message;
				document.getElementById("success-message").classList.replace("myhide", "myshow");
				setTimeout("succesRegistered()", 2000);

			} else {
				const { message } = datas;
				signupButton.innerHTML = "Open an account now!";
				document.getElementById("error-message").innerHTML = message;
				document.getElementById("error-message").classList.replace("myhide", "myshow");
				setTimeout("errorRegistered()", 2000);
			}

		})
		.catch((err)=>console.log(err));

	return false;
}
const succesRegistered = () => {
	document.getElementById("success-message").classList.replace("myshow","myhide");
	document.getElementById("success-message").innerHTML = ""; 	
	window.location ="dashboard.html";
}
const errorRegistered = () => {
	document.getElementById("error-message").classList.replace("myshow","myhide");
	document.getElementById("error-message").innerHTML = ""; 
}


/*--------------------------
		Loans slide calculator
	------------------------------*/
	var der= parseInt(document.getElementById("amountTos").innerHTML);
	$("#slider-range-max").slider({
	  range: "max",
	  min: 0,
	  max: der,
	  step: 10,
	  change: function (event, ui) {
		$("#loan-value").text('R' + formatter.format(ui.value).replace("$", ""));
		$("#lone-emi").text('R' + formatter.format(emi(ui.value)).replace("$", ""));
		console.log(ui);
		
	  },
	  slide: function (event, ui) {
		$("#loan-value").text('R' + formatter.format(ui.value).replace("$", ""));
		$("#lone-emi").text('R' + formatter.format(emi(ui.value)).replace("$", ""));
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
			emi = 1;
		result = Math.round(amount/emi);
		return result;
	}
