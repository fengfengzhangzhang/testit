$(function(){
	var pros=$(".product_select");
	var obj;
	flag=1;
	$.get("json/prolist1.json",function(str){
		obj=str;
		adds(obj);
	});

	
	
	function adds(obj){
		var n=0;
		for(var key in obj){
			n++;
			var prot=$("<div>").addClass("select_type").appendTo(pros);	
			 prot.css({height:40});
			 if(n==4){
			 	prot.addClass("zhu")
			 	prot.css({height:0});
			 }
			var spans=$("<span>").html(obj[key].tiltle).appendTo(prot);
			var as=$("<a href='#'>全部</a>").addClass("effect_all").appendTo(prot);
			var uls=$("<ul>").addClass("show_select_detail").appendTo(prot);
			if(n==1||n==2){
			var $more=$("<div/>").addClass("more").appendTo(uls);
			}
			//console.log(obj[key].proname.length)
			for(var i=0;i<obj[key].proname.length;i++){
				var lis=$("<li>").appendTo(uls);
				var ass=$("<a href='#'></a>").html(obj[key].proname[i]).addClass("effect").appendTo(lis);
			}
			getopen(prot);
			function getopen(prot){
				var prot=prot
					return	$more.click(function(){
						if(flag==1){
						prot.css({height:"100%"});
						$(this).css({background:"url(images/nomore1.jpg)"});
						flag=2;
						}else{
						prot.css({height:40});
						$(this).css({background:"url(images/more1.jpg)"})
						flag=1;
						}
					})
			}
		}
		var flag2=1;
		//console.log($(".zhu"))
		var foo=$("<div>").addClass("more2").appendTo(pros)
		foo.click(function(){
			if(flag2==1){
			$(".zhu").css({height:"100%"});
			$(this).css({background:"url(images/nomore2.jpg)"});
			flag2=2;
			}else{
			$(".zhu").css({height:0});
			$(this).css({background:"url(images/more2.jpg)"})
			flag2=1;
			}
		});
	}
	
})

//以上是商品列表的的商品名jS特效实现；
$(function(){
	var oul=$(".list_box");
	var obj;
	$.get("json/prolist3.json",function(str){
		obj=str;
		adds(obj);
	})
	function adds(obj){
		var n=0;
		for(var key in obj){
			n++;
			var oli=$("<li>").appendTo(oul);
			var odivs=$("<div>").addClass("pro_list").appendTo(oli);
			var ops=$("<p>").addClass("p_img").appendTo(odivs);
			var img=$("<img>").attr({src:obj[key].name[0]});
			img.appendTo(ops);
			var ops2=$("<p>").html(obj[key].name[1]).addClass("p_name").appendTo(odivs);
			var odivs2=$("<div>¥"+obj[key].name[2]+"<span>¥"+obj[key].name[3]+"</span>"+"</div>").addClass("p_price").appendTo(odivs);
			var ops3=$("<p>").addClass("clearall").appendTo(odivs);
			var spans=$("<span>").html("最近"+obj[key].name[4]+"人成交").appendTo(ops3);
			var ops4=$("<p>好评率<span>100%</span></p>").addClass("goodspeek").appendTo(odivs);
			var inputs=$("<input>").addClass("list_bt").appendTo(ops3);
			
			//旁边盒子的样式
		
			var box=$("<div>").addClass("tipBox").appendTo(oli);
				if(n==1||n==2){
					box.addClass("tipBox1");
				}else if(n==3||n==4){
					box.addClass("tipBox2");
					if(n==4){
						n=0;
					}
				}
			
			var box_1=$("<div>").addClass("p_hover_info").appendTo(box);
			var p1=$("<p>").addClass("info_top clearfix").appendTo(box_1);
			var sp1=$("<span>正品保证</span>").addClass("t1").appendTo(p1);
			var sp2=$("<span>30天退货</span>").addClass("t2").appendTo(p1);
			var sp3=$("<span>闪电发货</span>").addClass("t3").appendTo(p1);
			var sp4=$("<span>官方保障</span>").addClass("t4").appendTo(p1);
			
			var star=$("<div>").addClass("star_score").appendTo(box_1);
 			var clearfix=$("<div>").addClass("clearfix list_kouobei_info").appendTo(star);
			var tex=$("<div>好评率<strong>100%</strong></div>").addClass("text").appendTo(clearfix);
			var rat=$("<div></div>").addClass("rat").appendTo(clearfix);
			var sp5=$("<span>").appendTo(rat);
			var rat2=$("<div><span></span></div>").addClass("tag clearfix").appendTo(star);
		var rat2=$("<div><p>0篇评价</p></div>").addClass("picwall").appendTo(box_1);


			var box_2=$("<div><label>◆</label><span>◆</span></div>").addClass("tipbox-direction t1").appendTo(box);
			var kuang=$("<div>").addClass("kuang").appendTo(oli)
			ho(kuang,box,ops4);
			function ho(kuang,box,ops4){
				return oli.hover(function(){
				kuang.css({border:"2px solid #f00"})
				box.css({display:"block"})
				ops4.css({display:"block"})
				},function(){
				box.css({display:"none"})
				kuang.css({border:"0"})
				ops4.css({display:"none"})
			});
				
				
			}
		};
	};
	
})


$(function(){
	var lefts=$(".leftAll");
	var list_w=$("<div>").addClass("zl").appendTo(lefts);
	var obj;
	$.get("json/prolist2.json",function(str){
		obj=str;
		adds(obj);
		
	})
	var flag=1;
	function adds(obj){
		for(var key in obj){
			var hs=$("<h2>").addClass("hs").appendTo(list_w);
			var as=$("<a>").html(obj[key].tiltle).addClass("tilt").appendTo(hs);
			var spans=$("<span>").addClass("ops").appendTo(hs);
			var uls=$("<ul>").addClass("prolis_z").appendTo(list_w);
			for(var i=0;i<obj[key].pros.length;i++){
			var this_pros=$("<li>").addClass("this_pros").appendTo(uls);
			var apro=$("<a href='#'></a>").html(obj[key].pros[i]).appendTo(this_pros);
			}
				changes(uls);
				function changes(uls){
					var uls=uls;
					return spans.click(function(){
					if(flag==1){
					$(this).css({background:"url(images/list_open.jpg) no-repeat"});
					uls.css({display:"block"})
					flag=2;
					}else{
					$(this).css({background:"url(images/list_close.jpg) no-repeat"})
					uls.css({display:"none"})
					flag=1;
					}
					});
				}
			
			
		};
		
	}
});


$(function(){
	var lefts=$(".leftAll");
	var ranklist1=$("<div>").addClass("rankList").appendTo(lefts);
	var h2_1=$("<h2>全国热销排行</h2>").addClass("hot_title").appendTo(ranklist1);
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
	var lefts=$(".leftAll");
	var ranklist1=$("<div>").addClass("rankList").appendTo(lefts);
	var h2_1=$("<h2>全国热销排行</h2>").addClass("hot_title").appendTo(ranklist1);
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
	var lefts=$(".leftAll");
	var ranklist1=$("<div>").addClass("rankList").appendTo(lefts);
	var h2_1=$("<h2>全国热销排行</h2>").addClass("hot_title").appendTo(ranklist1);
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



















