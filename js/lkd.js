window.onload = function(){
	(function(){
		var id;
		
		var id2;
		
		var num;
		var len;
		var liwidth;
		
		var liwidth = 1200;
		var num = 1;
		var num2 = 1;
		var bimg = document.querySelector('.img1');
		var img = document.querySelector('.imgs1 .imgs11');
		img.style.left = -liwidth+'px';
		var imgs = document.querySelectorAll('.imgs1 .imgs11 .item');
		var len = imgs.length;
		var left = -liwidth;
			
		
			//设置焦点
		var bullets = document.querySelectorAll('.imgs1 .pagination .bullet')
		for(var i = 0; i < bullets.length; i++){
			bullets[i].index = i;
			bullets[i].onmouseout = function(){
				num = this.index +1;
				slideTo(num);
				}
		}
		var bullets2 = document.querySelectorAll('.main .pagination2 .bullet')
		for(var i = 0; i < bullets2.length; i++){
			bullets2[i].index = i;
			bullets2[i].onmouseout = function(){
				num2 = this.index +1;
				slideTo2(num2);
				}
		}
		auto();
		auto2();
		document.querySelector('.imgs1').onmouseout = function(){
			auto();
		}
		document.querySelector('.imgs1').onmouseover = function(){
			stop();
		}
		document.querySelector('.main .kdxw_left').onmouseout = function(){
			auto2();
		}
		document.querySelector('.main .kdxw_left').onmouseover = function(){
			stop2();
		}
		
		
		
		
		
		
		
		
		function slidePrev(){
			num--;
			slideTo(num);
		}
		function slideNext(){
			num++;
			slideTo(num);
		}
		function slideNext2(){
			num2++;
			slideTo2(num2);
		}
		
		function slideTo(index){
			var bullets = document.querySelectorAll('.imgs1 .bullet');
			var img = document.querySelector('.imgs1 .imgs11');
		
		
			if(index === len){
				num  = index = 2;
				img.style.left = -liwidth+'px';
			}
			if(index === -1){
				num = index = len - 3;
				img.style.left = -(len - 2)*liwidth+'px'
			}
			left = -index*liwidth;
			animate(img,{left:left});
			
			var focusIndex
			if(index === 0){
				focusIndex = bullets.length - 1;
			}else if(index === len - 1){
				focusIndex = 0;
			}else{
				focusIndex = index - 1;
			}
			document.querySelector('.imgs1 .focus').className = 'bullet';
			bullets[focusIndex].className = 'bullet focus';
			
			
		}
		function slideTo2(index){
			var bullets = document.querySelectorAll('.main .bullet');
			var img = document.querySelector('.main .lbt');
		
			if(index === len){
				num2  = index = 2;
				img.style.left = -500+'px';
			}
			if(index === -1){
				num2 = index = len - 3;
				img.style.left = -(len - 2)*500+'px'
			}
			left = -index*500;
			animate(img,{left:left});
			
			var focusIndex
			if(index === 0){
				focusIndex = bullets.length - 1;
			}else if(index === len - 1){
				focusIndex = 0;
			}else{
				focusIndex = index - 1;
			}
			document.querySelector('.main .focus').className = 'bullet';
			bullets[focusIndex].className = 'bullet focus';
			
			
		}
		function auto(){
			clearInterval(id);//避免每次调用的时候都有重复的
								//setInterval,先清除id再重新设定
			id = setInterval(function() {
				slideNext();
			}, 2000)
		}
		function auto2(){
			clearInterval(id2);//避免每次调用的时候都有重复的
								//setInterval,先清除id再重新设定
			id2 = setInterval(function() {
				slideNext2();
			}, 2000)
		}
		function stop(){
			clearInterval(id);
		}
		function stop2(){
			clearInterval(id2);
		}
	})()
}
