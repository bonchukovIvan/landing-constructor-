import path from 'path';
import { fileURLToPath } from 'url';
import fsPromise from 'fs/promises';
import fs from 'fs';
import { zip } from 'zip-a-folder';
import { existsSync, rmdir } from 'fs';
import lignator from 'lignator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const landingName = 'testLanding1';
const workDir = path.join(__dirname, '..', 'files');
const landingDir = path.join(workDir, landingName);
const zipPath = path.join(__dirname, '..','zip');
const data = `
<!DOCTYPE html>
<html lang="ru-RU">
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>	<title>Ostio Pillow - массажная подушка с подогревом для спины и шеи</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=480">
	<meta name="description" content="Массажер быстро приведет ваши мышцы в порядок, позволит расслабиться после тяжелого трудового дня и подготовить тело ко сну.">
	<link rel="shortcut icon" href="favicon.png" type="image/x-icon">
	<link rel="stylesheet" href="assets_pages/land/css/reset.css">
	<link rel="stylesheet" href="assets_pages/land/fonts/Bebas/Bebas.css">
	<link rel="stylesheet" href="assets_pages/land/fonts/OpenSans/OpenSans.css">
	<link rel="stylesheet" href="assets_pages/land/js/slider/owlCarousel-2.2.1/owl.carousel.min.css">
	<link rel="stylesheet" href="css/styles.css">
<meta property="og:type" content="article"/>
<meta property="og:title" content="Массажная подушка с прогревом"/>
<meta property="og:description" content="Массажная подушка с прогревом это отличная профилактика множества заболеваний позвоночника, позволяющая, кроме того, избавиться и от накопившейся усталости. Массажные ролики имитируют действия рук массажиста, даря вам незабываемые ощущения. Удобная лямка-фиксатор позволит закрепить подушку на любом стуле или сиденье авто."/>
<meta property="og:url" content=""/>
<form style="display: none;" method="POST" action="statistics.php.html">
    		<input type="hidden" name="url" value="http://demo.lp-base.pro/0823/">
    		<a href="statistics.php.html" type="submit" rel="nofollow" style="text-align:center;" title="Отправить, Регистрация, Купить"><img src="pixel.gif" alt="register" title="order" border="0" alt="" width="1" height="1"></a>
  		  </form></head>
<body>
	<div class="main_wrapper">
		<header class="offer_section">
			<h1 class="main_title">{main_title}</h1>
			<h2 class="main_subtitle">{sub_title}</h2>
			<div class="box">
				<div class="sale"><p>Скидка {sale_number}%</p></div>
			</div>
			<div class="price_block clearfix">
				<div class="price">
					<div class="old">
						старая цена:
						<p><span>{old_cost}</span><small>р</small></p>
					</div>
					<div class="new">
						Цена по акции:
						<p>
                            <span>{sale_cost}</span>
                            <small>р</small>
                        </p>
					</div>
				</div>
				<div class="economy">Экономия <span>{eco}р</span></div>
			</div>
			<ul class="list1">
				<li>{list1}</li>
				<li>{list2}</li>
				<li>{list3}</li>
			</ul>
			<div class="formbox">
				<div class="timer">
					<p>До конца акции осталось:</p>
					<div class="timer_container">
						<div class="timer_block day"><div class="count days">00</div><div class="text">дней</div></div>
						<div class="timer_block"><div class="count hours">00</div><div class="text">часов</div></div>
						<div class="timer_block"><div class="count minutes">00</div><div class="text">минут</div></div>
						<div class="timer_block"><div class="count seconds">00</div><div class="text">секунд</div></div>
					</div>
				</div>
				<a href="index.html#order_form" class="button-m">Заказать со скидкой</a>
			</div>
			<div class="prod_count">Осталось 
                <span class="prod_count_var">{prod_count_var}</span> 
            подушек по акции</div>
		</header>
		<footer class="footer_section">
			<p>ООО "Профи" ОГРН 1197746429055 ИНН 7720472835, 121352, город Москва, ш. Энтузиастов, дом 86а/1, пом. 7, оф. 5а.</p>
			    <a href="politics.html">Политика конфиденциальности</a>
			    <a href="agreement.html">Пользовательское соглашение</a><br>
<a style="color:inherit;display: block;" target="_blank" href="https://lp-base.pro">Landings by LP-BASE.PRO</a>
		</footer>
	</div>
	
    <script type="text/javascript">
        var phonePrefix = '+7';
    </script>
    <script type="text/javascript" src="assets_pages/js/phonePrefix.js"></script>



<script>
    var comebackerFormId = '4';
</script>

<link href="assets_pages/css/popup-m1-style.css@v=0.0.3.css" rel="stylesheet" type="text/css"/>
<script src="assets_pages/js/popup-m1.js@v=0.0.1" type="text/javascript"></script>

<div id="overlay-popup-m1"></div>
<div id="m1-form" class="m1modal">
    <a class="close-m1"></a>
    <div><div class="popup-m1-title">Вам понравилось это предложение?</div>
        <div class="popup-m1-cont">
            <div class="popup-m1-text1">Мы расскажем Вам все об этом товаре, предложим наилучшие условия и ознакомим с подходящими акционными предложениями!</div>
            <form action="http://demo.lp-base.pro/0823/mail.php" method="post" class="main-order-form popup-m1-form">
                <input type="text" name="name" placeholder="Введите ваше имя" required />
                <input type="tel" name="phone" placeholder="Введите телефон" required />
                <button type="submit">Перезвоните мне</button>       
            </form>
                            <div class="popup-m1-text2">Оператор перезвонит Вам через 5-10 минут</div>
                    </div>
    </div>
</div>

<script type="text/javascript">
    $(function(){
                    });
</script>
	<script src="assets_pages/land/js/youtube/previewYouTube.js"></script>
	<script src="assets_pages/land/js/slider/owlCarousel-2.2.1/owl.carousel.min.js"></script>
	<script src="js/main.js"></script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(49331737, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/49331737" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<link href="../lp-base.css" rel="stylesheet" />
<div class="lp-base-container"> 
  <div class="lp-base-text">
    <a href="index.html#" class="lp-base-pro-button logo">
    <img src="../logo.png" alt="LP-BASE.PRO">
    <span class="lp-base-span"></span></a>
  </div>
  <div class="lp-base-text">
    <p class="lp-base-utp"></p>
  </div>
  <div class="lp-base-text">
    <a href="index.html#" class="lp-base-pro-button button"></a>    
  </div>
</div>
<script src="../script.js" type="text/javascript"></script>

</body>
</html>
`

