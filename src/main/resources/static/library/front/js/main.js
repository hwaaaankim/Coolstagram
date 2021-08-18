$(function() {
	/* ---------------------------------------------
			navbar	
	------------------------------------------------*/
	$("ul.nav li").click(function() {
		//$(".dropdown-content").fadeOut();
		$(this).children(".dropdown-content").slideToggle("slow");
	});
	$(document).click(function(e){
		var target = e.target;
		if(!$(target).is('.dropdown-content') && !$(target).parents().is('ul.nav li')){
			$('.dropdown-content').slideUp();
		}
	});
	/* ---------------------------------------------
			tab 탭 기능	
	------------------------------------------------*/
	$(".tab-content").hide();
	$(".tab-content:first").show();

	$(".tabs li").click(function() {
		$(".tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab-content").hide()
		var activeTap = $(this).attr("rel")
		$("#" + activeTap).fadeIn()
	});

	/* ---------------------------------------------
			상세페이지 클릭 시 modal	
	------------------------------------------------*/
	$(".myImg").click(function() {
		$("#detailModal").show();
		var main = $(this).attr('src');
		$("#img01").attr('src', main);
		var text = $(this).attr('alt');
		$("#mcaption").text(text);
	});

	$(".mclose").click(function() {
		$("#detailModal").hide();
	})
});






















