document.getElementById("header").innerHTML += `
<link rel="stylesheet" href="css/footer.css">
<div class="header1">
<a href="index.html" class="logo">
    <h1>Picnic<span>Game</span></h1>
</a>
<nav class="navbar">
    <ul>
        <li><a href="index.html" id="Home">Home</a></li>
        <li><a href="#">Categories </a>
            <ul class="submenu">
                <li class="submenu-link"><a href="indoor.html">IndoorGame</a></li>
                <li class="submenu-link"><a href="outdoor.html">OutdoorGame</a></li>
            </ul>
        </li>
        <li><a href="about.html" id="about">About</a></li>
        <li><a href="contact.html" id="contact">Contact us</a></li>
    </ul>
</nav>
</div>`