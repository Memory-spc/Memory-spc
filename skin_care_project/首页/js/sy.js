// fristpart

var list_1 = document.querySelector('.fristpart').querySelector('.left').querySelectorAll("li");
var nav_1 = document.querySelector('.fristpart').querySelector('.left').querySelectorAll('.nav-1>div');
// console.log(nav_1);
// console.log(fristnews);
select();
for(var i = 0 ; i<list_1.length;i++){
	list_1[i].setAttribute('index',i);
}
function select(){
	for(var i = 0 ; i<list_1.length;i++){
		var num;
		list_1[i].addEventListener('click',function(){
			for(var i = 0 ;i < list_1.length;i++){
				list_1[i].className = "";
				nav_1[i].style.display = "none";
			};
			this.className = "select";
			num = this.getAttribute('index');
			nav_1[num].style.display = "block";
		})
	}
}


// circle navigation

var logins = document.getElementsByName('nav');
// console.log(logins);
var circles = document.getElementsByName('cir');
// console.log(circles);

// Button
var prebtn = document.getElementById('preimg');
var nextbtn = document.getElementById('nextimg');

function preimg(){
	clearInterval(statement);
	for(var i = 0 ; i< logins.length;i++){
		logins[i].style.display = 'none';
		circles[i].className = '';
	}
	if(num == 0){
		num = logins.length - 1;
	}else{
		num--;
	}
	logins[num].style.display = 'block';
	circles[num].className = 'select';
	setTimeout(loop,2000);
}

function nextimg(){
	clearInterval(statement);
	for(var i = 0 ; i< logins.length;i++){
		logins[i].style.display = 'none';
		circles[i].className = '';
	}
	if(num == logins.length - 1){
		num = 0;
	}else{
		num++;
	}
	logins[num].style.display = 'block';
	circles[num].className = 'select';
	setTimeout(loop,2000);
}

var num = 0;
loop();
var statement;
function loop(){
	statement = setInterval(function(){
		for(var i = 0 ; i< logins.length;i++){
			logins[i].style.display = 'none';
			circles[i].className = '';
		}
		if(num == logins.length - 1){
			num = 0;
		}else{
			num++;
		}
		logins[num].style.display = 'block';
		circles[num].className = 'select';
		// console.log(11);
	},5000);
} 
prebtn.addEventListener('click',preimg);
nextbtn.addEventListener('click',nextimg);




