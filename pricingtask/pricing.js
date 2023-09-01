var t1=gsap.timeline()

t1.to("h1",{
    delay:0.2,
    y:30,
    scale:1.2,
    color:"white"
});
gsap.from("h3",
{
    opacity:0,
    scale:0.4,
    duration: 1, // seconds
    
    ease: "power2.inOut",
    stagger:1


});
t1.from("h2",{
    scale:1.4,

});
t1.to("button",{
  
    
    transform:"rotate(20deg)",
    repeat:1,
    yoyo:true,
    

});

t1.to("#description h4",{
    opacity:1,
    backgroundColor:"white"
});

