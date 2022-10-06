"use strict";

const nav = document.querySelector(".bg"),
menu = document.getElementById("menu"),
responsiveMenu = document.querySelector(".hidden"),
img1 = document.getElementById("image-transform"),
img2 = document.getElementById("image-stand-out");

menu.addEventListener("click",(e)=>{
	nav.style.display = "flex"
	document.querySelector(".body").style.overflow = "hidden";
})

responsiveMenu.addEventListener("click",(e)=>{
	e.stopPropagation();
	nav.style.display = "flex";
})

nav.addEventListener("click",(e)=>{
	nav.style.display = "none";
	document.querySelector(".body").style.overflow = "inherit";
})

const media = matchMedia("(max-width: 600px)");

media.addEventListener("change",()=>{
	if(media.matches) {
		img1.setAttribute("src","images/mobile/image-transform.jpg");
		img2.setAttribute("src","images/mobile/image-stand-out.jpg");
	}else {
		img1.setAttribute("src","images/desktop/image-transform.jpg");
		img2.setAttribute("src","images/desktop/image-stand-out.jpg");
		if (nav.style.display != "none") nav.style.display = "none";
	}
});