$(function(){
	var small=$(".pro_small");
	var mask=$(".mask");
	var big=$(".pro_big");
	var img=$(".pro_big img");
			mask.hide();
			big.hide();
		small.mouseover(function(){
			mask.show();
			big.show();
		 });
		 small.mouseout(function(){
			mask.hide();
			big.hide();
		 });
		 small.mousemove(function(e){
		 	var scrolltop=$(document).scrollTop();
			var left=e.clientX-mask.outerWidth()/2-small.offset().left;
			var top =e.clientY- mask.outerHeight()/2-small.offset().top+scrolltop;
			 if(left<0){
				 left=0;
			 }
			 if(top<0){
				 top=0;
			 }

			if(left>= small.outerWidth()-mask.outerWidth()){
				left= small.outerWidth()-mask.outerWidth()
			}
			if(top>= small.outerHeight()-mask.outerHeight()){
				top= small.outerHeight()-mask.outerHeight()
			}
			
			 mask.css({left:left,top:top});
			 
			var scale=3;
			 img.css({left:- left*scale,top:- top*scale});
			 
		 });
		 
		 var small_case=$(".small_case");
		 //console.log(small_case);
		 small_case.each(function(i){
		 	var n=++i;
		 	$(this).css({background:"url(images/detail"+n+".jpg) no-repeat",backgroundSize:"cover"});
		 	$(this).mouseover(function(){
			 	small.css({background:"url(images/detail"+n+".jpg) no-repeat",backgroundSize:"cover"});
			 	img.attr({src:"images/detail"+n+".jpg"});	
		 	});
		 })

});
//以上是放大镜特效；





$(function(){
	var lefts=$(".content_right");
	var ranklist1=$("<div>").addClass("rankList").appendTo(lefts);
	var h2_1=$("<h2 style=text-align:center>磨砂去角质</h2>").addClass("hot_title").appendTo(ranklist1);
	var obj;
	$.get("json/sublist1.json",function(str){
		obj=str;
		adds(obj);
	})
	function adds(obj){
		for(var key in obj){
		var dls=$("<dl>").appendTo(ranklist1);
		var dts=$("<dt>").appendTo(dls);
		var dds1=$("<dd>").addClass("p_name").appendTo(dls);
		var as1=$("<a href='#'></a>").appendTo(dts);
		var imgs=$("<img>").attr({src:obj[key].name[0]}).appendTo(as1);
		var as2=$("<a href='#'></a>").html(obj[key].name[1]).appendTo(dds1);
		var dds2=$("<dd>"+obj[key].name[2]+"<span>"+obj[key].name[3]+"</span></dd>").addClass("p_price").appendTo(dls);

		}
	}

});
$(function(){
	var lefts=$(".content_right");
	var ranklist1=$("<div>").addClass("rankList").appendTo(lefts);
	var h2_1=$("<h2 style=text-align:center>猜你喜欢</h2>").addClass("hot_title").appendTo(ranklist1);
	var obj;
	$.get("json/sublist2.json",function(str){
		obj=str;
		adds(obj);
	})
	function adds(obj){
		for(var key in obj){
		var dls=$("<dl>").appendTo(ranklist1);
		var dts=$("<dt>").appendTo(dls);
		var dds1=$("<dd>").addClass("p_name").appendTo(dls);
		var as1=$("<a href='#'></a>").appendTo(dts);
		var imgs=$("<img>").attr({src:obj[key].name[0]}).appendTo(as1);
		var as2=$("<a href='#'></a>").html(obj[key].name[1]).appendTo(dds1);
		var dds2=$("<dd>"+obj[key].name[2]+"<span>"+obj[key].name[3]+"</span></dd>").addClass("p_price").appendTo(dls);

		}
	}

});
$(function(){
	var lefts=$(".content_right");
	var ranklist1=$("<div>").addClass("rankList").appendTo(lefts);
	var h2_1=$("<h2 style=text-align:center>购买此商品的用户还购买</h2>").addClass("hot_title").appendTo(ranklist1);
	var obj;
	$.get("json/sublist3.json",function(str){
		obj=str;
		adds(obj);
	})
	function adds(obj){
		for(var key in obj){
		var dls=$("<dl>").appendTo(ranklist1);
		var dts=$("<dt>").appendTo(dls);
		var dds1=$("<dd>").addClass("p_name").appendTo(dls);
		var as1=$("<a href='#'></a>").appendTo(dts);
		var imgs=$("<img>").attr({src:obj[key].name[0]}).appendTo(as1);
		var as2=$("<a href='#'></a>").html(obj[key].name[1]).appendTo(dds1);
		var dds2=$("<dd>"+obj[key].name[2]+"<span>"+obj[key].name[3]+"</span></dd>").addClass("p_price").appendTo(dls);

		}
	}

});

