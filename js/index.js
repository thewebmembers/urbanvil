$('.scb_slider').slick({
    dots: true,
    arrows:true,
    nextArrow: '.scb_slider_next__1',
    prevArrow: '.scb_slider_prev__1',
    // prevArrow:"<button class='lbtn scb_slider_btn'><img class='a-left control-c prev slick-prev' src='../img/chv1.svg'></button>",
    // nextArrow:"<button class='rbtn scb_slider_btn'><img class='a-right control-c next slick-next' src='../img/chv2.svg'></button>",
    slidesToShow:1,
    slidesToScroll:1,
    speed:1000,
    infinite: true,             //defualt
    autoplay:true,              
    autoplaySpeed: 3000,
    pauseOnFocus:true,          //defualt
    pauseOnHover:true,          //defualt
    pauseOnDotsHover:true,      //defualt
    draggable: true,           //for pc 'Erb vor mknikov porcum enq sharjel'
    swipe:true,                //for touch screen
    touchThresHold:5,           //defualt 'kapvaca swipe-i het'
    touchMove:false,            //sxmac chenq karox sharjel
    waitForAnimate:true,        //no defualt     
    centerMode: false,          //defualt
    variableWidth: false,       //defualt
    rows:1,                     //Defualt 'Sharqer irar tak'
    slidesPerRow: 1,            //defualt 'Sharqer irar koxq'
    // Vertical verev nerqev
    vertical:false,              //defualt
    verticalSwiping:false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows:false,
                slidesToShow:1,
                slidesToScroll: 1
            }
        },
    ],
    mobileFirst: false,         //defualt min-width isk false --- max-widts=h
    // appendArrows: $('.appendArrows'), //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
    // appendDots: $('.appendArrows'),   //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
});    

