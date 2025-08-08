<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Обратный отсчёт до 13 августа 2025</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: #f0f0f0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        #content {
            flex: 1;
        }
        #countdown {
            font-size: 2em;
            margin: 20px 0;
            color: #333;
        }
        #message {
            font-size: 1.5em;
            color: #e74c3c;
            display: none;
        }
        #password-section {
            margin-top: auto;
            padding: 0px 0;
        }
        #password-input {
            padding: 10px;
            font-size: 16px;
            width: 200px;
            margin-right: 10px;
        }
        #password-message {
            margin-top: 10px;
            font-size: 1.2em;
            color: #27ae60;
            display: none;
        }
        button {
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="content">
        <h1>Вам осталось</h1>
        <div id="countdown"></div>
        <div id="message">https://www.roblox.com/share?code=338532c351ddc343949f6468d4a715c6&type=ExperienceDetails&stamp=1754661650928</div>
    </div>

    <!-- Поле ввода пароля внизу страницы -->
    <div id="password-section">
        <input type="text" id="password-input" placeholder="Введите пароль..." onkeypress="handleKeyPress(event)">
        <button onclick="checkPassword()">Проверить</button>
        <div id="password-message">Пароль 1337...</div>
    </div>

    <script>
        const countdownDate = new Date("August 13, 2025 00:00:00").getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            if (distance <= 0) {
                document.getElementById("countdown").style.display = "none";
                document.getElementById("message").style.display = "block";
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById("countdown").innerHTML = 
                `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
        }

        function checkPassword() {
            const password = document.getElementById("password-input").value.toLowerCase();
            const message = document.getElementById("password-message");
            
            if (password === "capybara") {
                message.style.display = "block";
            } else {
                alert("Неверно");
            }
        }

        function handleKeyPress(event) {
            if (event.key === "Enter") {
                checkPassword();
            }
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
    </script>
</body>
</html>
