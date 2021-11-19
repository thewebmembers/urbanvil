function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn22')) {
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