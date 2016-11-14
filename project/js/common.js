 	$(function(){
		var $car=$(".my_car");
		var $odiv=$(".odiv")
		var $as=$(".my_car a")
		$car.hover(function(){
			$odiv.show();
			$as.css({background:"#E73A77"})
		},function(){
			$odiv.hide();
			$as.css({background:""})
		});
		
	});
		
		
		
//以上是导航购物车栏		
		$(function(){
			$d1=$("#d1");
			$dot=$(".dot")
			$dots=$(".dot span");
			$oli=$("#d1 li");
			$pre=$(".pre");
			$next=$(".next");
			$oli.eq(0).css({zIndex:1})
			$dot.css({zIndex:2})
			$pre.css({zIndex:3})
			$next.css({zIndex:3})
			
		//定义K来确定每张图片的下标；
			var k=0;
		
		//向左走
			function fn1(){
				k--;
				if(k==-1){
				k=$oli.size()-1;
				}
				play(k);
			}
		//向右走
			function fn2(){
				k++;
				if(k==$oli.size()){
				k=0;
				}
				play(k);
			}		
	//点击事件
			$pre.click(function(){
				 fn1();
			});
			$next.click(function(){
				fn2();
			});
		
	//自动播放事件
		var timer=setInterval(fn2,4000)
		//鼠标移入事件；	
		$d1.mouseover(function(){
			clearInterval(timer);
			$pre.stop().animate({left:200,opacity:1},1000);
			$next.stop().animate({right:200,opacity:1},1000);
		})
		$d1.mouseout(function(){
			timer=setInterval(fn2,2000)			
			$pre.stop().animate({left:80,opacity:0},1000);
			$next.stop().animate({right:80,opacity:0},1000);
		})
	//点击小点的
		$dots.click(function(){
			//clearInterval(timer);
			k=$(this).index();
			play(k);
			
		})
		//定义动画变化函数
			function play(k){
			$oli.eq(k).animate({opacity:1},200).siblings().css({opacity:0},200);
			$dots.eq(k).addClass("active").siblings().removeClass("active");	
			}
		});
		
//以上是轮播图的js代码

			$(function(){
				var obj;
				$.get("json/subnav.json",function(str){
					obj= str;
					addContent(obj);
				})
				
				var $lis=$(".subnav li");
				function addContent(obj){
					var n=0
					for(var key in obj){
						var $subbox=$("<div>");
						$subbox.addClass("subbox");
						$lis.eq(n).append($subbox);
						
						for(var i=0;i<obj[key].title.length;i++){
							var $odl=$("<dl>");
							var $odt=$("<dt>");
							var $as=$("<a>"+obj[key].title[i]+"</a>")
							$odt.addClass("sub_dt");
							$odt.append($as);
							$odl.append($odt);
							
							$odl.addClass("sub_dl");
							$subbox.append($odl);
							//创建dd
							var  $odd=$("<dd>")
							$odd.addClass("sub_dd");
							$odl.append($odd);
							//创建dd中的a；
							//for(var j=0;j<obj[key].pros.length;j++){
								for(var k=0;k<obj[key].pros[i].length;k++){
									var $als=$("<a>"+obj[key].pros[i][k]+"</a>")
									$odd.append($als);
								}
								
							//}
						}
						//先隐藏所有的subbox；
						$subbox.hide();
						n++;
					}
					//添加鼠标事件
					var $suboxs=$(".subbox");
					var $spans=$(".subnav li span");
					//console.log($suboxs)
					$lis.each(function(i){
						var that=$(this);
						$(this).hover(function(){
				$(this).css({backgroundColor:"#f9f9f9"})
				$spans.eq(i).css({backgroundPosition:-40*i+"px"+" "+"-100px"})
							$suboxs.eq(i).show().stop().animate({left:200},400);
							//盒子移动到left200
							//console.log($suboxs.eq(i))
						},function(){
				$spans.eq(i).css({backgroundPosition:-40*i+"px"+" "+"-60px"})
							$(this).css({background:"#fff"})
							$suboxs.eq(i).hide().stop().animate({left:196},0);
							//console.log($suboxs.eq(i))
						})
						
						
				//外面大盒子的鼠标事件；		
						$suboxs.eq(i).mouseover(function(){
							//that.css({background:"#f9f9f9"})
							$suboxs.eq(i).show();
							
							//console.log($suboxs.eq(i))
						})
						$suboxs.eq(i).mouseout(function(){
							$spans.eq(i).css({backgroundPosition:-40*i+"px"+" "+"-60px"})
							that.css({background:"#fff"})
							$suboxs.eq(i).hide();
							//console.log($suboxs.eq(i))
						})
								
					});
				}
			});
			

//以上是subnav的js特效文件
$(function(){
	var wai=$(".wai");
	wai.hide();
	var conti=$(".btn-cancel");
	var intocart=$(".buy_cars");
	var close=$(".close");
	close.click(function(){
		wai.hide();
	});
	conti.click(function(){
		wai.hide();
	});
	intocart.click(function(){
		wai.show()
	});
});


























