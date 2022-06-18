

$(document).ready(function(){

    $('#menu').click(function()
    {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

});

// get data
// const nameInput = document.querySelector("#name");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#phone");
// const message = document.querySelector("#message");
// const success = document.querySelector("#success");

// // // validate data
// function validateForm(){
//     if(nameInput.valid.length < 1)
//     {
//         errorNodes[0].innerText = "Name can not be blank";
//         nameInput.classList.add("error-border");
        
//     }
// }