;(function () {
	
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

    var counter = function() {
		const year = (new Date().getFullYear()) ;
        const weddingDate = new Date('dec 05 2024 12:39:00 GMT+0300').getTime();
        let timer = setInterval(function() {

        const today = new Date().getTime();
        const diff = weddingDate - today;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =
            "<div class=\"days\"> \
        <div class=\"numbers\">" + days + "</div>days</div> \
        <div class=\"hours\"> \
        <div class=\"numbers\">" + hours + "</div>hours</div> \
        <div class=\"minutes\"> \
        <div class=\"numbers\">" + minutes + "</div>minutes</div> \
        <div class=\"seconds\"> \
        <div class=\"numbers\">" + seconds + "</div>seconds</div> \
        </div>";

    }, 1000);

	};
    
    var top = function(){$(".scroll").click(function(){
        $("html,body").animate({
            scrollTop:$(".top").offset().top
        },"5000");
        return false
    }
    )}
    
	$(function(){
        loaderPage();
        top();
		counter();
	});
}());

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
