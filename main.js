function slider() {
	if (document.getElementById('slider')){
		let slider = document.getElementById('slider');
		let sliderWidth = slider.offsetWidth;
		let sliderList = document.getElementById('sliderWrap');
		let count = 1;
		let items = sliderList.querySelectorAll('li').length;
		let itemWidth = sliderList.querySelector('li').offsetWidth;
		let containerWidth = document.querySelector('.container').offsetWidth;
		let prev = document.getElementById('prev');
		let next = document.getElementById('next');


		
		window.addEventListener('resize', ()=>{
			sliderWidth = slider.offsetWidth;
		});
		
		prev.addEventListener('click', ()=>{
			prevSlide();
		});
		next.addEventListener('click', ()=>{
			nextSlide();
		})

		function prevSlide(){
			if(count > 1) {
				console.log("1");
				count = count - 2;
				sliderList.style.left = "-" + count * sliderWidth + "px"
				count++
			} else if(count == 1) {

				count = items - 1;
				console.log(sliderList);
				sliderList.style.left = "-" + count * sliderWidth + "px"
				count++;
			}
		}

		function nextSlide(){
			if(count < items) {
				sliderList.style.left = "-" + count * sliderWidth + "px";
				count++;
			}
			else if(count == items){
				sliderList.style.left = "0px";
				count = 1;
			}
		}
}
		
}


function mobMenu(){
	let btnStart = document.getElementById('bar');
	let btnEnd = document.getElementById('mob-bar');
	let bg = document.querySelector('.mob-bg');
	let menu = document.querySelector('.mob-nav');

	btnStart.addEventListener('click', ()=> {
		menu.style.right = "0%";
		bg.classList.add('active');
		document.body.style.overflow = 'hidden';

	});

	btnEnd.addEventListener('click', ()=> {
		menu.style.right = "-50%";
		bg.classList.remove('active');
		 document.body.style.overflow = 'visible';

	});

	bg.addEventListener('click', ()=>{
		menu.style.right = "-50%";
		bg.classList.remove('active');
		document.body.style.overflow = 'visible';
	})

}

function callMeBack(){
	let btn = document.getElementById('callMeBack');
	let hid = document.getElementById("hiddenDiv");
	let close = document.getElementById("closePopUp");
	btn.onclick = function(){
		hid.style.display = "block";
	}
	close.onclick = function(){
		hid.style.display = "none";
	}
}

function masking(){
	document.getElementById('phone').addEventListener('input', function (e) {
  	var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
 	 e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
	if (document.getElementById('phone1')){
		document.getElementById('phone1').addEventListener('input', function (e) {
  		var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
 	 	e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		});
	}
}

function fixNav(){
	let nav = document.getElementById('navigation');
	let slider = document.querySelector('.slide');

	window.onscroll = ()=> {
		if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
			nav.classList.add('fixed-nav');
			document.getElementById('closed_dropdown').style.background = "rgba(32,58,73, .9)";
			let topSpace = 0;
			if ( document.documentElement.scrollTop > 200 ) {
				topSpace = 0;	
			} else {
				topSpace = Math.round(document.documentElement.scrollTop - 200);
				slider.classList.add('slide-top');

			}	
			
			nav.style.top = topSpace + "px";	
		} else {
			nav.style.top = 0;
			slider.classList.remove('slide-top');
			nav.classList.remove('fixed-nav');
			document.getElementById('closed_dropdown').style.background = "rgba(0,0,0, .9)";
		}
	
	}

}

function dropDown(){
	let btn = document.getElementById('dropdown_btn');
	let drop = document.getElementById('closed_dropdown');
	btn.addEventListener('mouseover', ()=>{
		drop.style.display = "flex";
	});
	btn.addEventListener('mouseout', ()=>{
		drop.style.display = "none";
	});
	drop.addEventListener('mouseover', ()=>{
		drop.style.display = "flex";
	});
	drop.addEventListener('mouseout', ()=>{
		drop.style.display = "none";
	});


	let mob_btn = document.getElementById('mob_dropdown_btn');
	let mob_drop = document.getElementById('mob_closed_dropdown');
	mob_btn.addEventListener('mouseover', ()=>{
		console.log('oh my');
		mob_drop.style.display = "flex";
	});
	mob_btn.addEventListener('mouseout', ()=>{
		console.log('oh shit');
		mob_drop.style.display = "none";
	});
	mob_drop.addEventListener('mouseover', ()=>{
		console.log('oh my');
		mob_drop.style.display = "flex";
	});
	mob_drop.addEventListener('mouseout', ()=>{
		console.log('oh shit');
		mob_drop.style.display = "none";
	});
}

window.onload = () => {
	dropDown();
	mobMenu();
	slider();

	callMeBack();
	masking();
	fixNav();

	if(document.querySelector('.glider')) {
		new Glider(document.querySelector('.glider'), {
		  	slidesToShow: 1,
		  	dots: '#dots',
		  	draggable: true,
		  	resizeLock: true,
		  	arrows: {
		    	prev: '.glider-prev',
		    	next: '.glider-next'
		  	}
		});
	}

	if(document.querySelector('.glider-2')) {
		new Glider(document.querySelector('.glider-2'), {
		  	slidesToShow: 1,
		  	dots: '#dots',
		  	draggable: true,
		  	resizeLock: true,
		  	arrows: {
		    	prev: '.glider-2-prev',
		    	next: '.glider-2-next'
		  	}
		});
}
	 if (document.querySelector('.wow') && navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) == null ) {
	 	new WOW().init();
	 }
	 lightGallery(document.getElementById('gallery'), {
    thumbnail:true
}); 

}