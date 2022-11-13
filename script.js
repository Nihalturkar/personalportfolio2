// locomotive 
function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

// loder
gsap.to(" #loder #go",{
    top:0,
    ease: "expo.inOut",
    duration : 1,   

})
gsap.from(" #loder h1 span",{
    scale:0,
    stagger:1,
    ease: "expo.inOut",
    duration : 1,   

})
gsap.to(" #loder",{
    top:"-100%",
    ease: "expo.inOut",
    duration : 4,
    delay:2

})
// gsap animation
// gsap.from(" .part2 .det ",{
//     scrollTrigger:{
//         trigger:" .part2 .det",
//         scroller:"body",
//         start:"top 90%",
//         end:"top 80%",
//         scrub:true,
//     },
//     y:"20",
//     opacity:0,
//     ease: "expo.inOut",
//     duration:2

// })
// gsap.from(" .part2 #service ",{
//     scrollTrigger:{
//         trigger:" .part2 #service",
//         scroller:"body",
//         start:"top 150%",
//         end:"top 90%",
//         scrub:true,
//     },
//     scale:0,
//     ease: "expo.inOut",
//     duration:1
// })
var tl = gsap.timeline({
    repeat:"-1"
})
gsap
tl.to(".text h1",{
    top: "0%",
    ease: Expo.easeInOut,
    stagger:2,
    duration:2,
    yoyo:"true",
    
},"a")
tl
.to(".text h1",{
    top: "-120%",
    ease: Expo.easeInOut,
    stagger:2,
    delay: 2,
    yoyo:"true",
    
},"a")

// for project
function slideCircle(){
    document.querySelectorAll(".project")
        .forEach(function(slide){
            slide.addEventListener("mousemove", function(dets){
                var dim =slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(10% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });

            slide.addEventListener("mouseleave", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });
        })
}
slideCircle();
function slidesSkewMaker(){ 
    var dim = document.querySelector(".project")
    .getBoundingClientRect();

    var prev = dim.left;

    document.querySelector(".box")
    .addEventListener("scroll", function(){
        var dim2 = document.querySelector(".project")
        .getBoundingClientRect();
        var diff = prev - dim2.left;
        document.querySelectorAll(".project")
        .forEach(function(elem){
            elem.style.transform = `skewX(${diff*.1}deg)`; 
        });
        prev = dim2.left;
    })
}
slidesSkewMaker();

// --------------------------------------
// For day and night mode

var toggle = document.querySelector("#main");
var day = document.querySelector("#day");
var night = document.querySelector("#night");

night.addEventListener("click",function(){
    day.style.display = "flex"
    night.style.display = "none"
    toggle.style.backgroundColor = "#1D1D1D"
    toggle.style.color = "#fff"
})
day.addEventListener("click",function(){
    day.style.display = "none"
    night.style.display = "flex"
    toggle.style.backgroundColor = "#e7e6e5"
    toggle.style.color = "#1D1D1D"
    night.style.color = "#000"
})

var about = document.querySelector("#a");
var service = document.querySelector("#s");
var project = document.querySelector("#p");
var contact = document.querySelector("#c");

var da = document.querySelector("#da")
flag =0
about.addEventListener("click",function(){
    if (flag===0){
    da.style.display = "flex"
    ds.style.display = "none"
    dp.style.display = "none"
    dc.style.display = "none"
    flag = 1
    }
    else{
        da.style.display = "none"
        flag = 0   
    }
})
var ds = document.querySelector("#ds")
flag =0
service.addEventListener("click",function(){
    if (flag===0){
    ds.style.display = "flex"
    da.style.display = "none"
    dp.style.display = "none"
    dc.style.display = "none"
    flag = 1
    }
    else{
        ds.style.display = "none"
        flag = 0   
    }
})
var dp = document.querySelector("#dp")
flag =0
project.addEventListener("click",function(){
    if (flag===0){
    dp.style.display = "flex"
    da.style.display = "none"
    ds.style.display = "none"
    dc.style.display = "none"
    flag = 1
    }
    else{
        dp.style.display = "none"
        flag = 0   
    }
})
var dc = document.querySelector("#dc")
flag =0
contact.addEventListener("click",function(){
    if (flag===0){
    dc.style.display = "flex"
    da.style.display = "none"
    dp.style.display = "none"
    ds.style.display = "none"
    flag = 1
    }
    else{
        dc.style.display = "none"
        flag = 0   
    }
})
// =============================================================

var mm = document.querySelector("#nav .mm")
var menu = document.querySelector("#menu")
flag = 0
mm.addEventListener("click",function(){
    if(flag ===0){
        menu.style.left = "0%"
        flag = 1
    }
    else{
        menu.style.left = "-100%"
        flag = 0
    }
})
