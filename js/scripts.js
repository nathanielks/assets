  // Smooth scrolling - css-tricks.com
  function filterPath(string) {
    return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
  }

  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i < argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop() > 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop() > 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }


function initFlexsliders(){
    if ($('#home-slider')){

        $('').flexslider({
            animation: "slide",
            prevText: '',
            nextText: '',
            controlsContainer: '',
            manualControls: '',
            sync: '',
            slideshowSpeed: 5000,
            animationDuration: 500,
            start: function(slider){
            }
            before: function(slider){
            }
        });
    
    }
}

$(document).ready(function(){

    // This adds 'placeholder' to the items listed in the jQuery .support object. 
    jQuery(function() {
       jQuery.support.placeholder = false;
       test = document.createElement('input');
       if('placeholder' in test) jQuery.support.placeholder = true;
    });

    // This adds placeholder support to browsers that wouldn't otherwise support it. 
    $(function() {
       if(!$.support.placeholder) { 
          var active = document.activeElement;
          $(':text').focus(function () {
             if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
                $(this).val('').removeClass('hasPlaceholder');
             }
          }).blur(function () {
             if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
             }
          });
          $(':text').blur();
          $(active).focus();
          $('form:eq(0)').submit(function () {
             $(':text.hasPlaceholder').val('');
          });
       }
    });

      var locationPath = filterPath(location.pathname);
      var scrollElem = scrollableElement('html', 'body');
      $('a[href*=#nav]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
          var $target = $(this.hash),
              target = this.hash;
          if (target) {
            var targetOffset = $target.offset().top;
            $(this).click(function(event) {
              event.preventDefault();
              $(scrollElem).animate({
                scrollTop: targetOffset
              }, 'slow', function() {
                location.hash = target;
              });
            });
          }
        }
      });



    $(window).resize(function(){
        
        var widthQuery = window.matchMedia("(min-width: 980px)");

        if ( widthQuery.matches ){
        } else{
        }


    });

    var phoneMatch = window.matchMedia("(max-width: 767px)").matches;

    if ( phoneMatch ){
    }

});

$(window).load(function() {
    initFlexsliders();
});
