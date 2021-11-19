function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let zx = document.querySelector('.width_height_div__active');
let xx = document.querySelector('.width_height_div');
function functionBtn(){
    if(xx.style.display === "none"){
        xx.style.display="flex";
        setTimeout(() => {
            xx.classList.add("width_height_div__active");
        }, 1);
        zx.style.display="block";
    }else{
        xx.classList.remove("width_height_div__active");
        xx.style.display="none";
    }
};


let zx_1 = document.querySelector('.input_filter_div__active');
let xx_1 = document.querySelector('.input_filter_div');
function functionBtn2(){
    if(xx_1.style.display === "none"){
        xx_1.style.display="flex";
        setTimeout(() => {
            xx_1.classList.add("input_filter_div__active");
        }, 1);
        zx_1.style.display="block";
    }else{
        xx_1.classList.remove("input_filter_div__active");
        xx_1.style.display="none";
    }
};

let zx_2 = document.querySelector('.summer_winter_urb__active');
let xx_2 = document.querySelector('.summer_winter_urb');
function functionBtn3(){
    if(xx_2.style.display === "none"){
        xx_2.style.display="flex";
        setTimeout(() => {
            xx_2.classList.add("summer_winter_urb__active");
        }, 1);
        zx_2.style.display="block";
    }else{
        xx_2.classList.remove("summer_winter_urb__active");
        xx_2.style.display="none";
    }
};

let zx_2__2 = document.querySelector('.creator_div_an');
let xx_2__2 = document.querySelector('.creator_div_an');
let ftrt = document.querySelector('.another_sum_win');
let nijs = document.querySelector('.no_in_js');
function functionBtn4(){
    if(xx_2__2.style.display === "none"){
        xx_2__2.style.display="flex";
        setTimeout(() => {
            xx_2__2.classList.add("creator_div_an");
        }, 1);
        zx_2__2.style.display="block";
    }else{
        xx_2__2.classList.remove("creator_div_an");
        xx_2__2.style.display="none";
    }
    nijs.style.display="none";
    ftrt.style.paddingBottom="20px"
};



let rer = document.querySelector('.yes_div_on_bot');
function functionBtn5(){
    if(rer.style.display === "none"){
        rer.style.display="flex";
    }else{
        rer.style.display="none";
    }
};


// $('.functionBtn_onmedia').on('click', function(){
//     $('.width_height_div').css('display', 'block');
// })
$('.filter_media').on('click', function(){
    $('.global_filter_div_parent5').css('display', 'flex');
    setTimeout(()=>{
        $('.global_filter_div_parent5').toggleClass('global_filter_div_parent5_active');
    }, 100);
});