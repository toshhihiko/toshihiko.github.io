var Yaction = document.getElementById("yourAction");
var HP = document.getElementById("hp");
var MP = document.getElementById("mp");
var pict = document.getElementById("pic");
var myHP = 100;
var myMP = 100;
var eneHP = 50;
HP.innerHTML = "体力"+myHP;
MP.innerHTML = "魔力"+myMP;

function attack() {
    var spanedSec = 0;
    var id = setInterval(function () {
        spanedSec++;
        Yaction.innerHTML = "あなた：攻撃"+"30ダメージ";
        if(spanedSec >= 3){
            Yaction.innerHTML = "相手：攻撃"+"20ダメージ";
            if(spanedSec >= 5){
                myHP -= 20;
                HP.innerHTML = "体力"+myHP;
                eneHP -= 30
                if(eneHP <= 0){
                    pict.src = "pic/gameclear.png";
                    document.getElementById("button1").setAttribute('disabled', true)
                    document.getElementById("button2").setAttribute('disabled', true)
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }
                else if(myHP <= 0){
                    pict.src = "pic/gameover.png"
                    document.getElementById("button1").setAttribute('disabled', true)
                    document.getElementById("button2").setAttribute('disabled', true)
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }
                clearInterval(id);
                return Yaction.innerHTML = "あなたのターン";

            }
        }
    }, 1000);
}
function defence() {
    var spanedSec = 0;
    var id = setInterval(function () {
        spanedSec++;
        Yaction.innerHTML = "あなた：防御";
        if(spanedSec >= 3){
            Yaction.innerHTML = "相手：攻撃"+"5ダメージ";
        }
            if(spanedSec >= 5){
                myHP -= 5;
                HP.innerHTML = "体力"+myHP;
                if(myHP <= 0){
                    pict.src = "pic/gameover.png"
                    document.getElementById("button1").setAttribute('disabled', true)
                    document.getElementById("button2").setAttribute('disabled', true)
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }
                clearInterval(id);
                return Yaction.innerHTML = "あなたのターン";
            }
    }, 1000);
}
function heal() {
    var spanedSec = 0;
    var id = setInterval(function () {
        spanedSec++;
        Yaction.innerHTML = "あなた：回復30";
        if(spanedSec >= 3){
            Yaction.innerHTML = "相手：攻撃"+"20ダメージ";
        }
            if(spanedSec >= 5){
                myHP += 10;
                HP.innerHTML = "体力"+myHP;
                myMP -= 10;
                MP.innerHTML = "魔力"+myMP;
                if(myHP <= 0){
                    pict.src = "pic/gameover.png"
                    document.getElementById("button1").setAttribute('disabled', true)
                    document.getElementById("button2").setAttribute('disabled', true)
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }
                else if(myMP <= 0){
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }
                clearInterval(id);
                return Yaction.innerHTML = "あなたのターン";
            }
    }, 1000);
}
function magicAttack(){
    var spanedSec = 0;
    var id = setInterval(function () {
        spanedSec++;
        Yaction.innerHTML = "あなた：攻撃魔法50ダメージ";
        if(spanedSec >= 3){
            Yaction.innerHTML = "相手：攻撃"+"20ダメージ";
        }
            if(spanedSec >= 5){
                myHP -= 20;
                eneHP -= 50;
                HP.innerHTML = "体力"+myHP;
                myMP -= 30;
                MP.innerHTML = "魔力"+myMP;
                if(myHP <= 0){
                    pict.src = "pic/gameover.png"
                    document.getElementById("button1").setAttribute('disabled', true)
                    document.getElementById("button2").setAttribute('disabled', true)
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }
                else if(eneHP <= 0){
                    pict.src = "pic/gameclear.png";
                    document.getElementById("button1").setAttribute('disabled', true)
                    document.getElementById("button2").setAttribute('disabled', true)
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }
                else if(myMP <= 0){
                    document.getElementById("button3").setAttribute('disabled', true)
                    document.getElementById("button4").setAttribute('disabled', true)
                }


                clearInterval(id);
                return Yaction.innerHTML = "あなたのターン";
            }
    }, 1000);
}