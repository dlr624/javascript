$(document).ready(function() {

// html DOM조작을 위한 jqyery 함수
// text(); 선택한 html 요소의 텍스트 내용을 설정하거나 반환함
    // 사용법
    // $(선택자).text(); : 텍스트 내용 가져오기
    // $(선택자).text("입력할 텍스트"); : 텍스트 내용 설정하기

// html(); 선택한  html 요소의 내용을 설정하거나 (html 코드 포함)
    // 사용법
    // $(선택자).html(); : 내용가져오기
    // $(선택자).html("입력할 내용"); :내용 설정하기

// val(); 선택한  html 속성값을 설정하거나 반환됨 (html 요소가 value속성을 가지고 있을 경우 value 속성값을 설정하거나 반환함)
 // 사용법
    // $(선택자).val(); : 내용가져오기
    // $(선택자).val("입력할 내용"); :내용 설정하기
// attr(): 선택한 html 요소의 속성을 설정하거나 반환함
    // 사용법
    // $(선택자).attr(속성명); 
    // $(선택자).attr(속성명, 입력할값); : 속성값 설정하기


$("#div01Btn1").on("click", function() {
    alert("text: " + $("#div01Test").text ());
});

$("#div01Btn2").on("click", function() {
    alert("html: " + $("#div01Test").html ());
});

$("#div01Btn3").on("click", function() {
    alert("value: " + $("#div01Input").val ());
});

$("#div01Btn4").on("click", function() {
    alert("href : " + $("#div01Link").attr("href"));
});

// //////////////////////////////////////////

$("#div02Btn1").on("click", function() {
    $("#div02Test1").text("text()를 실행하여 변경된 테스트");
});

$("#div02Btn2").on("click", function() {
    $("#div02Test2").html("html()를 <b>실행하여 변경된</b> 테스트");
});

$("#div02Btn3").on("click", function() {
    $("#div02Test3").val("제이쿼리 3.4.1버전 사용");
});

$("#div02Btn4").on("click", function() {
    $("#div02Link").attr("href", "https://google.co.kr");
});
///////////////////////////////////////////////////////////////

$("#div10Btn").on("click", function() {
    // alert("html " + $("#div10Test").text ("구글"));
    $("#div10Link").attr("href", "https://google.co.kr");
    $("#div10Link").text("구글");
});

$("#div11Btn").on("click", function() {
    // alert("html: " + $("#div11Test").text ("네이버"));
    $("#div11Link").attr("href", "https://naver.com");
    $("#div11Link").text("네아버")
});

$("#div12Btn").on("click", function() {
    // alert("html: " + $("#div12Test").text ("나이키"));
    $("#div12Link").attr("href", "https://www.nike.com/");
    $("#div12Link").text("나이키")
});

// $("#div10Btn").on("click", function() {
//     $("#div10Link").attr("href", "https://google.co.kr");
// });

// $("#div11Btn").on("click", function() {
//     $("#div11Link").attr("href", "https://naver.com");
// });
// $("#div12Btn").on("click", function() {
//     $("#div12Link").attr("href", "https://www.nike.com/");
// });



$("#B1").on("click", function() {
    // alert("html: " + $("#div12Test").text ("나이키"));
    var linkaddr = "http://"
    linkaddr = linkaddr + $("#B1").val();
    var linkaddr = $("#T1").val();
    var linkaddr = $("#T1").val();

    $("L1").attr("href", linkaddr);
    $("L1").text(linkText)
});


});