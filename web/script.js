document.addEventListener('DOMContentLoaded', function() {
    const urlButton = document.getElementById("urlButton");
    const changeButton = document.getElementById('changeButton');
    const colorButton = document.getElementById('colorButton');
    const changeText = document.getElementById('changeText');

    urlButton.addEventListener("click",function() {
        window.location.href = 'https://github.com/waiorecchi/MACRO-krunker';
    })
    
    // テキスト変更ボタンの処理
    changeButton.addEventListener('click', function() {
        const messages = [
            "テキストが変更されました！",
            "JavaScriptで動的に変更できます",
            "ウェブページはインタラクティブです",
            "またテキストが変わりました"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        changeText.textContent = randomMessage;
    });
    
    // 色変更ボタンの処理
    colorButton.addEventListener('click', function() {
        const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        changeText.style.backgroundColor = randomColor;
    });
});

function myFunction(){
    var x =document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className ="topnav";
    }
}