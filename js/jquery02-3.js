$(document).ready(function(){
    // html 요소의 class 속성 추가하기
    // addClass() : 선택한 html 요소에 하나 이상의 class 를 추가함
    // 존재하지 않는 클래스를 추가하지만 css영역에추가할 class에대한 css속성을 미리 설정해놔야함
        // 사용법 
        // $(선택자).addClass(추가할 class명1 class명2 .....);
    // removeClass() : 선택한 html 요소에서하나 이상의 class를 제거함
        // 사용법
        // $(선택자).removeClass("삭제할Class명") :동시에ㅜ여러개 삭제가능
    // toggleClass() : 선택한 html 요소에서 클래스를 추가/제거를 전환함
    // css() : 선택한 html 요소의 css속성을 설정하거나 (반환)제거 함
    // 동시에 여러개의 css 속성을 설정하고자 할 경우 {속성명 : 속성값, 속섬여2: 속성값}을 사용하여 여러가지 속성을 동시에 사용할 수 이씅ㅁ

    $("#div01Btn1").on("click", function(){
        $("h1, h2, p").addClass("blue");
        $("#div01 > div").addClass("important");
    });

    $("#div01Btn2").on("click", function() {
        $("div01id1").addClass("important blue");
    });

    $("#div01Btn3").on("click", function() {
        $("#div01id1").toggleClass("blue");
   
    });

    $("#div02Btn1").on("click", function(){
        $("h1, h2, p").removeClass("blue");
    });

    $("#div03Btn1").on("click", function() {
        $("#div03 > p").css("background-color", "yellow");
    });

    $("#div03Btn2").on("click", function(){
        $("#div03 > p").css(
            {"background-color" : "yellow",
        "font-size" : "32px" ,
        "border" : "1px solid black"});
    });
});




