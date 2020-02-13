$(document).ready(function (){
    // 제이쿼리 이용하여 새로운 html태그 추가
    // append(): 선택한 html 요소의 가장 끝에 추가
    // prepend(): 선택한 html 요소의 가장 앞에 추가
    // after(): 선택한 html 요소의 뒤에 ''
    // before: 선택한 html 요소의 바로 앞에 ''
    // 사용방법
    // $(선택자). append(추가할 내용) : 추가 내용은 html 코드 사용가능

    var prependTextCount = 0;
    var prependListCount = 0;
    var appendTextCount = 0;
    var appendListCount = 0;

    $("#div01Btn01").on("click", function(){
        var text = "<b>prepend " + prependTextCount + " </b> ";
        $("#div01p1").prepend(text);
        prependTextCount++;
    });

    $("#div01Btn02").on("click", function(){
        var text = "<b>before</b>" +  appendTextCount + " </b>";
        $("#div01p1").append(text);
        appendTextCount++;
    
    });
    
    $("#div01Btn03").on("click", function(){
        
        var text = "<li>prepend item" + prependListCount + "</li>";
        $("#div01oli").prepend(text);
        prependListCount++;
    
    });

    $("#div01Btn04").on("click", function(){
        var text = "<li>append item"+ appendListCount + "</li>";
        appendListCount++;

        $("#div01oli").append(text);
    
    });
    
    var befroeTextCount = 0;
    var afterTextCount = 0;

    $("#div05Btn5").on("click", function(){
        var text = "<b> before " + beforeTextCount + "</b>";
        $("#div01img").before(text); 
        befroeTextCount++;
       });


       $("#div05Btn6").on("click", function(){
        var text = "<b> before " + afterTextCount + "</b>";
        $("#div01img").after(text); 
        afterTextCount++;
       });

    //    제이쿼리를 이요하여 html 요소 삭제하기
    // remove() : 선택한 요소 및 하위요소를 모두 제거
    //    empty(): 선택한 요소 하위요소를 제거 걍 지만 살아남는다는거

    $("div02Btn1").on("click", function (){
        $(#div02div1).remove();
    });
});