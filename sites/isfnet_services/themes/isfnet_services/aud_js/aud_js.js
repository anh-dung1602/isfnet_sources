// JavaScript Document
this.browser='ie';
this.banner_shift=1;
function checkBrowser()
{
	if (window.XMLHttpRequest)
	{
		browser='ff';
	}
	if (window.ActiveXObject)
	{
		browser='ie';
	}
return null;
}
function callBackFunction1()
{
	banner_shift+=1;
	if(banner_shift==5)banner_shift=1;
	//$('.aud_shaddow_container').html(eval('aud_string_'+banner_shift));
	if($('#aud_banner_img_1').css("left")=='0px')
	{
		$('#aud_banner_img_2').html('<img src="/isfnet/sites/default/files/images/bn_'+banner_shift+'.jpg" />');
		$('#aud_banner_img_2').css({"left":"965px"});
		$('#aud_banner_img_1').css({"left":"0px"});
		$('#aud_banner_img_1').animate({left:-965},"slow");
		$('#aud_banner_img_2').animate({left:0},"slow");
	}
	else
	{
		$('#aud_banner_img_1').html('<img src="/isfnet/sites/default/files/images/bn_'+banner_shift+'.jpg" />');
		$('#aud_banner_img_1').css({"left":"965px"});
		$('#aud_banner_img_2').css({"left":"0px"});
		$('#aud_banner_img_1').animate({left:0},"slow");
		$('#aud_banner_img_2').animate({left:-965},"slow");
	}
}
function callBackFunction2()
{
	banner_shift-=1;
	if(banner_shift==0)banner_shift=4;
	//$('.aud_shaddow_container').html(eval('aud_string_'+banner_shift));
	if($('#aud_banner_img_2').css("left")=='965px')
	{
		$('#aud_banner_img_2').html('<img src="/isfnet/sites/default/files/images/bn_'+banner_shift+'.jpg" />');
		$('#aud_banner_img_1').css({"left":"0px"});
		$('#aud_banner_img_2').css({"left":"-965px"});
		$('#aud_banner_img_1').animate({left:965},"slow");
		$('#aud_banner_img_2').animate({left:0},"slow");
	}
	else
	{
		$('#aud_banner_img_1').html('<img src="/isfnet/sites/default/files/images/bn_'+banner_shift+'.jpg" />');
		$('#aud_banner_img_1').css({"left":"-965px"});
		$('#aud_banner_img_2').css({"left":"0px"});
		$('#aud_banner_img_1').animate({left:0},"slow");
		$('#aud_banner_img_2').animate({left:965},"slow");		
	}
}
function load() 
{  
	checkBrowser();
	if(browser=="ie")
	{	
		document.getElementById("aud_previous").attachEvent("onclick", callBackFunction2);
		document.getElementById("aud_forward").attachEvent("onclick", callBackFunction1);	  
	}
	else
	{	
		document.getElementById('aud_previous').addEventListener("click", function(){callBackFunction2();}, false);
		document.getElementById('aud_forward').addEventListener("click", function(){callBackFunction1();}, false);
	}
}
