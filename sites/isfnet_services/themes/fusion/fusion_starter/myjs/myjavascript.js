/*
this.pageNumber=1;
function RememberPageNumber(temp)
{
	document.getElementById("menu"+pageNumber).style.backgroundImage="url('')";
	document.getElementById("menu"+pageNumber).style.color="#333";
	pageNumber=temp;
	document.getElementById("menu"+pageNumber).style.backgroundImage="url('img/menu1.jpg')";
	document.getElementById("menu"+pageNumber).style.color="#eee";
}
function OverMenuPage(temp)
{
	$(document).ready(function(){  
		$(".panel"+temp).fadeIn(500,function(){
			$(".panel"+temp).animate({top:105},"fast");
		});	
		OutMenuPage(12,temp);	
	});
}
function OutMenuPage(temp2,temp)
{
	if(temp2==11||temp2==12)
	{
		$(document).ready(function(){
			for(i=2;i<=6;i++)
			{
				if(temp2==12&&i==temp)continue;
				$(".panel"+i).fadeOut(300,function(){
					$(".panel"+i).css("top","120");
				});
			}
		});
		return;  
	} 
	$(".panel").fadeOut(300,function(){
		$(".panel").css("top","120");
	});
}
function OverSubMenuPage(temp)
{
	$(document).ready(function(){  
		$(".panel"+temp).fadeIn(500);
	});
}
function OutSubMenuPage(temp)
{
	$(document).ready(function(){  
		$(".panel"+temp).fadeOut(300);
	});
}
//////////// Toggle Sitemap //////////////
function ToggleSlide(temp)
{
	$(document).ready(function(){
		$("#subflip"+temp).slideToggle("slow");
	});
}
*/
///////////// synapsys-vn.com 21/12/2011 ////////////
/*
function OverBannerItems(temp)
{
	$(document).ready(function(){  
		$(".thumb-"+temp).fadeIn(500,function(){
			$(".thumb-"+temp).animate({height:162},"fast");
			$(".item-"+temp).animate({top:-142},"fast");
			$("#biz-image").css("background","url(/drupal-6.22/sites/all/themes/fusion/fusion_core/css/banner/biz-banner-image-"+temp+".jpg) top right no-repeat #FFFFFF");
			$(".banner-title-"+temp).css({"background":"#2ba5da"});
			$(".item-"+temp).css({"border":"#2ba5da 1px solid"});
		});	
	});
}
function OutBannerItems(temp)
{
	$(document).ready(function(){  
		$(".thumb-"+temp).fadeIn(500,function(){
			$(".thumb-"+temp).animate({height:20},"fast");
			$(".item-"+temp).animate({top:0},"fast");
			$(".banner-title-"+temp).css({"background":"#e25325"});
			$(".item-"+temp).css({"border":"#e25325 1px solid"});
		});	
	});
}
*/
///////////// synapsys-vn.com 10/02/2012 ////////////
this.temp=1;
this.mheight=0;
function HideShowBannerItems()
{
	$(document).ready(function(){  
		temp=1-temp;
		if(temp==0)
		{
			mheight=$(".collapse_ct").css("height");
			$(".container_ct").fadeOut(700,function(){
				$(".collapse_ct").animate({height:0},700);
				$(".viewall_ct").css("background","url(../images/viewall_ct_2.jpg) no-repeat top right #ef0000;");
			});	
		}
		else
		{
			$(".collapse_ct").animate({height:mheight},700,function(){
				$(".container_ct").fadeIn(700);
				$(".viewall_ct").css("background","url(../images/viewall_ct_1.jpg) no-repeat top right #ef0000;");																				
			});
		}
	});
}