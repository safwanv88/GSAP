let container = document.querySelector('.container');


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:container,
        scrub:1,
        pin:true,
        start:"top top",
        end:"+=100%",
    },
})

.to(container,{
    x:()=> -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease:"none",
    duration: 1,
})

// PIN TEXT

.to(
    ".text-content",
    {
        x: ()=>
         container.scrollWidth - document.documentElement.clientWidth + "px",
    ease:"none",
    duration: 1,

    },
    "<"

);




gsap.utils.toArray(".img").forEach((image) => {
gsap.to(image, {
skewY: -5,
backgroundPosition: "-100px",
scrollTrigger: {
trigger: image,
containerAnimation: tl,
scrub: 1,
start: "center center+=200",

// markers: true,

},
});
});





let noise = document.getElementById("turbulence");
let arr =[];
let scrollTimer = -1;
const scrolling = ()=>{

    // add noise just when scrolling fast
    arr.push(window.scrollY)
    console.log(window.scrollY);
    let speed =arr[arr.length - 1] - arr[0];
    speed = Math.abs(speed);

    if (speed > 120){
    noise.setAttribute("baseFrequency", ".1 .50");
 }

 if(scrollTimer != -1) clearTimeout(scrollTimer);
 scrollTimer = setTimeout(stopScrolling, 200);

    
};

    //REMOVE NOISE WHEN SCROLLING STOP

    const stopScrolling = ()=> {
    noise.setAttribute("baseFrequency", "0 0");
    arr = [];
    };
    window.addEventListener("scroll", scrolling);