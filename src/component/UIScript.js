import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin ( ScrollTrigger, ScrollToPlugin );

function UIScript(){
	useEffect(()=>{
			let n=0;
			let t=0;
			let topPos=0;
		
			let body=document.body;
			let navList=document.querySelectorAll("nav> ul > li");
			let tabList=document.querySelector(".tab");
			let dim=document.querySelector(".dim");
			let mobile=document.querySelector("#mobile");
			let header=document.querySelector("#header");
			let menuArea=header.firstElementChild;
		
			let desktop=document.getElementById("desktop");
			let desktopList=desktop.querySelectorAll("ul > li"); 
		
			let mobileGnb=document.getElementById("mobile");
			let mobileGnbList=mobileGnb.querySelectorAll("ul > li");
		
			let section=document.querySelectorAll("section");
			let pageList=[header]; //[header]
		
			section.forEach(function(item){
				pageList.push(item);
			})
		
			navList.forEach(function(item){
				item.addEventListener("mouseenter", function(){
					item.classList.add("active");
				});
				item.addEventListener("mouseleave", function(){
					item.classList.remove("active");
				});
			});
		
			tabList.addEventListener("click", function(e){
				e.preventDefault();
				
				if(tabList.classList.contains("active") === false){
					tabList.classList.add("active");
					dim.classList.add("active");
					body.classList.add("fixed");
					gsap.to(tabList, {x: -280, duration: 0.3 });
					gsap.to(mobile, {right: 0, duration: 0.3});
				}
				else{
					tabList.classList.remove("active");
					body.classList.remove("fixed");
					dim.classList.remove("active");
					gsap.to(tabList, {x:0, duration: 0.3 });
					gsap.to(mobile, {right: -280, duration: 0.3});
				}
			});
		
			pageList.forEach(function(item, i){
				gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top center", 
						end: "bottom 20%",
						onEnter: function(){
							controlMenu(i)
						},
						onEnterBack: function(){
							controlMenu(i)
						}
					}		
				});
			});
		
			function controlMenu(i){
				desktopList.forEach(function(list, j){
					if(j === i){
						desktopList[j].firstElementChild.classList.add("on");
						mobileGnbList[j].firstElementChild.classList.add("on");
					}
					else{
						desktopList[j].firstElementChild.classList.remove("on");
						mobileGnbList[j].firstElementChild.classList.remove("on");
					}
				});
		
				if(i !== 0){
					btnTop.classList.add("active");
				}
				else{
					btnTop.classList.remove("active");
				}
			}
		
			window.addEventListener("resize", function(){
				if(window.innerWidth > 720){
					if(tabList.classList.contains("active")){
						tabList.classList.remove("active");
						dim.classList.remove("active");
						gsap.to(tabList, {x:0, duration: 0.3 });
						gsap.to(mobile, {right: -280, duration: 0.3});
					}
				}
			});
		
			
			window.addEventListener("scroll", function(){
				if(window.scrollY > 300){
					header.classList.add("fixed");
				}
				else{
					header.classList.remove("fixed");
				}
			});
		
			desktopList.forEach(function(item, i){
				desktopList[i].addEventListener("click", function(e){
					e.preventDefault();
		
					topPos=pageList[i].offsetTop;
					gsap.to(window, { scrollTo: topPos, duration: 0.4});
				});
				mobileGnbList[i].addEventListener("click", function(e){
					e.preventDefault();
		
					topPos=pageList[i].offsetTop;
					gsap.to(window, { scrollTo: topPos, duration: 0.4, onComplete: function(){   //onComplete 이동하면 모바일 메뉴 닫게  
						tabList.classList.remove("active");
						dim.classList.remove("active");
						body.classList.remove("fixed");
						gsap.to(tabList, {x:0, duration: 0.3 });
						gsap.to(mobile, {right: -280, duration: 0.3});
					} });
				});
			});
			
		
			let btnTop=document.querySelector(".btn_top");
			btnTop.addEventListener("click", function(e){
				e.preventDefault();
		
				gsap.to(window, {scrollTo: 0, duration: 0.4});
			});
			
			
		
		
			let titleElements=document.querySelectorAll(".slider .title *");
			const startTl=gsap.timeline();
			startTl.fromTo(titleElements, { y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.8, stagger: 0.5})
			/*
			startTl.fromTo(".slider .title span", { y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.8})
			.fromTo(".slider .title strong", { y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.8})
			.fromTo(".slider .title a", { y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.8});
			*/
		
			let businessList=document.querySelectorAll("#business .content ul li")
			const tl2=gsap.timeline({
				scrollTrigger: {
					trigger: "#business",
					start: "top 50%",
					end: "bottom 20%"
				}		
			})
			businessList.forEach(function(item, i){
				if(i%2 === 1){
					tl2.fromTo(item, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
				}
				else{
					tl2.fromTo(item, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
				}
			});
		
			let portfolioList=document.querySelectorAll("#portfolio .content ul li")
			const tl3=gsap.timeline({
				scrollTrigger: {
					trigger: "#portfolio",
					start: "top 50%",
					end: "bottom 20%"
				}		
			});
			portfolioList.forEach(function(item){
				tl3.fromTo(item, { y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger: 0.5})
			});
			
			
			let cultureList=document.querySelectorAll("#culture .content ul li");
			const tl4=gsap.timeline({
				scrollTrigger: {
					trigger: "#culture",
					start: "top 50%",
					end: "bottom 20%"
				}		
			})
			cultureList.forEach(function(item, i){
				if(i%2 === 1){
					tl4.fromTo(item, { x: -50, opacity: 0}, { x: 0, opacity: 1, duration: 0.5})
				}
				else{
					tl4.fromTo(item, { x: 50, opacity: 0}, { x: 0, opacity: 1, duration: 0.5, onComplete: function(){
						if(i === cultureList.length-1){
							document.querySelector("#culture .content").classList.add("on");
						}
					}})
				}
			});
		
			let awardsList=document.querySelectorAll("#awards .content ul li")
			const tl5=gsap.timeline({
				scrollTrigger:{
					trigger: "#awards",
					start: "top 50%",
					end: "bottom 20%"
				}
			})
			awardsList.forEach(function(item){
				tl5.fromTo(item, { y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger: 0.5})
			})		
	})
	return(
		<></>
	)
}

export default UIScript;