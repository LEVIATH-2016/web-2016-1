$(function(){

	var	toggle = $(".member-toggle");

	toggle.on("click",function(){
		var index = toggle.index(this);
		var $this = $(this);
		var _toggleClass = "toggle-active";

		if($this.hasClass(_toggleClass)){
			hideSqure(index);
			$this.removeClass(_toggleClass);
			
		}else{
			showSqure(index);
			setDom(index);
			$this.addClass(_toggleClass);
		}

	});

	function setDom(num){
		var memberName = '<p class="member-name">' + obj[num].name + '</p>';
		
		var memberInfo = '<ul class="member-info">';

			memberInfo += '<li>' + obj[num].birth+'</li>',
			memberInfo += '<li>' + obj[num].job+'</li>',
			memberInfo += '</ul>';

		var memberComment = '<p class="member-comment">' + obj[num].comment+ '</p>';

		if(num === 0){
			var infoArray = [undefined,memberName,memberInfo,memberComment];
		}else if(num === 1){
			var infoArray = [memberInfo,undefined,memberComment,memberName];
		}else if(num === 2){
			var infoArray = [memberName,memberComment,undefined,memberInfo];
		}else if(num === 3){
			var infoArray = [memberComment,memberInfo,memberName,undefined];
		}
		

		var squre = $(".member-squre");

		for(var i = 0; i < toggle.length; i += 1){

			if(i === num){
				continue;
			}

			squre.eq(i).html(infoArray[i]);
		}
	}

	function showSqure(num){

		var squre = $(".member-squre");

		for(var i = 0; i < toggle.length; i += 1){

			if(i === num){
				continue;
			}

			squre.eq(i).css({
				display : "block",
				opacity : 0
			});
			squre.eq(i).animate({

				top : -15,
				opacity : 1

			},600);
		}
	}

	function hideSqure(num){
		var squre = $(".member-squre");

		for(var i = 0; i < toggle.length; i += 1){

			if(i === num){
				continue;
			}
			
			squre.eq(i).animate({

				top : 0,
				opacity : 0

			},600,function(){
				squre.css("display","none");
			});
		}
	}


});

var obj = [
	{
		name : "ASAKO SHINJI",	
		birth : "1989/01/31",
		job:"front end",
		comment:"色々やってます"
	},
	{
		name : "IKOMA YUICHIRO",
		birth : "1987/01/12",
		job:"designer",
		comment:"絵書いてます"
	},
	{
		name : "TANAKA FUMIHISA",
		birth : "1988/12/12",
		job:"sound",
		comment:"音楽やってます"
	},
	{
		name : "EGUCHI TAKAHIRO",
		birth : "1988/01/20",
		job:"sound",
		comment:"効果音大好きです"
	}
];
