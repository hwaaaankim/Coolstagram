/*-------------------------------------------------------------------------
			Modal
  -------------------------------------------------------------------------*/
const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#modal-btn");
const ans = document.querySelector("#answer");
const modalBack = document.querySelector("#modal-background");

/*function setCookie(name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}*/

/*function getCookie(name){
	var cookie = document.cookie;
	
	if (document.cookie !="") {
		var cookie_array = cookie.split("; ");
		console.log(cookie_array)
		for ( var index in cookie_array) {
			var cookie_name = cookie_array[index].split("=");
			if (cookie_name[0] == "mycookie") {
				return cookie_name[1];
			}
		}
	}
	return;
}*/

modalBtn.addEventListener("click", () => {
	modalBack.style.display = "block";
	modal.className = "open";
})

modalBack.addEventListener("click", () => {
	modalBack.style.display = "none";
	modal.className = "close";
})

modal.addEventListener("click", (e) => {
	if (e.target.id === "todayHide-btn") {
		setCookie("mycookie", 'popupEnd', 1);
	} else if (e.target.id === "close-btn") {
		modalBack.style.display = "none";
	} else {
		return;
	}
	modal.className = "close";
})


/*-------------------------------------------------------------------------
			Modal Select
  -------------------------------------------------------------------------*/
const drop_btn = document.querySelector(".drop-btn");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");

drop_btn.onclick = (() => {
	//menu_wrapper.style.display = "block";
	menu_wrapper.classList.toggle("show");
})

$(".menu-bar >li").click(function(){
	var title = $(this).text();
	$("#con-title>h5").text(title);
	var content = $(this).attr("id");
	$(".m-content").children().attr("style", "display: none;");
	$(".con-" + content).fadeIn(function(){
		$(".con-" + content).attr("style", "display: block;");
	})
	menu_wrapper.classList.remove("show");
});








