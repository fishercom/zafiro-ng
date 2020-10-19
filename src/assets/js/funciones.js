$( document ).ready(function() {

  menu_activo();
  scroller();
  precarga_home();
  menu_mobile();
  layer();
  carousel();
  slider();

  itemsEmpresa();
  //carousel();
  /*carouselManual();*/

  if($(".wrapper_home").length > 0){
    fancys();

  }


});


$( window ).resize(function() {

});

function menu_activo(){

  if($('.pagina_organizacion').length > 0){
    $("li.menu_organizacion").addClass("activo");
  }
  if($('.pagina_cultura').length > 0){
    $("li.menu_cultura").addClass("activo");
  }
  if($('.pagina_actualidad').length > 0){
    $("li.menu_actualidad").addClass("activo");
  }
  if($('.pagina_directivos').length > 0){
    $("li.menu_directivos").addClass("activo");
  }
  if($('.pagina_informacion').length > 0){
    $("li.menu_informacion").addClass("activo");
  }
  if($('.pagina_encuentrenos').length > 0){
    $("li.menu_encuentrenos").addClass("activo");
  }
}




function precarga_home(){
  var imageload = {
    1 : 'images/banner-home.jpg'
  };
  var loader = new PxLoader();
  for( pos in imageload ){
    var pxImage = new PxLoaderImage( imageload[pos] );
    loader.add(pxImage);
  }
  loader.addProgressListener(function(e){
    var percentage = Math.ceil( ( e.completedCount / e.totalCount ) * 100 );
  });
  loader.addCompletionListener(function(){
    $('#loader').fadeOut("slow");
    var timer=false
    timer = setTimeout(function(){


    }, 10)
  });
  loader.start();
}

function menu_mobile(){
  var timer = false;  
  timer = setTimeout(function(){    

    $(".menu_mobile .sanguche").on({
      click: function(e){  
        $(".wrapper").addClass("wrap_mobile");
        $("body").addClass("nonescroll");
        $("header").addClass("mobile");    
        $(".menu_mobile .sanguche").hide();
        $(".menu_mobile .mobile_tools").fadeIn();
      }
    })    

    $(".menu_mobile .mobile_tools .btn_close").on({
      click: function(e){        
        $(".wrapper").removeClass("wrap_mobile");
        $("body").removeClass("nonescroll");       
        $("header").removeClass("mobile");
        $(".menu_mobile .sanguche").fadeIn();
        $(".menu_mobile .mobile_tools").hide(); 
      }
    })  

    $("ul.lista_menu li").click(function(){
      $(".wrapper").removeClass("wrap_mobile");
      $("body").removeClass("nonescroll");       
      $("header").removeClass("mobile");
      $(".menu_mobile .sanguche").fadeIn();
      $(".menu_mobile .mobile_tools").hide(); 
    })

  }, 200);

}


function scroller(){
  var containers = $('html, body');

  if ($(window).width() < 1151) {
    var valDesktop = 78
  }else{
    var valDesktop = 190
  }

  console.log(valDesktop);

  $('a.scroller').click(function(e) {
    var el = $($(this).attr('href'));
    e.preventDefault();
    containers.animate({
      scrollTop: el.offset().top-valDesktop

      
    }, 700);
  });

  
}


function slider(){
  $('.home_slider').bxSlider({
    mode: 'horizontal',
    pager: false,
    speed: 300,
    auto: ($('.home_slider').children().length < 2) ? false : true,
    pause: 5000,
    controls: true,
    touchEnabled: false,
    responsive: true,    
  });
}


function carousel(){




  var owl = $('.lista_carrousel_interna');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    pager: false,
    autoplay: ($('.lista_carrousel_interna').children().length < 4) ? false : true,
    autoplayTimeout: 5000,
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })


}








function fancys(){

  $(".fancybox_video").click(function() {
    $.fancybox({
      'padding'   : 0,
      'autoScale'   : false,
      'transitionIn'  : 'none',
      'transitionOut' : 'none',
      'title'     : this.title,
      'width'     : 640,
      'height'    : 385,
      'href'      : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type'      : 'swf',
      'swf'     : {
        'wmode'       : 'transparent',
        'allowfullscreen' : 'true'
      }
    });

    return false;
  });

}


function layer(){


  $(".layer .caja .btn_close, .sombra_layer").click(function(){
    $(".layer").fadeOut();
    $("body").removeClass("nonescroll");
    //$("video").empty();
    $(".contenedor_video").empty();
  });

  

  $(".video.openLayer").click(function(){
    var ruta = $(this).attr("ruta");   
    //$("video source").attr('src',ruta);
    //$("video").append( " <source src='" + ruta +"' type='video/mp4' />")
    $(".contenedor_video").append( " <iframe src='" + ruta + "' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>")
    var timer=false
    timer = setTimeout(function(){
      $(".layer").fadeIn();

    }, 1000)
  });

  $(".openLayer").click(function(){

  });



}

function itemsEmpresa(){

  $(".item").click(function(){

    var item = $(this).attr("num");
    var itemNum = item.replace("item_","");
    var capaItem = ".capa_"+itemNum;
    var capa = $(capaItem);   

      

    $(".contenedor_empresas").hide();

    capa.fadeIn();

    var timer=false
    timer = setTimeout(function(){
      if(itemNum == 1){
        sliderItem();
      } 

    }, 100)

  })

  $(".capa .close").click(function(){
    $(".capa").hide();

    $(".contenedor_empresas").fadeIn();
    $('.slider_item').bxSlider().destroySlider();
  })

 
  

  function sliderItem(){
    $('.slider_item').bxSlider({
      mode: 'horizontal',
      pager: false,
      speed: 300,
      pause: 5000,
      controls: true,
      touchEnabled: false,
      responsive: true,    
    });
  }

}








