// JavaScript Document
//BackToTop
jQuery(document).ready(function($){
	var $ele = $(&#39;#BackToTop&#39;);
    $(window).scroll(function() {
        $(this).scrollTop() &gt;= 200 ? $ele.show(10).animate({ right : &#39;25px&#39; }, 10) : $ele.animate({ right : &#39;-80px&#39; }, 10);
    });
    $ele.click(function(e) {
        e.preventDefault();
        $(&#39;html,body&#39;).animate({
            scrollTop: 0
        }, 400);
    });
});