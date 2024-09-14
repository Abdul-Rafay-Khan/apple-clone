var swiper = new Swiper(".mySwiper", {
    slidesPerView:1.5,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  
    },
 
      loop:true
  });

  let menu = document.querySelector(".ri-menu-3-line")
  let close = document.querySelector(".ri-close-large-line")
  let nav = document.querySelector(".respo-nav")

let tl = gsap.timeline()

tl.to(".respo-nav",{
  top:0,
  duration:1
})
tl.from(".respo-nav a",{
  x:150,
  opacity:0,
  stagger:0.1,
  duration:0.4
})
tl.pause()
  
menu.addEventListener("click",function(){
  tl.play()
})
close.addEventListener("click",function(){
  tl.reverse()
})

let tl2 = gsap.timeline()

tl2.from(".herotext h1",{
y:90,
opacity:0,
duration:0.5,


})

tl2.from(".herotext p",{
  x:90,
  opacity:0,
  duration:0.5,
  
  
  })
  
tl2.from(".herotext .links",{
  x:-90,
  opacity:0,
  duration:0.5,
  
  
  })
  let tl3 = gsap.timeline()
  tl3.from(".hero2text h1",{
    y:120,
opacity:0,
duration:0.5,
scrollTrigger :{
  trigger:".hero2",
  scroller:"body",
  start:"top 90%",
  end:"top 70%",
  scrub:2
  
}
  })
  tl3.from(".hero2text p",{
    x:90,
    opacity:0,
    duration:0.5,
    scrollTrigger :{
      trigger:".hero2",
      scroller:"body",
      start:"top 90%",
      end:"top 70%",
      scrub:2
      
    }
    
    })
    
  tl3.from(".hero2text .links",{
    x:-90,
    opacity:0,
    duration:0.5,
    scrollTrigger :{
      trigger:".hero2",
      scroller:"body",
      start:"top 90%",
      end:"top 70%",
      scrub:2
      
    }
    })
    let tl4 = gsap.timeline()

    tl4.from(".hero3text img",{
      scale:0,
      opacity:0,
      scrollTrigger :{
        trigger:".hero3",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:2,
 
        
      }
      
      })
  
    tl4.from(".hero3text p",{
      x:90,
      opacity:0,
      duration:0.5,
      scrollTrigger :{
        trigger:".hero3",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:2,
   
        
      }
      
      })
      tl3.from(".hero3text .links",{
        x:90,
        opacity:0,
        duration:1,
        scrollTrigger :{
          trigger:".hero3",
          scroller:"body",
          start:"top 90%",
          end:"top 70%",
          scrub:2
          
        }
        })