//以上是右侧边栏的样式设置


$(function(){
	var img=$(".xz_adv img");
	var oli=$(".tab");
	var arr=[];
//	定义数组保存所有图片的背景图
	oli.each(function(j){
		//console.log(oli.eq(j).css("backgroundImage"))
		arr.push(oli.eq(j).css("backgroundImage").substr(oli.eq(j).css("backgroundImage").indexOf("images")));
		//或者通过以下方法来查找得到图片格式的下标来剪切字符串
		//console.log(oli.eq(j).css("backgroundImage").substr(oli.eq(j).css("backgroundImage").indexOf("images")))
	})
	//console.log(arr);
	oli.each(function(i){
		oli.eq(i).mouseover(function(){
//			鼠标移入所有背景图重置原始位置
			oli.each(function(j){
			oli.eq(j).css({background:"url("+arr[j]});
			//console.log(arr[j])
			});
			var n=i+1;
			$(this).css({background:"url(images/hadv"+n+".jpg) no-repeat"})
			img.eq(i).show(0).siblings().hide(0);
		});
	});
	
});

//以上是鼠标移入选项卡的设置；
$(function(){
	var sus=$(".suspended_nav");
	//console.log(sus.offset().top)
	$(document).scroll(function(){
		var scrolltop=$(document).scrollTop();
		if(scrolltop>=692){
		sus.css({position:"fixed",top:0})
		}else{
		sus.css({position:"absolute",top:692})
		}
	});
	var shu1=$(".shu_1");
	var shu2=$(".shu_2");
	var shu3=$(".shu_3");
	var shu4=$(".shu_4");
	var shu5=$(".shu_5");
	shu1.click(function(){
		$(this).addClass("active2").parent().siblings().find("a").removeClass("active2");
		$("html body").animate({scrollTop:692},100);
	});
	shu2.click(function(){
		$(this).addClass("active2").parent().siblings().find("a").removeClass("active2");
		$("html body").animate({scrollTop:820},100);
	});
	shu3.click(function(){
		$(this).addClass("active2").parent().siblings().find("a").removeClass("active2");
		$("html body").animate({scrollTop:5460},100);
	});
	shu4.click(function(){
		$(this).addClass("active2").parent().siblings().find("a").removeClass("active2");
		$("html body").animate({scrollTop:5990},100);
	});
	shu5.click(function(){
		$(this).addClass("active2").parent().siblings().find("a").removeClass("active2");
		$("html body").animate({scrollTop:6920},100);
	});
});
//以上是详情页的楼梯效果；

$(function(){
	var sub_num=$(".sub_num");
	var add_num=$(".add_num");
	var n=1;
	sub_num.click(function(e){
			e.preventDefault();
			n=$(this).next().find("input").val();
			if(n==1){
				n=2;
			}
			$(this).next().find("input").val(--n);
	});
	add_num.click(function(e){
			e.preventDefault();
			n=$(this).prev().find("input").val();
			$(this).prev().find("input").val(++n);
	});
	

	
	var buy_cars=$(".buy_cars");
	buy_cars.click(function(){
		var proname=JSON.stringify({id:1,ims:"images/detail1.jpg",nas:"相宜本草去死皮膏68g",pris:"29.00",pcs:n,scors:n*29,prices:n*29.00+".00"})
		setcookie("pro",proname,7);
		
		//var str=getcookie("pro");
		//console.dir(typeof str);
		//var cc=JSON.parse(str);
		//console.log(typeof cc.ims);
		//总价计算
		
		
	});
		
});
