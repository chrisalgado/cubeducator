$(document).ready(main);

var contador = 1;

function main(){
    $('.bt-menu').click(function(){
        
        if(contador == 1){
            $('.MainMenu').animate({
               left: '0' 
            });
            contador = 0;
        } else {
            contador =1
            $('.MainMenu').animate({
               left: '-100%' 
            });
        } 
    });
    
    $('.close').click(function(){
       
        if(contador == 0){
           $('.MainMenu').animate({
               left: '-100%' 
            });
            contador = 1;
        }
        
    });
};