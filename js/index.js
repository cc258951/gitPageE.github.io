//banner
var slideInterval = setInterval(nextSlide,3000);
var slides = document.querySelectorAll('.kv-item li');
var slides_icon = document.querySelectorAll('.kv-page li');
console.log(slides_icon);
var currentSlide = 0;
function nextSlide() {
    slides[currentSlide].className = '';
    slides_icon[currentSlide].className = '';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'active';
    slides_icon[currentSlide].className = 'active';
};

$(".kv-page li").click(function(event) {
    clearInterval(slideInterval);
    $(this).addClass('active').siblings().removeClass('active');
    currentSlide = $(this).index();
    $(".kv-item li").eq(currentSlide).addClass('active').siblings().removeClass('active');
    slideInterval = setInterval(nextSlide, 3000);
});
$(".kv-right").click(function(event){
    clearInterval(slideInterval);
    currentSlide = (currentSlide + 1) % slides.length;
    $(".kv-item li").eq(currentSlide).addClass('active').siblings().removeClass('active');
    $(".kv-page li").eq(currentSlide).addClass('active').siblings().removeClass('active');
    slideInterval = setInterval(nextSlide, 3000);
});
$(".kv-left").click(function(event){
    clearInterval(slideInterval);
    currentSlide = (currentSlide - 1) % slides.length;
    $(".kv-item li").eq(currentSlide).addClass('active').siblings().removeClass('active');
    $(".kv-page li").eq(currentSlide).addClass('active').siblings().removeClass('active');
    slideInterval = setInterval(nextSlide, 3000);
});

//marquees
var marqueesPlay = setInterval(marqueesAutoRun, 7000);

function marqueesAutoRun() {
    var marqueesNum = $(".marquees li").length;
    if ($(".marquees-wrap li.active").index() == (marqueesNum - 1)) {

        $(".marquees-wrap li").eq(0).addClass('active').siblings().removeClass('active');
    } else {
        $(".marquees-wrap li.active").removeClass('active').next().addClass('active');
    }
}

//btnMadol popup
$(".btnMadol").click(function() {
    var href = $(this).attr("href");
    if( href === '#login-modal'){
        $('.login-before').addClass('hide');
        $('.login-after').removeClass('hide');
        $('.modal').fadeOut(500);
        $(href).fadeIn(500);
    }else{
        $('.modal').fadeOut(500);
        $(href).fadeIn(500);
    }
});
$('.close').click(function(){
    $('.modal').fadeOut(500);
});
$('.popup-close').click(function(){
    $('.modal').fadeOut(500);
});
$('.login-after a:last-child').click(function () {
     $('.login-after').addClass('hide');
     $('.login-before').removeClass('hide');
});
$('.marquees').click(function () {
    $('.modal').fadeOut(500);
    $('#marquees').fadeIn(500);
});

//help
$(".help-nav-wrap .hp-prev").click(function(event) {
    console.log(123);
    $(this).parent().children('.help-nav').children('ul').toggleClass('active');
});
$(".help-nav-wrap .hp-next").click(function(event) {
    $(this).parent().children('.help-nav').children('ul').toggleClass('active');
});

$( document ).ready(function() {
    function toggleOpen() {
        var faq = this.childNodes.item(3);
        $(faq).slideToggle();
         var faqIcon = this.childNodes.item(1);
         $(faqIcon).toggleClass('active');
    }
    $('.hpTitle').click(toggleOpen);
});

//promotion
var openBtm = false;
$( document ).ready(function() {
    function togglePromotion() {
        var promotion = this.parentNode.parentNode.childNodes.item(3);
        $(promotion).slideToggle();
        openBtm = !openBtm;
        if (openBtm) {
            this.querySelector('.btn-more i').innerHTML = '-';
        }else{
            this.querySelector('.btn-more i').innerHTML = '+';
        }
    }
    $('a.btn-more').click(togglePromotion);
});

//member
$('.moreBank').click(function () {
    $('.moreBank').addClass('hide');
    $('.bankList').removeClass('hide');
});


