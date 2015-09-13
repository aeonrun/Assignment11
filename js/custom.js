$(document).ready(function() {



$("#assignment").click(function(){

	$("#one").show();
	$("#two").show(800);
	$("#three").show(900);
	$("#four").show(1000);
	$("#five").show(1200);
	$("#six").show(1400);
	$("#seven").show(1500);
	$("#eight").show(1700);
	$("#nine").show(1900);
	$("#nineb").show(1900);
	$("#ten").show(2100);
	$("#eleven").show(2200);

});

/*$("#two").mouseover(function(){

	$(".two").show();
	//$(".two").fadeOut(4000);
});

$("#three").mouseover(function(){

	$(".three").show();
	//$(".three").fadeOut(4000);
});

$("#four").mouseover(function(){

	$(".four").show();
	//$(".four").fadeOut(4000);
});

$("#five").mouseover(function(){

	$(".five").show();
	//$(".five").fadeOut(4000);
});

$("#six").mouseover(function(){

	$(".six").show();
	//$(".six").fadeOut(4000);
});

$("#seven").mouseover(function(){

	$(".seven").show();
	//$(".seven").fadeOut(4000);
});

$("#eight").mouseover(function(){

	$(".eight").show();
	//$(".eight").fadeOut(4000);
});

$("#nine").mouseover(function(){

	$(".nine").show();
	//$(".nine").fadeOut(4000);
});

$("#ten").mouseover(function(){

	$(".ten").show();
	//$(".ten").fadeOut(4000);
});

$("#eleven").mouseover(function(){

	$(".eleven").show();
	//$(".eleven").fadeOut(4000);
});*/



$("#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#nineb,#ten,#eleven").click(function(){
		$(".assignmentList").hide();
		$("#mainSection").show();
	});


$("#assignment").click(function(){
		$("#mainSection").slideUp();
		$(".assignmentList").slideDown();

	});

});