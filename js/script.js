document.addEventListener('DOMContentLoaded', function(event) {
	function handleScroll() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('.header');
    if (scroll > 1) {
      header.classList.add('show');
    } else {
      header.classList.remove('show');
    }    
	}
	handleScroll();
	window.addEventListener('scroll', handleScroll);
  var headerBurger = document.querySelector('.header__burger');
  var menu = document.querySelector('.menu');
  var body = document.querySelector('body');
	document.querySelector('.header__burger').addEventListener('click', function(event) {
	    headerBurger.classList.toggle('active');
	    menu.classList.toggle('active');
	    body.classList.toggle('lock');
	});
	var menuLinks = document.querySelectorAll('.menu__link');
	menuLinks.forEach(function(link) {
	    link.addEventListener('click', function(event) {
	        headerBurger.classList.remove('active');
	        menu.classList.remove('active');
	        body.classList.remove('lock');
	    });
	});
  const popupButton = document.querySelectorAll("[data-topopup]");
  if(popupButton){
	  popupButton.forEach(function (popupButton) {
	    popupButton.addEventListener("click", function (event) {
	    	event.preventDefault();
		    	if(document.querySelector('.popup.open') && this.getAttribute("data-topopup") != '#popup-politics'){
		    		document.querySelector('.popup.open').classList.remove('open');
		    	}

		    	if(this.getAttribute("data-topopup") == '#popup-reg'){
		      
			      const mainBlock = document.querySelector(".main");
			      const mainRect = mainBlock.getBoundingClientRect();
			      const isMainVisible = -1 * mainRect.top + 100 <= mainRect.height;
			    	if (isMainVisible) {
			       	body.classList.remove('popuplock');	
			        window.scrollTo({
			          top: 0,
			          behavior: "smooth"
			        });
			        return; 
			      }
		    	}
		      const dataPopup = this.getAttribute("data-topopup");
		      const dataClassPopup = document.querySelector(`${dataPopup}`);
		      if (dataClassPopup !== null) {
		        dataClassPopup.classList.add("open");
		        body.classList.add('popuplock');	
		      }			  	
	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		var body = document.querySelector('body');
		    		if(document.querySelectorAll('.popup.open').length == 1){
		    			body.classList.remove('popuplock');	
		    		}
		    		popupClose.closest('.popup').classList.remove('open');
		    });
		});		
	}

  var passwordFields = [
    { field: document.getElementById("password1"), confirmField: document.getElementById("password2") },
    { field: document.getElementById("password3"), confirmField: document.getElementById("password4") }
  ];

  function validatePasswords() {
    for (var i = 0; i < passwordFields.length; i++) {
      var field = passwordFields[i].field;
      var confirmField = passwordFields[i].confirmField;

      if (field.value !== confirmField.value) {
        confirmField.setCustomValidity("Пароли должны совпадать");
      } else {
        confirmField.setCustomValidity("");
      }
    }
  }
  for (var i = 0; i < passwordFields.length; i++) {
    var field = passwordFields[i].field;
    var confirmField = passwordFields[i].confirmField;

    field.addEventListener("change", validatePasswords);
    confirmField.addEventListener("keyup", validatePasswords);
  }

});

