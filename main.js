function slider() {
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

function fixNav(){
	let nav = document.getElementById('navigation');
	let slider = document.querySelector('.slide');
	console.log(document.documentElement.scrollTop);

	window.onscroll = ()=> {
		if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
			nav.classList.add('fixed-nav');
			let topSpace = 0;
			if ( document.documentElement.scrollTop > 200 ) {
				topSpace = 0;	
			} else {
				topSpace = Math.round(document.documentElement.scrollTop - 200);
				slider.style.marginTop = "235px";

			}	
			console.log(topSpace);
			nav.style.top = topSpace + "px";	
		} else {
			nav.style.top = 0;
			slider.style.marginTop = "100px";
			nav.classList.remove('fixed-nav');
		}
	
	}
}

window.onload = () => {
	mobMenu();
	slider();
	fixNav();

	new Glider(document.querySelector('.glider'), {
  	slidesToShow: 1,
  	dots: '#dots',
  	draggable: true,
  	arrows: {
    	prev: '.glider-prev',
    	next: '.glider-next'
  	}
});
	new Glider(document.querySelector('.glider-2'), {
  	slidesToShow: 1,
  	dots: '#dots',
  	draggable: true,
  	arrows: {
    	prev: '.glider-2-prev',
    	next: '.glider-2-next'
  	}
});
}