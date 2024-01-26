;(function($,window,document){'use strict';$.fn.codeStarParallax=function(){return this.each(function(){var $this=$(this),offset=0,boxHeight=0,winWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),winHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),imgHeight=$this.data('height')||0,ratio=$this.data('ratio')||0.5,positionX=$this.css('background-position-x')||'50%';function scrolling(){var scrollTop=$(window).scrollTop(),boxOffset=$this.offset().top;if(boxOffset+boxHeight<=scrollTop||boxOffset>=scrollTop+winHeight){return;}
$this.css({'background-position':positionX+' '+Math.round((offset+ratio)*(boxOffset-scrollTop))+'px'});}
function resizing(){winWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0);winHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0);boxHeight=$this.outerHeight();imgHeight=imgHeight||boxHeight;ratio=Math.min(ratio,imgHeight/(winHeight+boxHeight));offset=Math.min(offset,(Math.min(0,winHeight-imgHeight-ratio)*Math.min(0,winHeight-boxHeight))/2);scrolling();}
$(window).on('scroll',scrolling).on('resize',resizing);resizing();});};})(jQuery,window,document);


