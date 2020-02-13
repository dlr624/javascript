$(document).ready(function(){
// 제이쿼리를 이용하여 html 태그의 크기 설정 및 반환
// weight : html 태그의 컨텐츠 영역의 넓이
// height : html 태그의 컨텐츠 영여그이 높이
// innerWidth : html 태그의 padding 영역까지의 너비
// innerHeight : html 태그의 paddng 영역까지 높이
// outerWidth : html 태그의 border 영역까지의 너비
// outerHeight : html 태그의 border 영역 까지의 높이
// outerWidth(true) :
// outerhihgt(true) :
    $("#div01Btn1").on("click", function(){
        var text = "";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 높이 : " + $("#div01Div1").height() + "</P>;";
        $("#div01Div1").html(text); 
    });
////////////////////////////////////////3일차/////////////////////////////
    $("#div01Btn2").on("click", function(){

        $("#div01Div1").width("500px");
        $("#div01Div1").height("500px");
        $("#div01Div1").css("padding", "20px");
        $("#div01Div1").css("margin", "40px");
    });

    $("#div01Btn3").on("click", function(){
         var text = "";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 너비 : " + $("#div01Div1").height() + "</p>";
        text += "<p>padding 까지의 너비 : " + $("#div01Div1").innerWidth() + "</p>";
        text += "<p>padding 까지의 너비 : " + $("#div01Div1").innerHeight() + "</p>";
        $("#div01Div1").html(text);
    });
    
    $("#div01Btn4").on("click", function(){
        var text ="";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 너비 : " + $("#div01Div1").height() + "</p>";
        text += "<p>border 까지의 너비 : " + $("#div01Div1").outerWidth() + "</p>";
        text += "<p>border 까지의 너비 : " + $("#div01Div1").outerHeight() + "</p>";
        $("#div01Div1").html(text);
    });
    
    $("#div01Btn5").on("click", function(){

    });
    $("#div01Btn5").on("click", function(){
        var text ="";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 너비 : " + $("#div01Div1").height() + "</p>";
        text += "<p>margin 까지의 너비 : " + $("#div01Div1").outerWidth(true) + "</p>";
        text += "<p>margin 까지의 너비 : " + $("#div01Div1").outerHeight(true) + "</p>";
        $("#div01Div1").html(text);
    });
    
    $("#div01Btn5").on("click", function(){

    });

    // $("#div01Btn5").on("click", function(){
    //     output();
    // });

    //문1) 위의 예쩨를 바탕으로 div 내부에 출력할 p 태그를 생성하는 부분을 함수화 하여 동일한 프로그램을 제작하세요
});