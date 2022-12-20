$(".frist-step").hide();
$(".seconed-step").hide();
$(".seconed-step2-1").hide();
$(".seconed-step2-2").hide();
$(".three-step").hide();
$(".three-step3-1").hide();
$(".three-step3-2").hide();
$(".four-step").hide();
$(".four-step4-1").hide();
$(".four-step4-2").hide();
$(".start-button").click(function() {
    $(".frist-step").show();
    $(".project").hide();
});


$(".Domino").dblclick(function() {
	$(".seconed-step").show();
    $(".frist-step").hide();
    
});

$(".same-route").dblclick(function() {
	$(".seconed-step2-1").show();
    $(".seconed-step").hide();
});

$(".Shortcut").dblclick(function() {
	$(".seconed-step2-2").show();
    $(".seconed-step").hide();
});

$(".Popeyes").dblclick(function() {
	$(".three-step").show();
    $(".frist-step").hide();
});

$(".order").dblclick(function() {
	$(".three-step3-1").show();
    $(".three-step").hide();
});

$(".driving").dblclick(function() {
	$(".three-step3-2").show();
    $(".three-step").hide();
});

$(".Mcdonald").dblclick(function() {
	$(".four-step").show();
    $(".frist-step").hide();
});

$(".Honda").dblclick(function() {
	$(".four-step4-1").show();
    $(".four-step").hide();
});

$(".walk").dblclick(function() {
	$(".four-step4-2").show();
    $(".four-step").hide();
});