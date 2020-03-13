$(document).ready(function(){
    // 문제 1) 버튼 클릭 시 화면에 현재 내 점수와 등급을 출력하는 프로그램을 작성하세요
    // 1. 버튼 클릭
    // 2. 데이터 가져오기
    // 3, 점수를 등급으로 변환
    // 4. 화면 출력
        $("#div01Btn1").on("click", function() {
            var score = $("#div01Input").val(); // input 태그의 value 속성값을 설정하거나 가지고 오는 함수 val()을 사용하여 데이터 가져오기
            score = Number(score);
            
            // return 을 사용한 방식
            // var level = checkScore(score);
            // printScore(score,level);
            
            // 매개변수로 함수 안에서 함수를 호출한 방식
            checkScore(score);
        });
  
        function checkScore(sc) {
            var lv = "";
            if (sc > 90) {
                lv = "A";

            }
            else if (sc >80) {
                lv = "B";
            }
            else if (sc >70) {
                lv = "C";
            }
            else if (sc >60) {
                lv = "D";
            }
            else { 
                lv = "F";
            }
            // return 을 사용한 방식
            // return level;
         
            // 다른 함수를 자동으로 실행하는 방식
            printScore(sc, lv);    
        }

        function printScore(sc, lv) {
            alert("당신의 점수는 " + sc + "점이고, 등급은 " + lv + "입니다.");
        }
        
    // 문제 2) 로그인 버튼을 클릭 시 입력된 ID와 PASSWORD를 비교하여 컴퓨터에 저장된 ID/PASSWORD가 맞으면 로그인 메시지 출력,
    // 틀릴 경우 오류 메시지를 출력하는 프로그램을 작성하세요
    
    
    
    // 4. 결과 출력

    // 1. 버튼 클릭 
    $("#div02BtnLogin").on("click", function() {
        // 2. 데이터 불러오기
        var userId = $("#div02UserId").val();
        var userPw = $("#div02UserPw").val();

        var result = loginCheck(userId, userPw);
        printLoginState(result);
    });

    // 3. 불러온 데이터와 저장된 데이터 비교
        // 저장된 데이터는 DB를 연결하여 데이터를 불러와야함
        // 현재 DB 연결이 되어 있지 않기 때문에 전역 변수를 사용함

    var userDB = {id : "testid", pw : "testpw"};

    function loginCheck(id, pw) {
        var result = false;
        
        if(id == userDB.id) {
            if(pw == userDB.pw) {
                result = true;
            }
        }
        
        return result;
    }

    function printLoginState(state) {
        if(state == true) {
            alert("로그인이 성공하였습니다.");
        }
        else {
            alert("ID 혹은 Password가 틀렸습니다.")
        }
    }

    // 2개의 수를 입력받아서 결과 출력하기

    $("#div03BtnCal").on("click",function() {
        var a = $("#div03InsNum1").val();
        var b = $("#div03InsNum2").val();

        var result = login(a,b);
        printLogin(result);
    });

    function printLogin()
        result = a + b;
        result = a - b;
        result = a * b;
        result = a / b;

        

});
