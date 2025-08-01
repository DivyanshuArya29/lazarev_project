function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector(".smooth-scroll").style.transform
          ? "transform"
          : "fixed"*/
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block",
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.2,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

// function page2Animation() {
//     var relem = document.querySelector("#right-elem")
//     var relemImg = document.querySelector("#right-elem img")

//     relem.addEventListener("mouseenter", function () {
//         relemImg.style.opacity = 1
//     })

//     var rightElems = document.querySelectorAll(".right-elem")

//     rightElems.forEach(function (elem) {
//         elem.addEventListener("mouseenter", function () {
//             elem.childNodes[3].style.opacity = 1
//             console.log("Added")
//         })
//         elem.addEventListener("mouseleave", function () {
//             elem.childNodes[3].style.opacity = 0
//             console.log("Removed")
//         })
//         elem.addEventListener("mouseleave", function () {
//             gsap.to(elem.childNodes[3],)
//         })
//     })

//     var rightElems = document.querySelectorAll(".right-elem")

//     rightElems.forEach(function (elem) {
//         // console.log(elem)
//         elem.addEventListener("mouseenter", function () {

//             elem.childNodes[3].style.opacity = 1
//         })
//         elem.addEventListener("mouseleave", function () {
//             console.log("Removed")
//         })
//     })
// }

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })


    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

}

function page6VideoAnimation() {
    var sections = document.querySelectorAll(".page6-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

function page9Animations() {
    gsap.from(".btm9-parts h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".btm9-parts",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

function loadingAnimation(){
    var tl = gsap.timeline()
    tl.from("#page1",{
        opacity:0,
        duration:0.2,
        delay:0.2
    })
    tl.from("#page1",{
        transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius:'150px',
        duration:2,
        ease:"expo.out"
    })
    tl.from("nav",{
        opacity:0,
        delay:-0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div",{
        opacity:0,
        duration:0.5,
        stagger:0.2
    })
}

function page1Svg(){
    var tl =gsap.timeline()
    tl.from("#page1 h1 span svg",{
        opacity:0,
        duration:0.2,
        delay:0.2,
    })
    tl.from("#page1 h1 span svg",{
        transform:"scaleX(0) scaleY(1)",
        duration:1,
        delay:2.45,
        ease:"expo.out"
    })
}




locomotiveAnimation()

navAnimation()

// page2Animation()

page3VideoAnimation()

page6VideoAnimation()

page9Animations()

loadingAnimation()

page1Svg()
