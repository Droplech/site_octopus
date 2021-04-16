$(document).ready(function(){

    $('.change_theme').click(function(){
        $('body').toggleClass('light_theme')
    })

    $('.tab_links a').click(function(e){
        e.preventDefault()
        $('.tab_links a').removeClass('active-tab')
        $(this).addClass('active-tab')
        $('.tab_content').removeClass('content-tab-active')
        $( $(this).attr('data-tab') ).addClass('content-tab-active') 
    })



    $('.faq_links a').click(function(e){
        e.preventDefault()
        $('.faq_links a').removeClass('active-tab')
        $(this).addClass('active-tab')

        $('.faq_content').removeClass('faq_content-active')
        $( $(this).attr('data-tab') ).addClass('faq_content-active') 
    })



    $('.faq_item_title').click(function(){
        if( !$(this).hasClass('active')){
            $(this).addClass('active')
            $(this).next().slideDown()
        }else{
            $(this).removeClass('active')
            $(this).next().slideUp()
        }
        
    })

  

    
    // var block_show = false;
 
    // function scrollTracking(){
    //     if (block_show) {
    //         return false;
    //     }
    
    //     var wt = $(window).scrollTop();
    //     var wh = $(window).height();
    //     var et = $('.tokenimics').offset().top;
    //     var eh = $('.tokenimics').outerHeight();
    //     var dh = $(document).height();   
    
    //     if (wt + wh >= et || wh + wt == dh || eh + et < wh){
    //         block_show = true;
            
    //         $('.tokenimics').addClass('tokenimics-active')
          
    //     }
    // }
    
    // $(window).scroll(function(){
    //     scrollTracking();
    // });



    const animItems = document.querySelectorAll('.anim_items')

    if( animItems.length > 0 ){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(){
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if( animItemHeight> window.innerHeight ){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }


                if( (pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset +  animItemHeight)){
                    animItem.classList.add('_active')
                }else{
                    if( !animItem.classList.contains('_anim-no-hide') ){
                        animItem.classList.remove('_active')
                    }
                    
                }
            }
            
        }
        function offset(el){
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return{ top: rect.top + scrollTop, left: rect.left + screenLeft }

        }
        
        animOnScroll();
    }

    let rand = [1,2,3,4];
    let interval;

    function fun() { 
        interval = setInterval(function(){
        $('.block_circles .circle').removeClass('circle_active');
        let randNum = rand[Math.floor(Math.random() * rand.length)];
        
        $('.block_circles .circle').eq(randNum).addClass('circle_active');
    },3000)

    } 
    function stop() { 
    clearInterval(interval); 
    } 

    fun();


    
    $('.circle').hover(function(){
        $('.circle').removeClass('circle_active')
        $(this).addClass('circle_active')
        stop() 
        
    },function(){
        $(this).removeClass('circle_active')
        
    })
    
    $('.burger').click(function(){
        if( !$('.burger').hasClass('burger_active')){
            $('.burger').addClass('burger_active')
            $('.burger_wrapper').fadeIn()
        }else{
            $('.burger').removeClass('burger_active')
            $('.burger_wrapper').fadeOut()
        }
        
    })

    new Swiper('.table_block_content',{
        navigation: {
            nextEl: '#road-button-next',
            
        },
        scrollbar: { el: '#road-scrollbar' },
        
        slidesPerView: 2,
        slidesPerGroup: 2,
        breakpoints: {
            700:{
                slidesPerView: 3,
            },
            1000:{
                slidesPerView: 4,
            },
            1280:{
                slidesPerView: 5,
            },
            1440:{
                slidesPerView: 6,
            },
            1680:{
                slidesPerView: 8,
            }
           
        }

    })


    new Swiper('.in_the_news_content',{
        navigation: {
            nextEl: '#in_the_news-btn-next',
            
        },
        scrollbar: { el: '#in_the_news-scrollbar' },
        
        slidesPerView: 2,
        slidesPerGroup: 1,
        breakpoints: {
            1000:{
                slidesPerView: 2,
            },
            1280:{
                slidesPerView: 3,
            },
            1680:{
                slidesPerView: 4,
            }
           
        }



    })































})  

