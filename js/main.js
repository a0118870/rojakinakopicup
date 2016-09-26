var bg = document.getElementById("bg");
var bgID = 0;
//console.log(bgID);

var cup1 = { '0' : document.getElementById("cup1"), '1' : 0, '2' : 1};
var cup2 = { '0' : document.getElementById("cup2"), '1' : 0, '2' : 1};
var cup3 = { '0' : document.getElementById("cup3"), '1' : 0, '2' : 1};

var click = new Audio("img/click.wav");
var crack = new Audio("img/crack.wav");

bg.addEventListener("click", function(){
	if (cup1[2] || cup2[2] || cup3[2]){
		if(bgID < 5){
			bgID++;
			bg.src ='img/bg0' + bgID + '.png';
			//console.log(bgID);
		} else {
			bgID = 0;
			bg.src ='img/bg0' + bgID + '.png';
			//console.log(bgID);
		}		
	}
})

cup1[0].addEventListener("click", function(){
	if (cup1[2]){
		changeCup(this);
		cup1[1]++;
		if(cup1[1] > 5){
			breakCup(this);
			cup1[2] = 0;
		}
	}
})

cup2[0].addEventListener("click", function(){
	if (cup2[2]){
		changeCup(this);
		cup2[1]++;
		if(cup2[1] > 5){
			breakCup(this);
			cup2[2] = 0;
		}
	}
})

cup3[0].addEventListener("click", function(){
	console.log(this.id);
	if (cup3[2]){
		changeCup(this);
		cup3[1]++;
		if(cup3[1] > 5){
			breakCup(this);
			cup3[2] = 0;
		}
	}
})

function changeCup(a){
	click.play();
	a.src = 'img/cup0' + Math.floor((Math.random()*4)+1) + '.png';
}

function breakCup(a){
	crack.play();
	if(a.id == "cup1") {
		a.src = 'img/cup00.png';
	} else {
		a.src = 'img/cup00b.png';
	}

}