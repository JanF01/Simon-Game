$(document).ready(function(){
 
  var i = 0;
  var interv;
  var other_f = true;
  var comb = [];
  var your = [];
  var points = 0;
  var clicks = 0;
  var cheak = false;
  var no_flag = false;
  var strict_flag = true;
  var speed = 900;
  var audio;
  
  function yellow(){
    $(".yellow").css("background-color","#FBB107");
     audio = new Audio("http://soundfx.pl/uploads/pobierz.php?id=219&p=przelacznik_2_www.soundfx.pl.mp3");
        audio.currentTime=0;
        audio.play();
  }
  function blue(){
      $(".blue").css("background-color","#1578FF");
       audio = new Audio("http://soundfx.pl/uploads/pobierz.php?id=162&p=okno_otwieranie_www.soundfx.pl.mp3");
        audio.currentTime=0;
        audio.play();
  }
  function green(){
     $(".green").css("background-color","#008F06"); 
    audio = new Audio("http://soundfx.pl/uploads/pobierz.php?id=134&p=gniazdko_wkladanie_wtyczki_www.soundfx.pl.mp3");
        audio.currentTime=0;
        audio.play();
  }
  function red(){
      $(".red").css("background-color","#AC0E0E"); 
     audio = new Audio("http://soundfx.pl/uploads/pobierz.php?id=229&p=sound_design_3_www.soundfx.pl.mp3");
        audio.currentTime=0;
        audio.play();
  }
  function change(a){
    
    switch(a){
            case 0:  yellow();  break;
            case 1:  blue();  break;
            case 2:  green();  break;
            case 3:  red();  break;
               }
     
  }
  function colorsdown(){
         $(".yellow").css("background-color","#FBFF17");
         $(".blue").css("background-color","#15F8FF");
         $(".green").css("background-color","#00FF66");
         $(".red").css("background-color","#EC1E1E");
    
  }
   
  function thr(){
    audio = new Audio("http://soundfx.pl/uploads/pobierz.php?id=227&p=sound_design_1_www.soundfx.pl.mp3");
    audio.play();
    $("h3").css("display","none");
    $(".points").css("font-size","2em");
     $(".points").html("Twój wynik to: "+points+(points==1?" punkt":(points<=4&&points!=0?" punkty": " punktów")));
    points=0;
        clicks=0;
        comb=[];
        your=[];
        $(".start").css("display","flex");
        $(".end").css("display","none");
  }
  function tagain(){
    audio = new Audio("http://soundfx.pl/uploads/pobierz.php?id=227&p=sound_design_1_www.soundfx.pl.mp3");
    audio.play();
    $("h3").css("display","none");
     $(".points").html("Wrong. Try again");
        $(".start").css("display","flex");
        $(".end").css("display","none");
          no_flag=true;
  }
  
  $(".yellow").on("click",function(){
    if(cheak==true && other_f==false && points>0){
      your.push(0);
      clicks++;
      yellow();
      setTimeout(colorsdown,700);
      if(comb[clicks-1] == your[clicks-1]){
        if(clicks==comb.length){
          points++;
          start();
        }
      }
      else{
        if(strict_flag==true){
         thr();     
        }
        else{
         tagain();
        }
      }
    }
  });
   $(".blue").on("click",function(){    
    if(cheak==true && other_f==false && points>0) {
      your.push(1);
      clicks++;
      blue();
      setTimeout(colorsdown,700);
      if(comb[clicks-1] == your[clicks-1]){
         if(clicks==comb.length){
           points++;
          start();
        }
      }
      else{
        if(strict_flag==true){     
       thr();     
      }
      
          else{
          tagain();
        }
        
      }
     
    }
  });
   $(".green").on("click",function(){
   if(cheak==true && other_f==false && points>0) {
     your.push(2);
     clicks++;
     green();
     setTimeout(colorsdown,700);    
     if(comb[clicks-1] == your[clicks-1]){
        if(clicks==comb.length){
          points++;
          start();
        }
      }
      else{
        if(strict_flag==true){
       thr();     
        }
        else{
          tagain();
        }
      }
   }
  });
  $(".red").on("click",function(){
   if(cheak==true && other_f==false && points>0){ 
     your.push(3);
     clicks++;
     red();
     setTimeout(colorsdown,700);
     if(comb[clicks-1] == your[clicks-1]){
        if(clicks==comb.length){
          points++;
          start();
        }
      }
      else{
        if(strict_flag==true){
       thr();     
        }
        else{
          tagain();
        }
      }
   }
  });
  
  function win(){
    
    $(".points").html("You Won");
    $("h3").css("display","none");
    audio = new Audio("http://soundfx.pl/uploads/pobierz.php?id=240&p=sound_design_14_www.soundfx.pl.mp3");
    audio.currentTime=0;
    audio.play();
  }
  
 
  function start(){
    
    other_f=true;
    $("h3").css("display","block");
    $(".points").css("font-size","2.5em");
    $(".points").html("--");
     setTimeout(function()
   {$(".points").html(points);},100);
    setTimeout(function(){
    var timeout;
    i=0;
    if(your.length>=20){
      win();
        }
      
    else if(comb.length>=0){
      
       interv = setInterval(function(){
        
         colorsdown();
         
         if(i<comb.length){
          change(comb[i]);
         }
    
        
         
      else{
        clearInterval(interv);
        if(!no_flag){
         var random = Math.floor(Math.random()*4);           
        comb.push(random);
      change(random);
        timeout = setTimeout(colorsdown,800);
        clearTimeout(timeout);
          if(points==0) points++;
        }
        no_flag=false;
        cheak=true;
        clicks=0;
        your=[];
        other_f=false;
      }
       
         
         
        timeout = setTimeout(colorsdown,speed-100);
         i++;
         
        },speed);
    
      
            
          
        }
      

    },speed);
    
  }
  
  
  
  $(".start").on("click",function(){
    
    $(this).css("display","none");
    $(".end").css("display","flex");
    $(".points").html(clicks);
    
    start();
    
  });
  $(".end").on("click",function(){
    
     $(".start").css("display","flex");
        $(this).css("display","none");
        
       thr();
  });
  $(".first").on("click",function(){
    if(strict_flag==true){
    $("#pf").css("animation","norm 0.6s 1");
    $("#pf").css("margin-left","65px");
    $("#pf").html("N");
      strict_flag=false;
    }
    else{
    $("#pf").css("animation","strict 0.6s 1");
    $("#pf").css("margin-left","0px");
    $("#pf").html("S");
      strict_flag=true;
    }
  });
  var updown = 1;
 
   $(".second").on("click",function(){
     
     
    if(updown==1){   
    if(speed==900){
      
    $("#pd").css("animation","oneup 0.4s 1");
    $("#pd").css("margin-left","32.5px");
    $("#pd").html("2");
      speed = 700;
    }
    else if(speed==700){
    $("#pd").css("animation","twoup 0.4s 1");
    $("#pd").css("margin-left","65px");
    $("#pd").html("3");
      speed = 500;
    }
    else if(speed==500){
       $("#pd").css("animation","threedown 0.4s 1");
    $("#pd").css("margin-left","32.5px");
    $("#pd").html("2");
      speed=700;
      updown=0;
    }
    }
    else{
       if(speed==900){
      updown=1;
     $("#pd").css("animation","oneup 0.4s 1");
    $("#pd").css("margin-left","32.5px");
    $("#pd").html("2");
         speed=700;
    }
    else if(speed=700){
    $("#pd").css("animation","twodown 0.4s 1");
    $("#pd").css("margin-left","0px");
    $("#pd").html("1");
      speed = 900;
    }
    
    }
   
     
     
     
     
     
   });
  
  
  
  
 
  
  
  
});
  
  
  
  
  
