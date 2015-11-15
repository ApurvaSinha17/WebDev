/**
 * AJAX demo source code
 */
function ajaxFunc(){
		var ajax;
		if(window.XMLHttpRequest){
			ajax = new XMLHttpRequest();
		} else {
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return ajax;
}
function loadMe(){
	var ajaxHandler = ajaxFunc();
	ajaxHandler.onreadystatechange=function(){
		if(ajaxHandler.readyState == 4 && ajaxHandler.status == 200){
			document.getElementById("loadMe").innerHTML = ajaxHandler.responseText;
		}
	}
	ajaxHandler.open("GET","../html/myPage.html",true);
	ajaxHandler.send();
}