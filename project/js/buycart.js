$(function(){
		var str=getcookie("pro");
		//console.dir(typeof str);
		var cc=JSON.parse(str);
		console.log(cc);
		//总价计算
		var bodides=$(".cart_list_tab tbody");
		addcarts(cc.ims,cc.nas,cc.pris,cc.pcs,cc.scors,cc.prices);
function addcarts(ims,nas,pris,pcs,scors,prices){
	var trs=$("<tr>").addClass("cartltabtr").appendTo(bodides);
	var td1=$("<td align='left'><a href='javascript:;'target='_blank' class='cartltab_pro'><img src=images/detail1.jpg height='50' width='50'></a><a href='javascript:;' class='cartltab_proname'>相宜本草去死皮膏68g</a></td>").appendTo(trs);
		$(".cartltab_pro").find("img").attr({src:ims})
		$(".cartltab_proname").html(nas);
	
	var td2=$("<td class='price_per'>¥"+29.00+"</td>").appendTo(trs);		
		$(".price_per").html("¥"+pris);

	var td3=$("<td>0</td>").appendTo(trs);			
	var td4=$("<td><span class='cartltab_num1 decreaseCartProductNum'>-</span> <input class='cartltab_num updateCartProductNum' value='1' type='text' > <span class='cartltab_num2 increaseCartProductNum'>+</span></td>").appendTo(trs);
	$(".updateCartProductNum").val(pcs)
	var td5=$("<td class='scores'>"+29+"</td>").appendTo(trs);
		$(".scores").html(scors);
	
	var td6=$("<td class='sum_price'>¥"+29.30+"</td>").appendTo(trs);	
		$(".sum_price").html("¥"+prices);
	var td7=$("<td class='cart_caozuo'><a class='cct_list_num_2103 deleteGoodsFromCart' href='javascript:;'>删除</a><br></td>").appendTo(trs);
}





	getcntrol();
	function getcntrol(){
		//单价
		var price_per=$(".price_per").html();
		//切割字符串再取整；
		price_per1=parseInt(price_per.substr(1));
		
		//总价小计；
		price_pers=price_per.substr(1)*1;
		
		
	
		var lisnum1=$("#cartTotal").find("li").eq(0);
		var liscores=$("#cartTotal").find("li").eq(1);
		var cart_prices=$("#cartTotal").find("li").eq(3);
		
	//添加购物车
		//加
		var inc=$(".increaseCartProductNum")
		//减
		var del=$(".decreaseCartProductNum");
		var n;	
		var sumn;
		var sum_s;
		var sum_p;
		
	//得到数据的总和；	
		function getsc(){
			sumn=0;
			sum_s=0;
			sum_p=0;
			var  nums=$(".cart_list_tab tbody tr td").find(".updateCartProductNum");
			var  numsc=$(".cart_list_tab tbody tr").find(".scores");
			var numsp=$(".cart_list_tab tbody tr").find(".sum_price");
			for(var i=0;i<nums.length;i++){
				sumn+=nums.eq(i).val()*1;
				sum_s+=numsc.eq(i).html()*1;
				sum_p+=numsp.eq(i).html().substr(1)*1;
			}
			//改变cookie；
			var proname=JSON.stringify({ims:"images/detail1.jpg",nas:"相宜本草去死皮膏68g",pris:"29.00",scors:sum_s,prices:sum_p.toFixed(2),pcs:sumn})
			setcookie("pro",proname,7);
		}
	//初始化状态重置
		function getit(){
			getsc();
			$("#cartTotal").find("li").eq(0).html("商品数量总计："+sumn+"件");
			$("#cartTotal").find("li").eq(1).html("赠送积分总计："+sum_s+"分");
			$("#cartTotal").find("li").eq(3).html("¥"+sum_p.toFixed(2));
		
		}
		getit();	
	//删除购物车；	
		$(".deleteGoodsFromCart").each(function(i){
			$(this).click(function(){
				$(this).parent().parent().remove();
				getit();
				
				
			});
		})
		
	//调整商品的数量	
		del.click(function(e){
			e.preventDefault();
			n=$(this).next().val();
			if(n==1){
				n=2;
			}
			$(this).next().val(--n);
			$(this).parent().parent().find(".scores").html(price_per1*n);
			$(this).parent().parent().find(".sum_price").html("¥"+(price_pers*n*1).toFixed(2));
			getit();
			
		});
		inc.click(function(e){
			e.preventDefault();
			n=$(this).prev().val();
			$(this).prev().val(++n);
			$(this).parent().parent().find(".scores").html(price_per1*n);
			$(this).parent().parent().find(".sum_price").html("¥"+(price_pers*n*1).toFixed(2));
			
			getit();
		});
		
	}

});
