$(document).ready(function(){
    $('.m3_slider').slick({
        dots: true,
        arrows:true,
        slidesToShow:6,
        slidesToScroll:6,
        speed:3000,
        nextArrow: document.getElementsByClassName('scb_slider_next'),
        prevArrow: document.getElementsByClassName('scb_slider_prev'),
        easing:'_linear_',          //defualt
        infinite: true,             //defualt
        // autoplay: true,              
        autoplaySpeed: 3000,
        pauseOnFocus:true,          //defualt
        pauseOnHover:true,          //defualt
        pauseOnDotsHover:true,      //defualt
        draggable: true,           //for pc 'Erb vor mknikov porcum enq sharjel'
        swipe:true,                //for touch screen
        touchThresHold:5,           //defualt 'kapvaca swipe-i het'
        touchMove:false,            //sxmac chenq karox sharjel
        waitForAnimate:true,        //no defualt     
        centerMode: false,          //defualt
        variableWidth: false,       //defualt
        rows:1,                     //Defualt 'Sharqer irar tak'
        slidesPerRow: 1,            //defualt 'Sharqer irar koxq'
        // Vertical verev nerqev
        vertical:false,              //defualt
        verticalSwiping:false,
        responsive: [
            {
                breakpoint: 1874,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1837,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1470,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 882,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ],
        mobileFirst: false,         //defualt min-width isk false --- max-widts=h
        // appendArrows: $('.m3_buttons'), //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
        // appendDots: $('.appendArrows'),   //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
    });    
});

$(document).ready(function(){
    $('.m6_slider').slick({
        dots: true,
        arrows:true,
        slidesToShow:6,
        slidesToScroll:6,
        speed:3000,
        nextArrow: document.getElementsByClassName('scb_slider_next_33'),
        prevArrow: document.getElementsByClassName('scb_slider_prev_33'),
        easing:'_linear_',          //defualt
        infinite: true,             //defualt
        autoplay:true,              
        autoplaySpeed: 3000,
        pauseOnFocus:true,          //defualt
        pauseOnHover:true,          //defualt
        pauseOnDotsHover:true,      //defualt
        draggable: true,           //for pc 'Erb vor mknikov porcum enq sharjel'
        swipe:true,                //for touch screen
        touchThresHold:5,           //defualt 'kapvaca swipe-i het'
        touchMove:false,            //sxmac chenq karox sharjel
        waitForAnimate:true,        //no defualt     
        centerMode: false,          //defualt
        variableWidth: true,       //defualt
        rows:1,                     //Defualt 'Sharqer irar tak'
        slidesPerRow: 1,            //defualt 'Sharqer irar koxq'
        // Vertical verev nerqev
        vertical:false,              //defualt
        verticalSwiping:false,
        responsive: [
            {
                breakpoint: 1874,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1837,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1470,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 882,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ],
        mobileFirst: false,         //defualt min-width isk false --- max-widts=h
        // appendArrows: $('.m3_buttons'), //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
        // appendDots: $('.appendArrows'),   //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
    });    
});
$(document).ready(function(){
    $('.m6_slider_88').slick({
        dots: true,
        arrows:true,
        slidesToShow:6,
        slidesToScroll:6,
        speed:3000,
        nextArrow: document.getElementsByClassName('scb_slider_next_88'),
        prevArrow: document.getElementsByClassName('scb_slider_prev_88'),
        easing:'_linear_',          //defualt
        infinite: true,             //defualt
        autoplay:false,              
        autoplaySpeed: 3000,
        pauseOnFocus:true,          //defualt
        pauseOnHover:true,          //defualt
        pauseOnDotsHover:true,      //defualt
        draggable: true,           //for pc 'Erb vor mknikov porcum enq sharjel'
        swipe:true,                //for touch screen
        touchThresHold:5,           //defualt 'kapvaca swipe-i het'
        touchMove:false,            //sxmac chenq karox sharjel
        waitForAnimate:true,        //no defualt     
        centerMode: false,          //defualt
        variableWidth: true,       //defualt
        rows:1,                     //Defualt 'Sharqer irar tak'
        slidesPerRow: 1,            //defualt 'Sharqer irar koxq'
        // Vertical verev nerqev
        vertical:false,              //defualt
        verticalSwiping:false,
        responsive: [
            {
                breakpoint: 1874,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1837,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1470,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 882,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ],
        mobileFirst: false,         //defualt min-width isk false --- max-widts=h
        // appendArrows: $('.m3_buttons'), //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
        // appendDots: $('.appendArrows'),   //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
    });    
});


$(document).ready(function(){
    $('.m4_slider').slick({
        dots: false,
        arrows:true,
        slidesToShow:6,
        slidesToScroll:6,
        speed:3000,
        nextArrow: document.getElementsByClassName('scb_slider_next_2'),
        prevArrow: document.getElementsByClassName('scb_slider_prev_2'),
        easing:'_linear_',          //defualt
        infinite: true,             //defualt
        autoplay:true,              
        autoplaySpeed: 3000,
        pauseOnFocus:true,          //defualt
        pauseOnHover:true,          //defualt
        pauseOnDotsHover:true,      //defualt
    
        draggable: true,           //for pc 'Erb vor mknikov porcum enq sharjel'
        swipe:true,                //for touch screen
        touchThresHold:5,           //defualt 'kapvaca swipe-i het'
        touchMove:false,            //sxmac chenq karox sharjel
        waitForAnimate:true,        //no defualt     
        centerMode: false,          //defualt
        variableWidth: false,       //defualt
        rows:1,                     //Defualt 'Sharqer irar tak'
        slidesPerRow: 1,            //defualt 'Sharqer irar koxq'
        // Vertical verev nerqev
        vertical:false,              //defualt
        verticalSwiping:false,
        responsive: [
            {
                breakpoint: 1521,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll:5,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll:4,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            }, 
            {
                breakpoint: 672,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll:1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            },
        ],
        mobileFirst: false,         //defualt min-width isk false --- max-widts=h
        // appendArrows: $('.m3_buttons'), //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
        // appendDots: $('.appendArrows'),   //html-i mej sarqum es div et classi anunov  kam urish anunov u iran pahum dra mej
    });    
});
let a = document.querySelector('.hd_2_kat_main');
function functionLL(){
    if(a.style.display === "none"){
        opening()
    }else{
        cloosing()
    }
    function opening(){
        a.style.display="flex";
    };
    function cloosing(){
            a.style.display="none";
    };
};

// let yaz = document.querySelector('.brg_a_svg');
// let zay = document.querySelector('.brg_a_div');
function burgerMenu(){
    let div = document.querySelector('.burger_menu');
    let svg = document.querySelector('.brg_a_svg');
    let r = document.querySelector('.brg_a_div');
    let divActive = document.querySelector('.burger_menu__active');
    if(svg.style.display === "block"){
        r.style.display ="flex";
        svg.style.display = "none";
        div.style.display="flex";
        setTimeout(() => {
            div.classList.add("burger_menu__active");
        }, 1);
        divActive.style.display="flex";

    }else{
        svg.style.display="block";
        r.style.display = "none";
        div.style.display="none";
        div.classList.remove("burger_menu__active");
    }
    // if(divActive.style.display === "none"){
    //     divActive.style.display="flex";
        
    //     div.style.display="flex";
    // }else{
    //     divActive.style.display="none";
    // }
}






$('.media_foot_button').on("click",function(c){
    $('.tajin').css('display','flex');
    setTimeout(function() { 
        $('.tajin').addClass('tajin_active')
    }, 1);
    c.stopPropagation();
})
$(".popup_closing_represent").on('click',function(){
    $('.tajin').removeClass('tajin_active');
})





$('.deliver_cal').on("click",function(c){
    $('.tajin').css('display','flex');
    setTimeout(function() { 
        $('.tajin').addClass('tajin_active')
    }, 1);
    c.stopPropagation();
});

$("document").on('click',function(){
    $('.tajin').removeClass('tajin_active');
});