document.addEventListener("DOMContentLoaded", function () {
  const urlButton = document.getElementById("urlButton");
  const changeButton = document.getElementById("changeButton");
  const colorButton = document.getElementById("colorButton");
  const changeText = document.getElementById("changeText");

  urlButton.addEventListener("click", function () {
    window.location.href = "https://github.com/waiorecchi/MACRO-krunker";
  });

  // テキスト変更ボタンの処理
  changeButton.addEventListener("click", function () {
    const messages = [
      "テキストが変更されました！",
      "JavaScriptで動的に変更できます",
      "ウェブページはインタラクティブです",
      "またテキストが変わりました",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    changeText.textContent = randomMessage;
  });

  // 色変更ボタンの処理
  colorButton.addEventListener("click", function () {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    changeText.style.backgroundColor = randomColor;
  });

  // ハンバーガーメニューの機能
  const hamburger = document.querySelector(".icon");
  const topnav = document.getElementById("myTopnav");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      if (topnav.className === "topnav") {
        topnav.className += " responsive";
      } else {
        topnav.className = "topnav";
      }
    });
  }

  // ウィンドウリサイズ時の処理
  window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      topnav.className = "topnav";
    }
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*form制御できればphp管理させたい*/

document.querySelector("form").addEventListener("submit", function (event) {
  const email = document.getElementById("email").Value;
  if (!email.includes("@")) {
    alert("メールアドレスが不正です");
    event.preventDefault();
  }
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    const response = await fetch("/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    alert("送信成功！");
  } catch (error) {
    alert("エラーが発生しました");
  }
});
