
      

$(document).ready(function() {

        
    // jquery 효과
    // hide/show/toggle : jquery에서 미리 만들어 놓은 css효과
    //hide() : 지정한 html 태그를 숨김 (display : none 과 같음)
        // $(선택자),hide(속도, 콜백함수)
        // 속도는 총 동작 시간으로 계싼됨
        // 1/1000 초로 계산
    // show() : 숨겨진 html 태그를 보임
        // $(선택자).show(속도,콜백함수)
    // toggle() : hide()/show() 의 기능을 돌어가며 실행
        // $ 선택자.(속도,콜백함수)
        $("#btnHide").on("click", function(){
            // $("#div01p").hide(); //기본사용
            // $("#div01p").hide(300); //실행 속도 추가
            $("#div01p").hide(800); //콜백함수사용
                alert("hide()가 실행되었습니다.");
        });

        $("#btnShow").on("click", function(){
            // $("#btnShow").show();
            // $("#btnShow").show(500);
            $("#div01p").show(800);
                alert("hide()가 실행되었습니다.");
        });

        $("#btnToggle").on("click", function(){
            // $("#div01p").toggle();
            // $("#div01p").toggle(600);
            $("#div01p").toggle(800);
                alert("hide()가 실행되었습니다.");
        });


        // 슬라이드 효과
        // slideDown() : 지정한 html 요소를 아래로 슬라이드 함
            // $(선택자).slideDown(속도,콜백);
            // 속도는 slow fast 숫자
        // slideUp() : 지정한 html 요소를 위로 슬라이드함
        // slideToggle(): 지정한 html 요소를 아래로 위로 슬라이드 돌아가며 동작
        $("#div02flip1").on("click", function(){
            $("#div02panel1").slideDown(); //기본형식
            $("#div02panel1").slideDown("slow"); //시간입력 방식
            // 콜백함수 사용
            
            // $("#div02panel1").slideDown(500, function() {
            //     alert("slideDown()실행 후 동작");
            // });
        });

        $("#div02flip2").on("click", function(){
            $("#div02panel2").slideUp();
            // $("#div02panel2").slideup(500, function() {
            //     alert("slideUp()실행 후 동작");
            // });
        });

        
        $("#div02flip3").on("click", function(){
            $("#div02panel3").slideToggle();
        });
        // $("#div02panel3").slideToggle(500, function() {
            //     alert("slideToggle()실행 후 동작");
            // });
        //애니메이션 효과
        // animate() : 사용자 정의 애니메이션을 작성할 수 있음
        // $(선택자).animate({옵션}), 속도 콜백);
            // 옵션 : css속성을 입력
            // 속도 : 1/1000초로 계산
            // 콜백 : animate(가 실행된 이후 동작할 
            // 애니메이션을 연속 여러개 실행할 수 있음
                // animate()를 여러개 입력 시 입력된 순서에 따라 차레대로

            $("#div03btn1").on("click", function() {
                // $("#div03div").animate({left: "250px"}); //기본
                // $("#div03div").animate({left: "500px"}, 2000); 
                // $("#div03div").animate({
                //     left:"1000px", 
                //     height: "400px", 
                //     width: "400px",
                //     backgroundColor: jQuery.Color("#ff0000")
                //     });
                // 애니메이션 효과 연속으로주기 1
                    // $("#div03div").animate({left: "500px"});
                    // $("#div03div").animate({width: "400px"});
                    // $("#div03div").animate({height: "400px"});
                    // $("#div03div").animate({backgroundColor: jQuery.Color("blue")});
                // 애니메이션 효과 연속으로주기 2 
                    var div = $("#div03div");
                    // div.animate({left: "500px"});
                    // div.animate({width: "400px"});
                    // div.animate({height: "400px"});
                    // div.animate({backgroundColor: jQuery.Color("green")});
                // 효과연속으로주기 체이닝
                    div.animate({left: "500px"}).animate({width: "400px"}).animate({height: "400px"}).animate({backgroundColor: jQuery.Color("green")});

                    // jquery 애니메이션 효과멈추기
                    // stop() : 애니매이션이나 작동 멈출떄 쓰는거
                    // $(선택자).stop(stopAll,gotoEnd)
                    // stopAll : 기본값 flase, 연속된 효과가 있을 경우 모두 중지
                    // goToend : 기본값 flase, 해당 효과의 끝으로 이동 
             
                });
                $("#div04btn1").on("click", function(){
                    $("#div04panel").stop();
                });

                $("#div04flip").on("click", function(){
                    $("#div04div1").slideDown(5000);
                });
                $("#div04btn2").on("click", function(){
                    $("#div04div2").stop();
                });
                $("#div04btn3").on("click", function(){
                    $("#div04panel").stop();
                });

                $("#div04flip").on("click", function(){
                    $("#div04panel").slideDown(5000);

                });

                $("#div04div1").on("click", function(){
                    $("#div04div1").fadeOut(5000);
                });

                
                $("#div04div2").on("click", function(){
                    $("#div04div2").animate({left: "500px"},5000 );

                });

                $("#div04btn4"),on("click", function(){
                    $("#div04div3").stop(); // 기본형
                });
                
                $("#div04div3").on("click", function(){
                    $("#div04div3").animate({left: "500px"}, 5000);
                });

                //제이쿼리, 콜백함수
                // 제이쿼리 함수를 

                $("#div05btn1").on("click",function(){
                    $("#div05 > h3").hide("fast");
                    alert("콜백함수 미사용");
                });
                $("#div05btn2").on("click",function(){
                    $("#div05 > h3").hide("slow",function(){
                        alert("콜백함수 사용");    
                  
                    });
                    
                  });

                //   제이쿼리 체인
                //   제이쿼리 함수 사용 시 여러개의 함수를 한번에 연결해서 입력하는 방식
                //    $(선택자),함수1(),함수2(),...


        $("#div06btn").on("click", function () {
            $("#div06 > h3").css("color", "red").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);
        });

    });

                
                


    