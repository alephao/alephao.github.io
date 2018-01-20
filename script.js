function linkLinks() {
    $('[data-link]').click(function(){
        var query = '.nav ul li.' + $(this).attr('data-link');
        $(query).click();
    });
}

function loadContent(contentName) {
    // $('#loadingWindow').fadeIn();
    $.ajax({
      url: "content/" + contentName + ".html",
      context: document.body
    }).done(function( html ) {
      // $('#loadingWindow').hide();
      $( '.content' ).html( html ).fadeIn();
      linkLinks();
    });
}

$(function(){
    $('.nav ul li').click(function() {
      if ( !($(this).hasClass("active")) ){
        $(".active").removeClass("active");
        var className =  $(this).attr('class');
        $(this).addClass("active");
        $('.content').fadeOut(function(){
          loadContent(className);
        });
      }
    });
});
