var scroly = 0;
var scrolx = 0;
var pageW = 0;
var pageH = 0;

function resize(){
	scroly = parseInt(window.pageYOffset);
	scrolx = parseInt(window.pageXOffset);
	var pageW = window.innerWidth;
	var pageH = window.innerHeight;
	if ((pageW/pageH)>3.77){
		document.body.style.backgroundSize = (pageW-17)+'px '+(pageW/1.82)+'px';		
		document.body.style.backgroundPosition = '0px 0px';
		document.body.style.padding = pageW/211+'px';
		document.getElementById('rh').style.width = (pageW/2-9)+'px';
		document.getElementById('rh').style.marginLeft = pageW/11+'px';
		document.getElementById('rh').style.height = (pageW/3.5-11)+'px';
		document.getElementById('logotexto').style.height = (pageW/3.6-12)+'px';
		document.getElementById('logotexto').style.width = (pageW/2.87-6)+'px';
		document.getElementById('rhlogo').style.width = pageW/3.6+'px';
		document.getElementById('rhlogo').style.height = pageW/9+'px';
		document.getElementById('texto').style.width = (pageW/3.1-10)+'px';
		document.getElementById('texto').style.height = (pageW/6.8-12)+'px';
		document.getElementById('texto').style.fontSize = (pageW/86+3)+'px';
		document.getElementById('texto').style.marginLeft = pageH/36+'px';
		$('.boton').css('font-size',pageW/45-1);
		$('.boton').css('width',pageW/6.6-4);
		$('.boton').css('height',pageW/73);
		$('.boton').css('padding-top',pageW/60);
		document.getElementById('botonmenu1').style.top = pageW/18+'px';
		document.getElementById('botonmenu2').style.top = pageW/10.5+'px';
		document.getElementById('botonmenu2').style.height = pageW/63+'px';
		document.getElementById('botonmenu2').style.paddingTop = pageW/70+'px';
		document.getElementById('botonmenu3').style.top = pageW/7.4+'px';
		document.getElementById('botonmenu4').style.top = pageW/5.65+'px';
		document.getElementById('botonmenu5').style.top = pageW/4.55+'px';
	}
	else if ((pageW/pageH)>1.777){
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundPosition = '0px 0px';
		document.body.style.padding = pageW/211+'px';
		document.getElementById('rh').style.width = (pageW/2)+'px';
		document.getElementById('rh').style.marginLeft = pageW/11+'px';
		document.getElementById('rh').style.height = (pageH/1.04-8)+'px';
		document.getElementById('logotexto').style.height = (pageH/1.04-12)+'px';
		document.getElementById('logotexto').style.width = pageW/2.85+'px';
		document.getElementById('rhlogo').style.width = pageW/3.6+'px';
		document.getElementById('rhlogo').style.height = pageW/9+'px';
		document.getElementById('texto').style.width = (pageW/3.1-8)+'px';
		document.getElementById('texto').style.height = (pageH/1.04-pageW/7.8-12)+'px';
		document.getElementById('texto').style.fontSize = (pageW/86+3)+'px';
		document.getElementById('texto').style.marginLeft = pageH/36+'px';
		$('.boton').css('font-size',pageW/45-1);
		$('.boton').css('width',pageW/6.7);
		$('.boton').css('height',pageW/62);
		$('.boton').css('padding-top',pageW/60);
		document.getElementById('botonmenu1').style.top = pageW/17.8+'px';
		document.getElementById('botonmenu2').style.top = pageW/10.2+'px';
		document.getElementById('botonmenu2').style.paddingTop = pageW/70+'px';
		document.getElementById('botonmenu3').style.top = pageW/7.3+'px';
		document.getElementById('botonmenu4').style.top = pageW/5.59+'px';
		document.getElementById('botonmenu5').style.top = pageW/4.5+'px';
	}
	else if ((pageW/pageH)>1.066){
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundPosition = '0px 0px';
		document.body.style.padding = pageH/111+'px';
		document.getElementById('rh').style.width = (pageH/1.13)+'px';
		document.getElementById('rh').style.marginLeft = pageH/6+'px';
		document.getElementById('rh').style.height = (pageH/1.04-8)+'px';
		document.getElementById('logotexto').style.height = (pageH/1.04-12)+'px';
		document.getElementById('logotexto').style.width = (pageH/1.6-2)+'px';
		document.getElementById('rhlogo').style.width = pageH/2+'px';
		document.getElementById('rhlogo').style.height = pageH/5+'px';
		document.getElementById('texto').style.width = (pageH/1.8-4)+'px';
		document.getElementById('texto').style.height = (pageH/1.37-12)+'px';
		document.getElementById('texto').style.fontSize = (pageH/45+3)+'px';
		document.getElementById('texto').style.marginLeft = pageH/36+'px';
		$('.boton').css('font-size',pageH/25-1);
		$('.boton').css('width',pageH/3.8);
		$('.boton').css('height',pageH/43);
		$('.boton').css('padding-top',pageH/29-1);
		document.getElementById('botonmenu1').style.top = pageH/9.9+'px';
		document.getElementById('botonmenu2').style.top = pageH/5.75+'px';
		document.getElementById('botonmenu2').style.height = pageH/35+'px';
		document.getElementById('botonmenu2').style.paddingTop = pageH/35-1+'px';
		document.getElementById('botonmenu3').style.top = pageH/4.1+'px';
		document.getElementById('botonmenu4').style.top = pageH/3.13+'px';
		document.getElementById('botonmenu5').style.top = pageH/2.52+'px';
	}
	else{
		document.body.style.backgroundSize = (pageH*1.72)+'px '+(pageH-17)+'px';		
		document.body.style.backgroundPosition = '0px 0px';
		document.body.style.padding = pageH/111+'px';
		document.getElementById('rh').style.width = (pageH/1.1)+'px';
		document.getElementById('rh').style.marginLeft = pageH/6+'px';
		document.getElementById('rh').style.height = pageH/1.07-8+'px';
		document.getElementById('logotexto').style.height = pageH/1.07-12+'px';
		document.getElementById('logotexto').style.width = pageH/1.69+'px';
		document.getElementById('rhlogo').style.width = pageH/2-4+'px';
		document.getElementById('rhlogo').style.height = pageH/5-2+'px';
		document.getElementById('texto').style.width = (pageH/1.9-4)+'px';
		document.getElementById('texto').style.height = pageH/1.42-12+'px';
		document.getElementById('texto').style.fontSize = (pageH/45+3)+'px';
		document.getElementById('texto').style.marginLeft = pageH/36+'px';
		$('.boton').css('font-size',pageH/25-1);
		$('.boton').css('width',pageH/3.9);
		$('.boton').css('height',pageH/33-2);
		$('.boton').css('padding-top',pageH/31-2);
		document.getElementById('botonmenu1').style.top = pageH/10.2+'px';
		document.getElementById('botonmenu2').style.top = pageH/5.8-3+'px';
		document.getElementById('botonmenu2').style.paddingTop = pageH/35-1+'px';
		document.getElementById('botonmenu3').style.top = pageH/4.05-4+'px';
		document.getElementById('botonmenu4').style.top = pageH/3.13-5+'px';
		document.getElementById('botonmenu5').style.top = pageH/2.54-5+'px';		
	}
	if (pageW/2.7 < 240)
		document.getElementById('dewplayer-multi').style.width = (pageW/2.7)+'px';
	else
		document.getElementById('dewplayer-multi').style.width = 240+'px';

	$('span').css('opacity','1');
	document.body.style.backgroundPosition = '-'+scrolx+'px '+'-'+scroly+'px';
}

window.onscroll = desplazar;
function desplazar(){
	scrolx = parseInt(window.pageXOffset);
	scroly = parseInt(window.pageYOffset);
	document.body.style.backgroundPosition = '-'+scrolx+'px '+'-'+scroly+'px';
	document.getElementById('dewplayer-multi').style.right = (-scrolx+5)+'px';
}
