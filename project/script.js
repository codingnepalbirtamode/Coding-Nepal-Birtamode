let folders = document.getElementById('folderss');
let html = document.getElementById('html');
let csss = document.getElementById('fcss');
let js = document.getElementById('js');
let codes = document.querySelector('.codes');
let copybtn = document.getElementById('copying');
let usedlanguages = document.getElementById('use-languages');
let tick ="`";
let objcodes = [{},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Guessing Number Game</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <div class="card">
                <div class="top">
                    <h3>Hey! Please Enter Your Lucky Number</h3>
                    <div class="inputs">
                        <input type="number" id="playernumber">
                        <button id="submit">Submit</button>
                    </div>
                </div>
                <div class="middle">
                    Hey! Welcome to CNB Gaming
                    Guess the Number Between 1-100
                </div>
                <div class="bottom">
                    <div class="tries">
                        0
                    </div>
                </div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    </html>`,
    csscodes:`*{
        margin:0;
        padding: 0;
    }
    body{
        background-color:#ffff;
        overflow: hidden;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .card{
        height:500px;
        width:500px;
        background-color:#ffff;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius:12px;
        overflow: hidden;
    }
    .card .top{
        background-color:#3A3845;
        height:150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .card .top h3{
        padding-top:4%;
        color:white;
        font-family:Dejavu sans mono;
        font-size:0.9rem;
    }
    .card .top .inputs{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:2%;
    }
    .card .top .inputs input{
        height:40px;
        width:80px;
        border-radius:5px;
        outline:none;
        border:none;
        text-align: center;
        font-size:2rem;
        font-family:poppins;
    }
    .card .top .inputs input::-webkit-inner-spin-button,
    .card .top .inputs input::-webkit-outer-spin-button{
        -webkit-appearance:none;
    }
    .card .top .inputs button{
        height:40px;
        width:80px;
        margin-left:5%;
        border-radius:3%;
        border:none;
        outline:none;
        background-color:#F7CCAC;
        color:#3A3845;
        font-family:poppins;
        cursor: pointer;
    }
    .card .middle{
        background-color:#F7CCAC;
        height:250px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#3A3845;
        font-family:Gilroy;
        font-size:1.5rem;
        text-align: center;
        font-weight:600;
    }
    .card .bottom{
        background-color:#3A3845;
        height:100px;
        display:flex;
        justify-content: center;
    }
    .card .bottom .tries{
        position:absolute;
        height:100px;
        width:100px;
        border-radius:50%;
        border:10px solid #ffff;
        margin-top:2%;
        background-color:#3A3845;
        text-align: center;
        color:white;
        display: flex;
        font-family:poppins;
        align-items: center;
        justify-content: center;
        font-size:3rem;
        cursor: pointer;
    }`,
    jscodes:`let playernumber = document.getElementById('playernumber');
    let btn = document.getElementById('submit');
    let remarks = document.querySelector('.middle');
    let tries = document.querySelector('.tries');
    function randomnum() {
        random = Math.floor(Math.random() * 100);
        return random;
    }
    let y = 0;
    let guessnumber = randomnum();
    btn.addEventListener('click', () => {
        if (playernumber.value < 0 || playernumber.value > 100) {
            remarks.textContent = "Enter the Correct Number";
        }
        if (playernumber.value != "") {
            if (playernumber.value != guessnumber) {
                y++;
            }
        } else {
            remarks.textContent = "Please Enter the Number";
        }
        if (playernumber.value < guessnumber && playernumber.value!="") {
            remarks.textContent = "Your Number is Smaller";
            tries.textContent = y;
        }
        else if (playernumber.value > guessnumber) {
            remarks.textContent = "Your Number is Greater";
            tries.textContent = y;
        } else if (playernumber.value == guessnumber) {
            remarks.textContent = \`Congrats You Won! You tried \\$\\{y} times\`;
            tries.textContent = y;
        }
    })`
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Generator</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/04158e9780.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="card">
                <div class="password">
                    ******
                </div>
                <div class="incredecre">
                    <div class="minus">-</div>
                    <div class="num">8</div>
                    <div class="plus">+</div>
                </div>
                <div class="text">
                    Generate Strong Password!
                </div>
                <div class="button">
                    <button id="gen">Generate</button>
                </div>
                <div class="icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div class="footer">
                    Genuine Coded By Coding Nepal Birtamode
                </div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:#EAF6F6;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .container .card{
        height:500px;
        width:800px;
        background-color:#282c34;
        border-radius:12px;
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .container .card .password{
        height:50px;
        width:500px;
        margin-top:5%;
        border-radius:75px;
        color:#FF0063;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family:gilroy;
        font-weight:600;
        font-size:2rem;
        letter-spacing:4px;
        box-shadow: rgba(38, 38, 43, 0.3) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px inset;
    }
    .container .card  .incredecre{
        display: flex;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px inset;
        height:50px;
        width:100px;
        margin-top:2%;
        color:#FF0063;
        font-family:poppins;
        font-size:1.5rem;
        justify-content: space-between;
        padding-left:2%;
        padding-right:2%;
        cursor: pointer;
    }
    .container .card .text{
        font-family: 'Source Code Pro', monospace;
        color:white;
        font-size:1.5rem;
        margin-top:5%;
    }
    .container .card .button button{
        height:50px;
        width:150px;
        border-radius:2px;
        background-color:#FF0063;
        font-family:Poppins;
        letter-spacing:2px;
        color:white;
        border:none;
        cursor: pointer;
    }
    .container .card .button{
        margin-top:5%;
    }
    .container .card .icons{
        margin-top:5%;
        width:100%;
        display: flex;
        justify-content: center;
    }
    .container .card .icons i{
        font-size:1.5rem;
        border:2px solid #FF0063;
        color:#FF0063;
        height:40px;
        width:40px;
        border-radius:50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:2%;
        cursor: pointer;
    }
    .container .card .icons i:hover{
        background-color:#FF0063;
        color:white;
        transition-duration:0.3s;
    }
    .container .card .footer{
        font-family:poppins;
        font-weight:lighter;
        color:white;
        font-size:0.9rem;
        margin-top:3%;
    }`,
    jscodes:`let uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let lowercase ="abcdefghijklmnopqrstuvwxyz".split('');
    let numbers ="123456789".split('');
    let sign ="!@#$%^&*()-_+={}[]<>,./?".split('');
    let password = uppercase.concat(lowercase,sign,numbers);
    let genpassword="";
    // password length
    let increase = document.querySelector('.plus');
    let decrease = document.querySelector('.minus');
    let number = document.querySelector('.num');
    let n=8;
    increase.addEventListener('click',()=>{
        n<20?n++:n=8;
        number.textContent=n;
    })
    decrease.addEventListener('click',()=>{
        n>8?n--:n=20;
        number.textContent=n;
    })
    // main
    function auto(){
    for(let i=1;i<=n;i++){
        genpassword = genpassword + password[randomch()];
    }
    function randomch(){
        let random = Math.floor(Math.random()*password.length);
        return random;
    }
    }
    // password
    let pword = document.querySelector('.password');
    let button = document.getElementById('gen');
    button.addEventListener('click',()=>{
        auto();
    pword.textContent = genpassword;
    genpassword="";
    })`
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/04158e9780.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container">
            <div class="card">
                <div class="cover"></div>
                <div class="image">
                    <div class="outer">
                        <div class="inner">
                            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="name">
                    John Doe
                </div>
                <div class="stat">
                    <span>1.4M Followers </span> <span>11 Following</span>
                    <i class="fa-solid fa-square-check"></i>
                </div>
                <div class="buttons">
                    <button><i class="fa-solid fa-envelope"></i>Message</button>
                    <button><i class="fa-regular fa-square-plus"></i>Follow</button>
                </div>
                <div class="about">
                    <ul type="none">
                        <li><i class="fa-solid fa-briefcase"></i> CEO at Code Academy</li>
                        <li><i class="fa-solid fa-graduation-cap"></i> Engeneering in Computer Science and Psychology</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:#F8F9F9;
    }
    .container{
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container .card{
        width:400px;
        height:520px;
        background-color:white;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius:12px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
    }
    .container .card .cover{
        height:200px;
        background-image:url(https://wallpaperaccess.com/full/84248.png);
        background-size:cover;
        background-position:center;
    }
    .container .card .outer .inner{
        height:120px;
        width:120px;
        border-radius:50%;
        overflow: hidden;
    }
    .container .card .outer{
        background-color:white;
        border:2px solid white;
        border-radius:50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height:130px;
        width:130px;
    }
    .container .card .outer .inner img{
        width:100%;
    }
    .container .card .image{
        display: flex;
        position:absolute;
        justify-content: center;
        margin-top:-60px;
        width:100%;
    }
    .container .card .name{
        margin-top:20%;
        text-align: center;
        font-family:Gilroy;
        font-weight:600;
        font-size:1.3rem;
    }
    .container .card .stat{
        font-family:Poppins;
        color:rgb(0, 0, 0,0.4);
        text-align:center;
    }
    .container .card .stat i{
        color:rgb(16, 182, 238);
        font-size:1.2rem;
    }
    .container .buttons{
        display: flex;
        justify-content:space-between;
        padding-left:20%;
        margin-top:5%;
        padding-right:20%;
    }
    .container .buttons button{
        height:40px;
        width:100px;
        border:none;
        border-radius:5px;
        font-family:poppins;
        display: flex;
        align-items:center;
        justify-content: center;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
    .container .buttons button:first-child{
        background-color:rgb(0, 145, 255);
        color:white;
    }
    .container .buttons button i{
        font-size:1.2rem;
        margin-right:5%;
    }
    .container .about{
        padding-left:5%;
        margin-top:5%;
        font-family:poppins;
        font-size:0.9rem;
        color:rgb(0, 0, 0,0.5);
    }
    .container .about i{
        font-size:1.3rem;
        margin-right:2%;
    }`
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <div class="card">
                <div class="title">
                    <h1>St.Xavier's Deonia</h1>
                    <p>Birtamode 8 Jhapa, Nepal</p>
                </div>
                <div class="image">
                    <div class="outer">
                        <div class="inner">
                            <img src="https://s3.amazonaws.com/media.egl.ame/5903_business_formalt.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="name">
                    John Edgar
                </div>
                <div class="details">
                    <div class="col">
                        <ul type="none">
                            <li>Class : XII</li>
                            <li>Faculty : Science</li>
                            <li>Roll No : 702</li>
                            <li>Reg. No : SA008702</li>
                            <li>Contact No : 987654321</li>
                        </ul>
                    </div>
                    <div class="col">
                        <img src="school-logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:#16213E;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .card{
        width:400px;
        height:500px;
        border-radius:12px;
        background-color:#0F3460;
        padding-top:2%;
        overflow: hidden;
        cursor: pointer;
    }
    .card .title h1{
        font-family:Gilroy;
        color:white;
        font-size:2rem;
        text-align:center;
        padding:2%;
    }
    .card .title p{
        font-family:Open Sans;
        color:white;
        text-align: center;
    }
    .card .image{
        display: flex;
        justify-content: center;
        margin-top:5%;
        align-items: center;
    }
    .card .image .outer{
        background-color:#E94560;
        height:140px;
        width:140px;
        border-radius:50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card .image .inner{
        height:120px;
        width:120px;
        overflow:hidden;
        border-radius:50%;
    }
    .card .image .inner img{
        width:100%;
    }
    .card .name{
        color:white;
        text-align: center;
        font-family:Gilroy;
        font-size:1.5rem;
        font-weight:bold;
        margin-top:2%;
    }
    .card .details{
        background-color:#E94560;
        height:28%;
        margin-top:10%;
        border-top-left-radius:75px;
        padding:7%;
        color:white;
        font-family:Open Sans;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top:5px solid white;
    }
    .card .details .col{
        width:50%;
    }
    .card .details .col img{
        width:50%;
    }
    .card .details .col:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card .details li{
        margin-top:2%;
        font-size:0.9rem;
    }`,
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bitcoin</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/04158e9780.js"
        crossorigin="anonymous"></script>
    </head>
    
    <body>
        <div class="nav-bar">
            <div class="nav">
                <div class="left">
                    <ul>
                        <li><img src="https://workablehr.s3.amazonaws.com/uploads/account/open_graph_logo/393811/social?1621526248612"
                                alt=""></li>
                        <li>Learn
                            <div class="drop-down">
                                <ul>
                                    <li>
                                        <div class="header">
                                            <i class="fa-sharp fa-solid fa-shuttle-space"></i>
                                            Get Started
                                        </div>
                                        <div class="para">
                                            Get up to speed on Bitcoin, Bitcoin Cash, Etherium and Crypto with articles
                                            guides and step-by-step tutorials.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="header">
                                            <i class="fa-sharp fa-solid fa-book-atlas"></i>
                                            Learn the Basics
                                        </div>
                                        <div class="para">Get a simple introduction to Bitcoin and why it matters.</div>
                                    </li>
    
                                    <li>
                                        <div class="header">
                                            <i class="fa-sharp fa-solid fa-credit-card"></i>
                                            How do i buy Bitcoin?
                                        </div>
                                        <div class="para">Learn how to get your first bitcoin in minutes</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>Buy
                            <div class="drop-down">
                                <ul>
                                    <li>
                                        <div class="header">
                                            <i class="fa-sharp fa-solid fa-credit-card"></i>
                                            Buy Crypto
                                        </div>
                                        <div class="para">
                                            Use your credit card, payment app or bank account to buy crypto currencies.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="header">
                                            <i class="fa-sharp fa-solid fa-money-check-dollar"></i>
                                            Sell Crypto
                                        </div>
                                        <div class="para">Cashout your crypto straight to your bank account.s</div>
                                    </li>
    
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://icons.llama.fi/verse.png" alt="">
                                            </div>
                                            Verse take Sale
                                        </div>
                                        <div class="para">Get whitelisted to participate in the sale</div>
                                    </li>
    
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                                                    alt="">
                                            </div>
                                            Buy Bitcoin
                                        </div>
                                    </li>
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png"
                                                    alt="">
                                            </div>
                                            Buy Etherium
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>DEX</li>
                        <li>Products
    
                            <div class="drop-down">
                                <ul>
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://www.bitcoin.com/icons/icon-512x512.png" alt="">
                                            </div>
                                            Bitcoin.com App
                                        </div>
                                        <div class="para">
                                            The full screen Bitcoin wallet trusted by millions
                                        </div>
                                    </li>
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://icons.llama.fi/verse.png" alt="">
                                            </div>
                                            Verse DEX
                                        </div>
                                        <div class="para">Trade permission lessly and earn share of trading fees by funding liquidity pools.</div>
                                    </li>
    
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://play-lh.googleusercontent.com/F87eL85uibmvGnK3nYnL1PBDehNLJr5_HK4OgRQH2KKV2uplxTdhiN-E7N_bEU8V4qg" alt="">
                                            </div>
                                            Market Data
                                        </div>
                                        <div class="para">Make better investment decision with realtime data at your finger tip.</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>News
    
                            <div class="drop-down">
                                <ul>
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://cdn-icons-png.flaticon.com/512/1256/1256188.png" alt="">
                                            </div>
                                            Latest News
                                        </div>
                                        <div class="para">Get timely and objective Crypto news from a trusted source.</div>
                                    </li>
    
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://www.pngkey.com/png/full/326-3269396_web-designing-display-ad-icon-png.png" alt="">
                                            </div>
                                            Press releases
                                        </div>
                                    </li>
                                    <li>
                                        <div class="header">
                                            <div class="icon">
                                                <img src="https://maui.hawaii.edu/wp-content/uploads/2021/02/megaphone.png" alt="">
                                            </div>
                                            Advertisement
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>Company</li>
                        <li>
                            <div class="icon">
                                <img src="https://icons.llama.fi/verse.png" alt="">
                            </div> Verse
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </body>
    
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:#F0F6FC;
        height:150vh;
    }
    .nav-bar .nav{
        padding:2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-bar .nav .left{
        width:70%;
    }
    .nav-bar .nav .left ul{
        display: flex;
        list-style:none;
        font-family:"Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    }
    .nav-bar .nav .left ul li:first-child{
        width:150px;
        margin-right:2%;
    }
    .nav-bar .nav .left ul li:first-child img{
    width:100%;
    }
    .nav-bar .nav .left ul li{
        margin-left:2%;
        font-weight:600;
        cursor: pointer;
        height:100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .nav-bar .nav .left ul li:last-child{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .nav-bar .nav .left ul li:last-child .icon{
        height:25px;
        width:25px;
        margin-right:5%;
        display: flex;
        align-items: center;
    }
    .nav-bar .nav .left ul li:last-child .icon img{
        width:100%;
    }
    .nav-bar .nav .right{
        width:30%;
        display: flex;
        justify-content:right;
    }
    .nav-bar .nav .right button{
        height:50px;
        width:100px;
        border-radius:12px;
        margin-right:2%;
        font-family:"Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        font-weight:600;
    }
    .nav-bar .nav .right button:nth-child(1){
        border:none;
        background-color:transparent;
    }
    .nav-bar .nav .right button:nth-child(2){
        border:none;
        background-color:#2793FF;
        color:white;
        cursor: pointer;
    }
    .nav-bar .nav .left ul li .drop-down{
        background-color:white;
        border-radius:12px;
        min-height:100px;
        width:300px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        position:absolute;
        top:15%;
        display:none;
    }
    .nav-bar .nav .left ul li:hover .drop-down{
        display:block;
        padding:2%;
    }
    .nav-bar .nav .left ul li:hover .drop-down ul{
        display:block;
    }
    .nav-bar .nav .left ul li:hover .drop-down ul li{
        display:block;
        width:100%;
        margin-bottom:3%;
    }
    .nav-bar .nav .left ul li .drop-down .para{
        font-weight:400;
        color:rgb(0, 0, 0,0.5);
        width:100%;
    }
    .nav-bar .nav .left ul li .drop-down .header{
        display:flex;
        align-items: center;
    }
    .nav-bar .nav .left ul li .drop-down .header i{
        font-size:1.5rem;
        margin-right:5%;
        color:#2793FF;
    }
    .nav-bar .nav .left ul li .drop-down .header .icon{
        height:25px;
        width:25px;
        margin-right:2%;
    }
    .nav-bar .nav .left ul li .drop-down .header .icon img{
        width:100%;
    }`
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Navigation Bar</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/04158e9780.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="nav-bar">
            <div class="nav">
                <ul>
                    <div class="left">
                        <li><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/w3schools-logo-icon.png" alt=""></li>
                        <li>Tutorials <i class="fa-solid fa-caret-down"></i></li>
                        <li>References <i class="fa-solid fa-caret-down"></i></li>
                        <li>Exercises <i class="fa-solid fa-caret-down"></i></li>
                        <li>Videos</li>
                    </div>
                    <div class="right">
                        <div class="icons">
                            <i class="fa-solid fa-circle-half-stroke"></i>
                            <i class="fa-solid fa-earth-americas"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div class="buttons">
                            <button>Pro</button>
                            <button>Get Started</button>
                            <button>Free Website</button>
                            <button>log in</button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </body>
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:#28282b;
    }
    .nav-bar .nav ul{
        display: flex;
        list-style:none;
        justify-content: space-between;
        width:100%;
    }
    .nav-bar .nav ul .left{
        display:flex;
        align-items: center;
        width:40%;
        overflow: hidden;
    }
    .nav-bar .nav{
        background-color:white;
    }
    .nav-bar .nav ul .left li:nth-child(1) img{
    width:100%;
    }
    .nav-bar .nav ul .left li{
        margin-left:3%;
        font-family:Open Sans;
        font-weight:bolder;
        cursor: pointer;
        padding:2%;
        height:100%;
        display: flex;
        align-items: center;
        width:120px;
        justify-content: center;
    }
    .nav-bar .nav ul .left li:nth-child(1){
        height:50px;
        width:50px;
        margin-left:0%;
        display: flex;
        align-items: center;
    }
    .nav-bar .nav ul .left li:hover{
        background-color:#059862;
        color:white;
        transition-duration:0.3s;
    }
    .nav-bar .nav ul .left li:nth-child(1):hover{
        background-color:transparent;
    }
    .nav-bar .nav .right{
        width:60%;
        display: flex;
        justify-content: right;
    }
    .nav-bar .nav .right .icons{
        display: flex;
        align-items: center;
        height:100%;
        width:30%;
        justify-content: center;
    }
    .nav-bar .nav .right .icons i{
        margin-left:5%;
    }
    .nav-bar .nav .right .buttons{
        display: flex;
        align-items: center;
    }
    .nav-bar .nav .right .buttons button{
        height:45px;
        margin-right:2%;
        width:150px;
        border-radius:75px 75px;
        font-family:Open Sans;
        font-weight:bolder;
        color:white;
        border:none;
        outline:none;
        cursor: pointer;
    }
    .nav-bar .nav .right .buttons button:nth-child(1){
        width:80px;
        background-color:#282a35;
    }
    .nav-bar .nav .right .buttons button:nth-child(2){
        background-color:#ffb3bb;
        color:black;
    }
    .nav-bar .nav .right .buttons button:nth-child(3){
        background-color:#fff080;
        color:black;
    }
    .nav-bar .nav .right .buttons button:last-child{
        width:100px;
        background-color:#059862;
    }`,
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Color Flipper Hex</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="container">
        <div class="header">
            <div class="header-box" id="box">
                Color Flipper
            </div>
        </div>
        <div class="flipper">
            <div class="details-box">
                <div class="title" id="titl">
                    Hey ! We have Generated Random Hex Color For You
                </div>
                <div class="color-name" id="name">
                    #0C7FF2
                </div>
            </div>
        </div>
    </div>
        <script src="script.js"></script>
    </body>
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    .header{
        padding:2%;
    }
    .header .header-box{
        background-color:white;
        color:black;
        width:150px;
        font-family:Lemon Milk;
        padding:1%;
        border-radius:2px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                  0 2px 2px rgba(0,0,0,0.11), 
                  0 4px 4px rgba(0,0,0,0.11), 
                  0 6px 8px rgba(0,0,0,0.11),
                  0 8px 8px rgba(0,0,0,0.11);
        color:#0C7FF2;
    }
    body{
        background-color:#0C7FF2;
        cursor: pointer;
    }
    .flipper{
    display: flex;
    justify-content: center;
    align-items: center;
    height:70vh;
    }
    .flipper .details-box{
        height:150px;
        width:500px;
        background-color:#ffffff;
        border-radius:2px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                  0 2px 2px rgba(0,0,0,0.11), 
                  0 4px 4px rgba(0,0,0,0.11), 
                  0 6px 8px rgba(0,0,0,0.11),
                  0 8px 8px rgba(0,0,0,0.11);
    }
    .flipper .details-box .title{
        font-family:Open Sans;
        font-weight:bolder;
        font-size:1.3rem;
        text-align: center;
        padding:2%;
        color:#0C7FF2;
    }
    .flipper .details-box .color-name{
        color:#0C7FF2;
        font-size:2rem;
        font-family:Lemon Milk;
        text-align:center;
        font-weight:bolder;
    }`,
    jscodes:`let container = document.getElementById('container');
    let colorname = document.getElementById('name');
    let title = document.getElementById('titl');
    let box = document.getElementById('box');
    let hexcolor=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    function randomnum(){
        let random = Math.floor(Math.random()*hexcolor.length);
        return random;
    }
    container.addEventListener('click',()=>{
    let hex="#";
    for(let i=0;i<=5;i++){
        hex=hex+hexcolor[randomnum()];
    }
    document.body.style.backgroundColor=hex;
    colorname.style.color=hex;
    colorname.textContent=hex;
    title.style.color=hex;
    box.style.color=hex;
    });`
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Color Flipper</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="header">
            <h1>Color Flipper</h1>
        </div>
        <div class="container">
            <div class="flipper" id="flip-color">
                <div class="color-name" id="name">
                    <h1>BLUE</h1>
                </div>
            </div>
            <div class="button">
                <button id="chg-color">CHANGE</button>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:#28282b;
    }
    .header h1{
        color:white;
        font-family:Lemon Milk;
        font-weight:400;
        font-size:1.5rem;
        padding-top:2%;
        padding-left:2%;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items:center;
        height:90vh;
    }
    .container .flipper{
        height:500px;
        width:540px;
        background-color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family:Lemon Milk;
        font-weight:400;
        border-radius:2px;
        margin-right:4%;
    }
    .container .flipper .color-name{
        background-color:white;
        width:150px;
        display: flex;
        justify-content: center;
        height:50px;
        align-items: center;
        color:black;
        border-radius:2px;
    }
    .container .button button{
        height:60px;
        width:200px;
        background-color:white;
        color:black;
        border:none;
        border-radius:2px;
        font-family:lemon milk;
        font-size:1.5rem;
        letter-spacing:2px;
        cursor: pointer;
    }`,
    jscodes:`let btn = document.getElementById('chg-color');
    let flip = document.getElementById('flip-color');
    let name = document.getElementById('name');
    let color=["Red","Green","Blue"];
    btn.addEventListener('click',()=>{
    let a=randomnum();
    flip.style.backgroundColor=color[a];
    name.style.color=color[a];
    btn.style.backgroundColor=color[a];
    btn.style.color='white';
    });
    function randomnum(){
        let random = Math.floor(Math.random()*color.length);
        return random;
    }`,
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Watch</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <div class="container">
            <div class="day">
                <!-- Sunday -->
            </div>
            <div class="watch">
                <div class="date">
                    <!-- 30 -->
                </div>
                <div class="time">
                    <!-- 06:56:45 -->
                </div>
                <div class="dorn">
                    <!-- PM -->
                </div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    .container{
        background-color:#1c1c1e;
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family:Lemon Milk;
        font-size:2.5rem;
        letter-spacing:8px;
        cursor: pointer;
    }
    .container .watch{
        width:45%;
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
    .container .watch .date{
        height:100px;
        width:100px;
        background-color:#28282b;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#0c7ff2;
        box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
                  0 2px 2px rgba(0,0,0,0.20), 
                  0 4px 4px rgba(0,0,0,0.15), 
                  0 8px 8px rgba(0,0,0,0.10),
                  0 2px 2px rgba(0,0,0,0.05);
    }
    .container .watch .time{
        width:400px;
        height:100px;
        background-color:#28282b;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
        box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
                  0 2px 2px rgba(0,0,0,0.20), 
                  0 4px 4px rgba(0,0,0,0.15), 
                  0 8px 8px rgba(0,0,0,0.10),
                  0 2px 2px rgba(0,0,0,0.05);
    }
    .container .watch .dorn{
        height:100px;
        width:100px;
        background-color:#28282b;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#0c7ff2;
        box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
                  0 2px 2px rgba(0,0,0,0.20), 
                  0 4px 4px rgba(0,0,0,0.15), 
                  0 8px 8px rgba(0,0,0,0.10),
                  0 2px 2px rgba(0,0,0,0.05);
    }
    .container .day{
        width:400px;
        height:40px;
        background-color:#28282b;
        margin-bottom:1%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:1rem;
        color:white;
        box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
                  0 2px 2px rgba(0,0,0,0.20), 
                  0 4px 4px rgba(0,0,0,0.15), 
                  0 8px 8px rgba(0,0,0,0.10),
                  0 2px 2px rgba(0,0,0,0.05);
    }`,
    jscodes:`let pdate = document.querySelector('.date');
    let ptime = document.querySelector('.time');
    let pday = document.querySelector('.day');
    let pdorn = document.querySelector('.dorn');
    setInterval(() => {
        let days =["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
        let time=new Date();
        let hour=12-time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        let date=time.getDate();
        let day=days[time.getDay()];
        pdate.textContent=date;
        pday.textContent=day;
        ptime.textContent=Math.abs(hour)+":"+minutes+":"+seconds;
    },1000);`
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                Rechage Pin
            </div>
            <div class="gen">
                <div class="pin">
    
                </div>
            </div>
            <div class="button">
                <button id="genbtn">GENERATE PIN</button>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:#1b1b1c;
        flex-direction: column;
        height:100vh;
    }
    .container .gen{
        background-color:#353935;
        height:150px;
        width:550px;
        border-radius:2px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family:Lemon Milk;
        font-size:2.5rem;
        color:white;
        letter-spacing:5px;
    }
    .container .header{
        font-family:gilroy;
        width:550px;
        padding:1%;
        color:white;
        font-size:2rem;
    }
    .container .button{
        margin-top:2%;
    }
    .container .button button{
        height:40px;
        width:150px;
        background-color:white;
        font-family:Lemon Milk;
        cursor: pointer;
    }`,
    jscodes:`let rpin=4000000000000000;
    let rpin2=5000000000000000;
    let pin = document.querySelector('.pin');
    let btn = document.getElementById('genbtn');
    btn.addEventListener('click',()=>{
    let genpin = Math.floor(Math.random()*(rpin2-rpin)+rpin);
    pin.textContent=genpin;
    });`
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Counter</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <div class="counter-box">
                <div class="header">
                    COUNTER
                </div>
                <div class="counter">
    
                </div>
                <div class="buttons">
                    <button id="Increase">Increase</button>
                    <button id="Reset">Reset</button>
                    <button id="Decrease">Decrease</button>
                </div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:#28282b;
    }
    .container{
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .counter-box{
        background-color:#1c1c1e;
        width:500px;
        height:450px;
        border-radius:5px;
    }
    .counter-box .header{
        color:white;
        font-family:Lemon Milk;
        padding-left:5%;
        padding-top:5%;
        font-size:2rem;
    }
    .counter-box .counter{
        color:white;
        font-family:Lemon Milk;
        font-size:15rem;
        font-weight:bolder;
        text-align: center;
    }
    .counter-box .buttons{
        display: flex;
        justify-content:center;
        width:100%;
    }
    .counter-box .buttons button{
        height:40px;
        width:100px;
        font-size:1rem;
        font-family:Open Sans;
        cursor: pointer;
    }
    .counter-box .buttons button:nth-child(2){
        margin-right:10%;
        margin-left:10%;
    }`,
    jscodes:`let counter = document.querySelector('.counter');
    let increasebtn = document.getElementById('Increase')
    let resetbtn = document.getElementById('Reset')
    let decreasebtn = document.getElementById('Decrease')
    let countvalue=0;
    counter.textContent=countvalue;
    increasebtn.addEventListener('click',()=>{
    countvalue+=1;
    counter.textContent=countvalue;
    });
    decreasebtn.addEventListener('click',()=>{
        countvalue-=1;
        counter.textContent=countvalue;
    });
    resetbtn.addEventListener('click',()=>{
        countvalue=0;
        counter.textContent=countvalue;
    });`,
},
{
    htmlcodes:`Sorry! We Could Not Find the Code Please Watch Our Video On YouTube`,
    csscodes:`Sorry! We Could Not Find the Code Please Watch Our Video On YouTube`,
    jscodes:`Sorry! We Could Not Find the Code Please Watch Our Video On YouTube`,

},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calender</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <div class="container">
            <div class="calender">
                <div class="month">
                    <h1>August 2022</h1>
                </div>
                <div class="days">
                    <div class="day"><span>Sun</span>
                         <div class="blank"></div>
                        <div class="date">7</div>
                        <div class="date">14</div>
                        <div class="date">21</div>
                        <div class="date">28</div>
                    </div>
    
                    <div class="day"><span>Mon</span>
                        <div class="date">1</div>
                        <div class="date">8</div>
                        <div class="date">15</div>
                        <div class="date">22</div>
                        <div class="date">29</div></div>
    
                    <div class="day"><span>Tue</span>
                        <div class="date">2</div>
                        <div class="date">9</div>
                        <div class="date">16</div>
                        <div class="date">23</div>
                        <div class="date">30</div>
                    </div>
    
                    <div class="day"><span>Wed</span>
                        <div class="date">3</div>
                        <div class="date">10</div>
                        <div class="date">17</div>
                        <div class="date">24</div>
                        <div class="date">31</div>
                    </div>
    
                    <div class="day"><span>Thu</span>
                        <div class="date">4</div>
                        <div class="date">11</div>
                        <div class="date">18</div>
                        <div class="date">25</div>
                    </div>
                    <div class="day"><span>Fri</span>
                        <div class="date">5</div>
                        <div class="date">12</div>
                        <div class="date">19</div>
                        <div class="date">26</div>
                    </div>
    
                    <div class="day"><span>Sat</span>
                        <div class="date">6</div>
                        <div class="date">13</div>
                        <div class="date">20</div>
                        <div class="date">27</div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`,
    csscodes:`*{
        margin: 0;
        padding: 0;
    }
    body{
        background-image:url(https://wallpaperaccess.com/full/1779916.jpg);
        background-size:cover;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .container .days{
        display: flex;
        justify-content: center;
    }
    .container .days .day{
        color:white;
        margin:2%;
        padding:2%;
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
    }
    .container .days .day .date{
        text-align: center;
        border:1px solid white;
        border-radius:500%;
        height:30px;
        width:30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom:20%;
    }
    .container .days .day .blank{
        display:block;
        height:30px;
        width:30px;
        border:1px solid rgb(255, 255, 255,0);
        margin-bottom:20%;
        border-radius:500%;
        align-items: center;
        padding:2%;
    }
    .container .calender{
        background-color:rgb(0, 0, 0,0.4);
        width:40%;
        border-radius:12px;
        display: flex;
        flex-direction:column;
        justify-content: center;
    }
    .container .days .day .date:hover{
        background-color:white;
        color:black;
        transition-duration:0.3s;
        cursor:default;
    }
    .container .calender .month{
        color:black;
        font-family:poppins;
        padding:2%;
        font-size:0.8rem;
        background-color:white;
        border-top-right-radius:12px;
        border-top-left-radius:12px;
    }`,
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coding Nepal Birtamode</title>
    </head>
    
    <body>
        <ul type="none" style="background-color:Black;">
            <a href="" style="color:white;">
                <li>Home</li>
            </a>
            <a href="" style="color:white;">
                <li>Videos</li>
            </a>
            <a href="#courses" style="color:white;">
                <li>Courses</li>
            </a>
            <a href="" style="color:white;">
                <li>About</li>
            </a>
            <a href="" style="color:white;">
                <li>Team</li>
            </a>
        </ul>
        <center>
            <font face="sans-serif" size="10rem" color="Black">
                <h3>Coding Nepal Birtamode</h3>
                <h1>We Offer the Best Courses For Free So Enroll Now Fast</h1>
            </font>
            <a href="courses.html"><button>Learn Now</button></a>
        </center>
        <font face="sans-serif" size="5rem" color="Black">
            <h1 id="courses">Courses We Offer</h1>
            <font face="sans-serif" size="8rem" color="Black">
                <p align="center">We Offer Many Courses Out Of Which the Below Languages are the Most Popular Courses on Our
                    Channel. So Learn For Free and Enhance your Skills.</p>
            </font>
            <center><a href="#"><button>HTML</button></a></center>
            <center><a href="#"><button>CSS</button></a></center>
            <center><a href="#"><button>JAVASCRIPT</button></a></center>
            <center><a href="#"><button>PYTHON</button></a></center>
            <center><a href="#"><button>NODE.JS</button></a></center>
        </font>
    </body>
    
    </html>`,
},
{
    htmlcodes:`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tribute Page</title>
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Ubuntu&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <center><img src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2017/entertainment/Yama-Budhha-14012017101322-1000x0-15012017092743.jpg&w=900&height=601"
            alt="Image" width="40%"></center>
    
        <h1 align="center" style="font-family:ubuntu;">Yama Buddha</h1>
        <p align="center" style="font-family:ubuntu;">Best Rapper of Nepal</p>
        <h3 align="center"style="font-family:ubuntu;">1987-2017</h3>
        <p align="center" style="font-family:ubuntu;">Anil Adhikari (Nepali: अनिल अधिकारी; 30 May 1987 – 14 January 2017) better known by his stage name Yama Buddha (Nepali: यमबुद्ध) was a Nepalese rapper based in London, UK. He is widely considered one of the most influential rappers of Nepalese hip-hop.</p>
        <h3 style="font-family:ubuntu;">ABOUT</h3>
        <p style="font-family:ubuntu;" align="center">Yama Buddha was born on 30 May 1987 in Salakpur, Morang, Nepal to politician Ambika Prasad Adhikari and Urmila Adhikari as Anil Adhikari.He lived in Salakpur, Morang for some years and moved to Kathmandu with his parents. He went back to stay with his grandparents in Salakpur for about 2 years and studied grades 4 and 5 at Pathibhara Boarding school in Itahari. He went back to Kathmandu to study in grade 6 at The Excelsior School Swoyambhu. He completed his SLC from The Excelsior School and his +2 from Ed Mark Academy.</p>
        <h1 align="center" style="font-family: 'Cedarville Cursive', cursive;">Rest In Peace</h1>
    </body>
    </html>`,
},
{
    htmlcodes:`<html>
	<head>
		<title>Form</title>
	</head>
<body>
	<form action="https://www.google.com/">
		<h1>Login Form</h1> <br><br>
		<h2>Username</h2>
		<input type="text" placeholder="Enter Username" required>
		<h2>Password</h2>
		<input type="password" placeholder="Enter Password" required><br>
		<input type="submit" value="Submit">
	</form>
</body>
</html>`,
}
];
// folders.childNodes[1].addEventListener('click', () => {
//     folders.classList.toggle('show');
//     codes.textContent = `${objcodes[0].codetxt}`;
// });
copybtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codes.textContent);
})
folders.childNodes.forEach(element => {
element.addEventListener('click',()=>{
    let num = element.classList[1];
    codes.textContent = `${objcodes[num].htmlcodes}`;
    folders.classList.toggle('show');
    html.addEventListener('click',()=>{
        codes.textContent=`${objcodes[num].htmlcodes}`
    });
    css.addEventListener('click',()=>{
        codes.textContent=`${objcodes[num].csscodes}`
    });
    js.addEventListener('click',()=>{
        codes.textContent=`${objcodes[num].jscodes}`
   });
   copybtn.style.display="block"; 
   usedlanguages.style.display="flex";
});
});