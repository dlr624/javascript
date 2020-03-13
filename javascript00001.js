// 현재까지 자바스크립트는 객체 지향 언어가 아님
// 자바에서 진행한 tellevision 을 2개 생성 하려면 2 세트의 변수와 메서드가 필요함

var tv1Power = false;
var tv1Volume = 0;
var tv1Channel = 0;


var tv2Power = false;
var tv2Volume = 0;
var tv2Channel = 0;

var tv1 = [false, 0, 0];
var tv2 = [false, 0, 0];

var otv1 = {power: false, volume: 0, channel:0};
var otv2 = {power: false, volume: 0, channel:0};

var arrobjTv = [otv1, otv2];

function tv1PowerOn() {
    console.log("전원이 키짓다.");
}

function tv2PowerOn() {
    console.log("전원이 키짓다.");
}

function tv1PowerOff() {
    console.log("전원이 끄짓다.");
}

function tv2PowerOff() {
    console.log("전원이 꺼짓다.");
}

function tv1ChannelUp() {
    console.log("전원이 키짓다.");
}

function tv2ChannelUp() {
    console.log("전원이 키짓다.");
}

function tv1ChannelDown() {
    console.log("전원이 꺼짓다.");
}

function tv2ChannelDown() {
    console.log("전원이 꺼짓다.");
}
