gsap.timeline({
    scrollTrigger:{
        trigger:".box",
        Star:"center center",
        end:"bottom top",
        markers:false,
        scrub:true,
        pin:true
    }
})
.from(".text1",{x:innerWidth * 1})
.from(".text2",{x:innerWidth * -1})
.from(".text3",{rotate:360,x:innerWidth * 1})

gsap.timeline({
    scrollTrigger:{
        trigger:".box2",
        Star:"center center",
        end:"bottom top",
        markers:false,
        scrub:true,
        pin:true
    }
})
.from(".box2",{opacity:0})
.from(".text4",{y:innerHeight * 1})
.from(".text5",{y:innerHeight * -1})
.from(".text6",{y:innerHeight * 1})