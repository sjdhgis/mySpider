window.onload = function() {
	var banner = document.getElementById("banner");
	var img = banner.getElementsByTagName("img");
	var lis = banner.getElementsByTagName("li")
	var left = banner.getElementsByClassName("banner_left")[0];
	var right = banner.getElementsByClassName("banner_right")[0];

	function show(n) {
		for (let i = 0; i < img.length; i++) {
			if (i == n) {
				img[i].classList.remove("hide");
				lis[i].classList.add("current");
			} else {
				img[i].classList.add("hide");
				lis[i].classList.remove("current");
			}
		}
	}

	var index = 0;
	var timer;

	function go() {
		index = (index + 1) % 5;
		show(index);
	}
	timer = setInterval(go, 2000);
	banner.onmouseover = function() {
		clearInterval(timer);
		left.style.display = "block";
		right.style.display = "block";
	}
	banner.onmouseout = function() {
		timer = setInterval(go, 2000);
		left.style.display = "none";
		right.style.display = "none";
	}
	left.onclick = function() {
		if (index == 0) {
			index = 4;
		} else {
			index = (index - 1) % 5;
		}
		show(index);
	}
	right.onclick = function() {
		index = (index + 1) % 5;
		show(index);
	}
	for (let idx = 0; idx < lis.length; idx++) {
		lis[idx].onmouseover = function() {
			show(idx);
			index = idx;
		}
	}
}
