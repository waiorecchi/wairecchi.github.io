<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  
  // データベースに保存したり、メール送信したり
  echo "名前: $name, メール: $email を受け取りました";
}
?>