const dataCss = `/* styles */
body {
	min-width: 480px;
	background: #62819b;
	font-family: 'Open Sans', Arial, Helvetica, sans-serif;
	font-weight: 400;
	font-size: 17px;
	line-height: 1.4em;
	color: #121314;
	cursor: default;
}

.main_wrapper {
	margin: 0 auto;
	width: 480px;
	background: #fff;
}

img {
	max-width: 100%;
	height: auto;
}

b {
	font-weight: 700;
}
.clearfix:after{
	content: '';
	display: block;
	clear: both;
}
h2.title{
	font-size: 40px;
	line-height: 1.1em;
	text-transform: uppercase;
	font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
	text-align: center;
	margin-bottom: 35px;
	padding: 0 10px;
}
h2.title span{
	color: #2885d2;
}
h2.title:after{
	content: '';
	width: 80px;
	height: 4px;
	background: #2885d2;
	display: block;
	margin: 5px auto 0;
}
section{
	padding: 40px 0;
}

.color_theme{
	background: #2885d2;
	color: #fff;
}
.title.white{
	color: #fff;
}
.title.white>span{
	color: #fffc00;
}
.title.white:after{
	background: #fffc00;
}

.m1-form{
	padding: 0 25px;
}
.m1-form input{
	width: 100%;
	display: block;
	font-family: 'Open Sans', Arial, Helvetica, sans-serif;
	border: #dadbdc 1px solid;
	font-size: 17px;
	margin-bottom: 10px;
	height: 80px;
	border-radius: 40px;
	background: #f5f6f7;
	text-align: center;;
	color: #222;
}
.m1-form .button-m{
	margin-top: 0;
}
.m1-form ::-webkit-input-placeholder {
	color: #222;
}
.m1-form ::-moz-placeholder {
	color: #222;
}
.m1-form :-moz-placeholder {
	color: #222;
}
.m1-form :-ms-input-placeholder {
	color: #222;
}
.m1-form :focus::-webkit-input-placeholder {
	color: transparent;
}
.m1-form :focus::-moz-placeholder {
	color: transparent;
}
.m1-form :focus:-moz-placeholder {
	color: transparent;
}
.m1-form :focus:-ms-input-placeholder {
	color: transparent;
}

/* button */
.button-m{
	border: none;
	cursor: pointer;
	font-family: 'Open Sans', Arial, Helvetica, sans-serif;
	font-weight: 800;
	text-transform: uppercase;
	height: 80px;
	width: 350px;
	display: block;
	border-radius: 40px;
	line-height: 80px;
	text-decoration: none;
	text-align: center;
	background: #ffcb00;
	background: -moz-linear-gradient(top, #ffcb00 0%, #ff9c00 100%);
	background: -webkit-linear-gradient(top, #ffcb00 0%,#ff9c00 100%);
	background: linear-gradient(to bottom, #ffcb00 0%,#ff9c00 100%);
	border-bottom: 4px solid #e48b00;
	-webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.1);
	-moz-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.1);
	box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.1);
	font-size: 22px;
	margin: 0px auto;
	color: #121314;
	position: relative;
	text-shadow: 0 2px 1px rgba(255,255,255,0.3);
}
.button-m:active{
	background: #ff9c00;
	background: linear-gradient(to bottom, #ff9c00, #ffcb00);
	top: 2px;
}



/*  offer_section   */
.offer_section{
	background: #f5f6f7;
	padding: 0 0 30px;
}
.main_title{
	background: #2885d2;
	color: #fff;
	text-transform: uppercase;
	font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
	font-size: 60px;
	height: 80px;
	line-height: 90px;
	text-align: center;
	letter-spacing: 3px;
}
.main_subtitle{
	background: #fff;
	text-align: center;
	padding: 10px 15px;
	font-size: 26px;
	line-height: 1.1em;
}
.offer_section .box{
	position: relative;
	background: url(../images/{img}) 50% 0% no-repeat;
	min-height: 550px;
	padding-top: 250px;
	margin-bottom: 25px;
}

.offer_section .sale{
	width: 142px;
	height: 155px;
	background: url(../images/sale.png) 50% 0% no-repeat;
	position: absolute;
	top: 0;
	right: 0;
	overflow: hidden;
}
.offer_section .sale>p{
	color: #fff;
	font-weight: 700;
	width: 200px;
	text-align: center;
	transform: rotate(48deg);
	position: absolute;
	top: 50px;
	left: -14px;
	font-size: 20px;
}

.offer_section .box>img{
	display: block;
	margin: 0 auto;
	border-radius: 12px;
	box-shadow: 0 5px 20px 0 rgba(0,0,0,0.1);
}

.offer_desc{
	width: 150px;
	text-transform: uppercase;
	font-weight: 700;
	color: #fff;
	text-align: center;
	font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
	font-size: 23px;
	line-height: 26px;
	position: absolute;
	top: 58px;
	left: 38px;
	letter-spacing: 0.6px;
}
.offer_desc>span{
	display: block;
	color: #fffc00;
}

.price_block{
	width: 410px;
	margin: 0 auto 30px;
	overflow: hidden;
	border-radius: 8px;
	box-shadow: 0 5px 20px 0 rgba(0,0,0,0.1);
	position: relative;
	font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	text-align: center;
}
.price_block:before{
	content: '';
	width: 12px;
	height: 100px;
	background: url(../images/price_arrow.png) 50% 50% no-repeat;
	position: absolute;
	top: 0;
	right: 100px;
}
.price_block .price{
	width: 300px;
	height: 100px;
	float: left;
	background: #2885d2;
}
.price>div{
	width: 50%;
	float: left;
	font-size: 20px;
	line-height: 1.1em;
	font-weight: 700;
	padding-top: 20px;
}
.price>div>p{
	font-size: 42px;
	line-height: 1.1em;
}
.price>div>p>small{
	font-size: 0.7em;
}
.price .old{
	color: #94c2e9;
}
.price .old span{
	text-decoration: line-through;
}
.price .new{
	color: #fffc00;
}
.price_block .economy{
	width: 110px;
	height: 100px;
	float: left;
	background: #85c00c;
	background: -moz-linear-gradient(top, #85c00c 0%, #74a809 100%);
	background: -webkit-linear-gradient(top, #85c00c 0%,#74a809 100%);
	background: linear-gradient(to bottom, #85c00c 0%,#74a809 100%);
	font-size: 20px;
	line-height: 1.1em;
	color: #fff;
	font-weight: 700;
	padding-top: 24px;
}
.price_block .economy>span{
	display: block;
	font-size: 30px;
	line-height: 1.1em;
}
.list1>li{
	padding-left: 28px;
	margin-bottom: 12px;
	position: relative;
}
.list1>li:before{
	content: '';
	width: 20px;
	height: 20px;
	background: url(../images/check1.png) 50% 50% no-repeat;
	position: absolute;
	top: 3px;
	left: 0;
}
.list1>li:last-child{
	margin-bottom: 0;
}
.offer_section .list1{
	padding: 0 50px;
	margin-bottom: 30px;
}

.formbox{
	width: 410px;
	margin: 0 auto;
	border-radius: 8px;
	box-shadow: 0 5px 20px 3px rgba(0,0,0,0.1);
	padding: 25px 5px 30px;
	background: #fff;
}

.timer{
	margin-bottom: 30px;
}
.timer>p{
	font-size: 22px;
	text-align: center;
	margin-bottom: 12px;
}
.timer .timer_container{
	font-size: 0;
	text-align: center;
}
.timer_container .timer_block{
	display: inline-block;
	vertical-align: top;
	width: 70px;
	margin: 0 10px;
	position: relative;
	font-weight: 800;
	color: #2885d2;
}
.timer_container .timer_block:not(:last-child):after{
	content: ':';
	font-size: 30px;
	line-height: 30px;
	color: #2885d2;
	position: absolute;
	top: 8px;
	right: -15px;
}
.timer_container .timer_block.day{
	color: #a8a9aa;
}
.timer_block .count{
	font-size: 42px;
	line-height: 1.1em;
}
.timer_block .text{
	font-size: 18px;
	line-height: 1.1em;
}

.prod_count{
	text-align: center;
	margin-top: 25px;
}
.prod_count>span{
	width: 32px;
	height: 32px;
	border-radius: 50%;
	line-height: 32px;
	text-align: center;
	display: inline-block;
	vertical-align: middle;
	margin: 0 5px;
	background: #85c00c;
	color: #fff;
	font-weight: 700;
}


/*video_sect*/
.video_sect{
	padding: 0;
}
.video_block{
	background: #ccc;
	position: relative;
	overflow: hidden;
	height: 270px;
}
.video_block .youtube,
.video_block iframe,
.video_block object{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}


/*sect2*/
.sect2{
	position: relative;
	padding-bottom: 50px;
}
.sect2 .title span{
	display: block;
}
.sect2:after{
	content: '';
	width: 0;
	height: 0;
	position: absolute;
	bottom: 0;
	left: 0;
	border-left: 240px solid #fff;
	border-right: 240px solid #fff;
	border-top: 20px solid #2886d2;
}

.benef1{
	padding: 0 25px;
	position: relative;
}
.benef1:before{
	content: '';
	position: absolute;
	top: 10px;
	left: 49px;
	width: 3px;
	height: 100%;
	background: url(../images/benef1_bg.png) 50% 10px repeat-y;
	z-index: 1;
}
.benef1>li{
	padding-left: 78px;
	position: relative;
	z-index: 2;
	margin-bottom: 20px;
}
.benef1>li:last-child{
	margin-bottom: 0;
	padding-bottom: 10px;
}
.benef1>li .number{
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-weight: 800;
	color: #85c00c;
	font-size: 30px;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	top: 5px;
	left: 0;
	box-shadow: 0 0 0 10px rgba(255,255,255,0.15), 0 0 0 5px rgba(255,255,255,0.15);
}
.benef1>li>span{
	color: #fffc00;
	display: block;
	font-weight: 700;
	text-transform: uppercase;
}

.sect2 .alert{
	width: 430px;
	background: #fff;
	margin: 0 auto;
	border-radius: 8px;
	padding: 12px 40px 14px;
	font-size: 25px;
	line-height: 1.2em;
	font-weight: 700;
	color: #121314;
	text-align: center;
}
.sect2 .alert>span{
	color: #85c00c;
	display: block;
}


/*benef3*/
.benef2{
	font-size: 0;
	text-align: center;
}
.benef2>li{
	width: 200px;
	display: inline-block;
	vertical-align: top;
	margin: 0 15px 25px;
}
.benef2>li>img{
	display: block;
	margin: 0 auto 12px;
	border-radius: 6px;
	box-shadow: 0 5px 20px 0 rgba(0,0,0,0.1);
}
.benef2>li>p{
	font-weight: 700;
	font-size: 18px;
	text-transform: uppercase;
}
.benef2>li:last-child img{
	border-radius: none;
	box-shadow: none;
	margin-top: 15px;
}

.sect3 .button-m{
	margin-top: 10px;
}


/*sect4*/
.sect4{
	background: #f5f6f7;
	padding-bottom: 0;
}
.sect4>p{
	padding: 0 20px;
	text-align: center;
	margin-bottom: 40px;
	position: relative;
}
.sect4>p>span{
	background: #85c00c;
	color: #fff;
}
.sect4>p:after{
	content: '';
	width: 50px;
	height: 54px;
	background: url(../images/arrow.png) 50% 50% no-repeat;
	position: absolute;
	bottom: -42px;
	right: 100px;
}

.sect4 .container>img{
	float: left;
}
.sect4 .container .list2{
	padding: 15px 10px 0 180px;
}
.list2>li{
	padding-left: 32px;
	margin-bottom: 20px;
	position: relative;
}
.list2>li:last-child{
	margin-bottom: 0;
}
.list2>li:before{
	content: '';
	width: 22px;
	height: 20px;
	background: url(../images/check2.png) 50% 50% no-repeat;
	position: absolute;
	top: 3px;
	left: 0;
}

.sect4 .alert{
	border-top: 5px solid #fff;
	height: 265px;
	background: url(../images/s4_alert.jpg) 50% 0% no-repeat;
	padding: 41px 15px 0 280px;
	font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
	letter-spacing: 0.5px;
	color: #fff;
	font-weight: 700;
	text-align: right;
	font-size: 25px;
	line-height: 1.2em;
}
.sect4 .alert>span{
	color: #fffc00;
}


/*sect5*/
.sect5{
	padding-bottom: 0;
}

.sect5 .title span{
	display: block;
}

.benef3{
	box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);
}
.benef3>li{
	display: table;
	width: 100%;
}
.benef3>li .img{
	width: 240px;
	display: table-cell;
	vertical-align: middle;
	background: #f5f6f7;
}
.benef3>li .img>img{
	display: block;
	margin: 0 auto;
}
.benef3>li .text{
	width: 240px;
	display: table-cell;
	vertical-align: middle;
	padding: 10px 20px;
	text-align: center;
}
.benef3>li .text>span{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	text-align: center;
	line-height: 50px;
	font-weight: 800;
	font-size: 25px;
	color: #fff;
	background: #2885d2;
	display: block;
	margin: 0 auto 10px;
}

.sect5 .button-m{
	margin-top: 35px;
}


/*sect6*/
.sect6>img{
	display: block;
	margin: -15px auto 20px;
}

.list3{
	padding: 0 15px;
}
.list3>li{
	display: table;
	width: 100%;
	height: 60px;
	margin-bottom: 10px;
	background: #f5f6f7;
	border-radius: 8px;
	border-left: 10px solid #85c00c;
	padding: 12px 10px 12px 20px;
	font-size: 15px;
	line-height: 1.2em;
}
.list3>li>b{
	display: table-cell;
	vertical-align: middle;
	width: 140px;
	font-size: 16px;
}
.list3>li>p{
	display: table-cell;
	vertical-align: middle;
	width: 280px;
	text-align: right;
}

/*sect7*/
.rev_item{
	width: 410px;
	margin: 0 auto;
	border-radius: 12px;
	overflow: hidden;
	background: #fff;
	text-align: center;
	color: #121314;
	padding-bottom: 20px;
}
.rev_item>img{
	display: block;
	margin: 0 auto;
}
.rev_item>span{
	display: block;
	padding: 0 10px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
}
.rev_item>span:before{
	content: '';
	width: 70px;
	height: 70px;
	background: url(../images/rev_q.png) 50% 50% no-repeat;
	display: block;
	margin: -35px auto 15px;
	position: relative;
	border-radius: 50%;
	box-shadow: 0 5px 20px 0 rgba(0,0,0,0.2);
}
.rev_item>p{
	padding: 0 20px
}
.rev_item>p.name{
	color: #a8a9aa;
	margin-top: 10px;
}

.reviews .owl-prev,
.reviews .owl-next{
	width: 60px;
	height: 60px;
	background: url(../images/rev_arrow.png) 0% 50% no-repeat, rgba(133, 192, 12, 0.5);
	border-radius: 0 12px 12px 0;
	position: absolute;
	top: 210px;
}
.reviews .owl-prev{
	left: 0;
}
.reviews .owl-next{
	background-position: 100% 50%;
	right: 0;
	border-radius: 12px 0 0 12px;
}

.reviews .owl-dots{
	font-size: 0;
	text-align: center;
	margin-top: 25px;
}
.reviews .owl-dot{
	width: 60px;
	height: 15px;
	display: inline-block;
	vertical-align: top;
	margin: 0 10px;
	border: 3px solid #fff;
	border-radius: 8px;
}
.reviews .owl-dot.active{
	background: #fff;
}

.sect7 .button-m{
	margin-top: 30px;
}


/*sect8*/
.sect8 .title>span{
	display: block;
}

.order_list{
	padding: 0 30px;
}
.order_list>li{
	display: table;
	width: 100%;
	margin-bottom: 30px;
}
.order_list>li .img{
	width: 80px;
	display: table-cell;
	vertical-align: middle;
}
.order_list>li .img>img{
	display: block;
	margin: 0 auto;
	border-radius: 12px;
}
.order_list>li .text{
	padding-left: 20px;
	display: table-cell;
	vertical-align: middle;
}
.order_list>li .text>span{
	font-weight: 700;
	display: block;
	margin-bottom: 3px;
	text-transform: uppercase;
}
.order_list>li:last-child{
	margin-bottom: 0;
}


/*bottom_offer*/
.bottom_offer .box{
	min-height: 250px;
}

.bottom_offer .formbox{
	padding: 5px 5px 30px;
}
.bottom_offer .timer{
	padding: 20px 0 25px;
	background: #f8f9fa;
}

.formbox>h4{
	text-align: center;
	font-size: 25px;
	line-height: 1.1em;
	margin-bottom: 4px;
}
.formbox>h4+p{
	text-align: center;
	padding: 0 20px;
	margin-bottom: 25px;
}
.formbox>h4+p>span{
	display: block;
	color: #2885d2;
}

/* footer */
.footer_section {
	padding: 25px 0;
	background: #fff;
	font-size: 14px;
	line-height: 24px;
	text-align: center;
}

.footer_section img {
	display: block;
	margin: 0 auto 10px auto;
}

.footer_section a {
	color: #222;
	display: block;
}`

