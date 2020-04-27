var scrollingElement = function() {
  var iswebkit = (navigator.userAgent.match(/WebKit\/([\d.]+)/) ? true : false);
  var htmlElement='html';
  if(iswebkit){
    htmlElement='body';
  }
  // Example = http://callmenick.com/post/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation

  /*!
  * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
  * Scroll smooth to any element in your DOM.
  *
  * Copyright (c) 2012 Yannick Albert (http://yckart.com)
  * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
  * 2013/02/17
  **/
  $.scrollTo = $.fn.scrollTo = function(x, y, options){
    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

    options = $.extend({}, {
        gap: {
            x: 0,
            y: 0
        },
        animation: {
            easing: 'swing',
            duration: 600,
            complete: $.noop,
            step: $.noop
        }
    }, options);

    return this.each(function(){
        var elem = $(this);
        elem.stop().animate({
            scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
            scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
        }, options.animation);
    });
  };
  //Fin del Plugin scrollTo


  $(".linkBtn").on('click', function(evn){
    evn.preventDefault();
    var attrData = this.getAttribute("data-id")
    $(htmlElement).scrollTo(attrData, attrData, {
        animation:{
          complete: function(){
            console.log("Termino la animacion");
          }
        }
      }
    );
  });


};

module.exports = scrollingElement;
