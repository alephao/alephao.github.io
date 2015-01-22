$(function(){

    $('.home').click(function(){
        if ( !($(this).hasClass("active")) ){
            $(".active").removeClass("active");
            $(this).addClass("active");
            $('main').fadeOut(function(){
                $('#loadingWindow').fadeIn();
                $.ajax({
                    url: "ajax/home.html",
                    context: document.body
                }).done(function( html ) {
                    $('#loadingWindow').hide();
                    $( 'main' ).html( html ).fadeIn();
                });
            });
        }
    });

    $('.portfolio').click(function(){
        if ( !($(this).hasClass("active")) ){
            $(".active").removeClass("active");
            $(this).addClass("active");
            $('main').fadeOut(function(){
                $('#loadingWindow').fadeIn();
                $.ajax({
                    url: "ajax/portfolio.html",
                    context: document.body
                }).done(function( html ) {
                    $('#loadingWindow').hide();
                    $( 'main' ).html( html ).fadeIn();
                });
            });
        }
    });

    $('.bio').click(function(){
        if ( !($(this).hasClass("active")) ){
            $(".active").removeClass("active");
            $(this).addClass("active");
            $('main').fadeOut(function(){
                $('#loadingWindow').fadeIn();
                $.ajax({
                    url: "ajax/bio.html",
                    context: document.body
                }).done(function( html ) {
                    $('#loadingWindow').hide();
                    $( 'main' ).html( html ).fadeIn();
                });
            });
        }
    });

    $('.contact').click(function(){
        if ( !($(this).hasClass("active")) ){
            $(".active").removeClass("active");
            $(this).addClass("active");
            $('main').fadeOut(function(){
                $('#loadingWindow').fadeIn();
                $.ajax({
                    url: "ajax/contact.html",
                    context: document.body
                }).done(function( html ) {
                    $('#loadingWindow').hide();
                    $( 'main' ).html( html ).fadeIn();
                });
            });
        }
    });

    var hashVar = window.location.hash.substr(1);

    if (hashVar == "portfolio") {
        $('.portfolio').click();
    }

    if (hashVar == "bio") {
        $('.bio').click();
    }

    if (hashVar == "contact") {
        $('.contact').click();
    }

});