$(function(){
	var $oli=$(".content_brand li")
	var $brand=$(".brand_show")
	$oli.hover(function(){
		var i=$(this).index();
		$brand.eq(i).stop().animate({top:0},300)
	},function(){
		var i=$(this).index();
		$brand.eq(i).stop().animate({top:97},300)
	})
	
});

//公告事件
z
$(function(){
	var $affiche=$(".affiche span");
	clearInterval(timer);
	var timer=setInterval(function(){
		$affiche.animate({top:-60},800,function(){
			$affiche.animate({top:0},0);
		})
	},3000)  
	
});
//特卖钟表倒计时
$(function(){
	var $bs=$(".time");
	setInterval(function(){
		daoji();
	},200)
	
	
	function daoji(){
		var datestar=Date.parse(new Date());
		var dateend=Date.parse("2016-12-07");
		var cha=Math.abs(datestar-dateend);
		var dd=24*60*60*1000;
		var hh=60*60*1000;
		var mm=60*1000;
		var ss=1000;
		var day=Math.floor(cha/dd);
		var hour=Math.floor((cha-(day*dd))/hh);
		var mn=Math.floor((cha-(day*dd)-(hour*hh))/mm);
		var sn=Math.floor((cha-(day*dd)-(hour*hh)-(mm*mn))/ss);
		
		if(hour<10){
			hour="0"+hour;
			}
		if(mn<10){
			mn="0"+mn;
			}
		if(sn<10){
			sn="0"+sn;
			}
		
		$bs.each(function(i){
			$(this).find("b").eq(0).html(day)
			$(this).find("b").eq(1).html(hour)
			$(this).find("b").eq(2).html(mn)
			$(this).find("b").eq(3).html(sn)
		})
	}
});

//品牌图片加载
$(function(){
	var $content3=$(".content3")
	var $oul=$("<ul>").addClass("hot_li").appendTo($content3);
	//console.log($content3)
		var obj;
		$.get("json/index.json",function(str){
			obj= str;
			adds(obj);
	
		});

	function adds(obj){
		for(var key in obj){
			var $oli=$("<li>").appendTo($oul);	
			var $odiv=$("<div>").addClass("hot_img").appendTo($oli)	;
			var $as=$("<a>").appendTo($odiv);
			var $imgs=$("<img>");
			//console.log(obj[key].name[0])
				$imgs.attr({src:obj[key].name[0]});
			$imgs.appendTo($as);			
			var $odiv1=$("<div>");
			$odiv1.html(obj[key].name[1]).addClass(obj[key].name[2]).appendTo($odiv);
			var $h2s=$("<h2>").appendTo($odiv);
			var $ass=$("<a>").html(obj[key].name[3]).appendTo($h2s);
			var ps=$("<p>").html(obj[key].name[4]).appendTo($odiv);
			var div3=$("<div>").addClass("sale_price").appendTo($odiv);
			var span1=$("<span><strong>"+obj[key].name[8]+"</strong>人已购买</span>").addClass("sale_num").appendTo(div3);
			var span2=$("<span><dfn>¥</dfn>"+obj[key].name[5]+"</span>").addClass("priced").appendTo(div3);
			var dels=$("<del><dfn>¥</dfn>"+obj[key].name[6]+"</del>").addClass("price").appendTo(div3);
			var span3=$("<span>").html(obj[key].name[7]).addClass("discount").appendTo(div3);
			var a3=$("<a>立即抢购</a>").addClass("sale_buy").appendTo($odiv);
			
			
			
			//旁边盒子的样式
			var box=$("<div>").addClass("tipBox").appendTo($oli);
			var box_1=$("<div>").addClass("p_hover_info").appendTo(box);
			var p1=$("<p>正品保证</p>").addClass("t1")
			
			
			var box_2=$("<div><label>◆</label><span>◆</span></div>").addClass("tipbox-direction t1").appendTo(box);
			
			
			
		}
	}
});

$(function(){
	var $navbar=$(".navbar");
	var $toolbar=$(".toolbar");
	var $returntop=$("#za3");
	$navbar.hide();
	$toolbar.hide();
	var scrolltop=$(document).scrollTop();

	$(document).scroll(function(){
		scrolltop=$(document).scrollTop();
		//console.log(scrolltop);
		if(scrolltop>=700){
			$navbar.show();
			$toolbar.show();
		}else{
		$navbar.hide();
		$toolbar.hide();
		}
	});
	
	$returntop.click(function(){
		$("html").animate({scrollTop:0},400);
	});
});