class LandingService {

    get zipName() {
        return path.join(zipPath, landingName)+'.zip';
    }

    async createLandingDir() {
        // const landingName = (Math.random() + 1).toString(36).substring(7);
        fsPromise.mkdir(landingDir, { recursive: true })
        .then(() => {
            fsPromise.mkdir(path.join(landingDir, 'css'))
            .then(() => {
                fsPromise.writeFile(path.join(landingDir, dataCss, 'styles.css'), ' ');
            })
            .catch((err) => {
            if(err) console.log(err);
            });
        })
        .then(() => {
            fsPromise.mkdir(path.join(landingDir, 'js'))
            .then(() => {
                fsPromise.writeFile(path.join(landingDir, 'js', 'main.js'), ' ')
            })
            .catch((err) => {
            if(err) console.log(err);
            });
        })
        .then(() => {
            fsPromise.mkdir(path.join(landingDir, 'images'))
            .catch((err) => {
            if(err) console.log(err);
            });
        })
        .then(() => {
                fsPromise.writeFile(path.join(landingDir, 'index.html'), data)
                .catch((err) => {
                        if(err) console.log(err);
                    });
        })
        .catch((err) => {
            if(err) console.log(err);
        });
    }

    async landingUpdate() {

    }

    async landingDelete() {
        lignator.remove(landingDir);
    }

    async landingToZip() {
        await zip(path.join(landingDir), this.zipName);
    }
};

export default new LandingService();
