$(function(){
	var $subbox=$(".subnav");
		$subbox.hide();
	var $clas=$("#Classification");
	$clas.hover(function(){
		$(this).css({background:"#E73A77"});
		$subbox.show();
	},function(){
		$subbox.hide();	
		$(this).css({background:""});
	});
	//商品分类的鼠标事件
	$subbox.hover(function(){
		$clas.css({background:"#E73A77"});
		$(this).show();
	},function(){
		$subbox.hide();
		$clas.css({background:""});
	});
});
//以上是buycart的hover样式。
$(function(){
	var a=b=c=d=1
	var code ; //在全局定义验证码   
	//产生验证码  
	var checkCode =$(".check_yan");   
	var inputCode =$("#yan");
	function createCode(){  
	     code = "";   
	     var codeLength = 4;//验证码的长度  
	     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
	     'S','T','U','V','W','X','Y','Z');//随机数  
	     for(var i = 0; i < codeLength; i++) {//循环操作  
	        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
	        code += random[index];//根据索引取得随机数加到code上  
	    }  
	    checkCode.html(code);//把code值赋给验证码  ;
	} 
	createCode();
	checkCode.click(function(){
		createCode();
	});
	
//校验验证码  
	inputCode.blur(function(){
		validate();
	});
	var hahb=$(".hahb");
	var hahbb=$(".hahbb");
	function validate(){  
	   var inputCodes =$("#yan").val();//取得输入的验证码并转化为大写
	  //  console.log(inputCodes)
	    if(inputCodes.length<= 0){ //若输入的验证码长度为0 
	    	hahb.css({display:"block"})
	    	hahb.html("请输入验证码！")
	    	hahbb.removeClass("activea");
	        //alert("请输入验证码！"); //则弹出请输入验证码  
	    }
	    else if(inputCodes != code ){ //若输入的验证码与产生的验证码不一致时  
	    	hahb.css({display:"block"})
	    	hahb.html("验证码输入错误！@_@")
	    	hahbb.removeClass("activea");
	       // alert("验证码输入错误！@_@"); //则弹出验证码输入错误  
	        createCode();//刷新验证码  
	        $(".check_yan").value = "";//清空文本框  
	    }         
	    else { //输入正确时  
	    	hahb.css({display:"none"})
	        hahbb.addClass("activea")
	        a=2;
	    }             
	}  
	//手机号码验证
	var haha=$(".haha");
	var hahaa=$(".hahaa");
	var nametex;
	var name=$("#name");
	name.blur(function(){
		nametex=$("#name").val();
		//console.log(nametex)
		var paterm=/^1(3|5|7|8)\d{9}$/
		if(paterm.test(nametex)){
			haha.css({display:"none"});
	        hahaa.addClass("activea");
	        b=2;
	        
		}else{
			haha.css({display:"block"})
			haha.html("手机号格式错误！");
			hahaa.removeClass("activea");

		}
	})
	//密码设置
	var setMi=$("#setMi");
	var setMitex
	var hahc=$(".hahc");
	var hahcc=$(".hahcc");
	setMi.blur(function(){
		setMitex=$("#setMi").val();
		if(setMitex.length==0){
			hahc.css({display:"block"})
			hahc.html("密码不能为空！");
			hahcc.removeClass("activea");
			
		}else{
			var patern=/^\w{6,16}/
			if(patern.test(setMitex)){
			hahc.css({display:"none"});
	        hahcc.addClass("activea");
	        c=2
			}else{
			hahc.css({display:"block"})
			hahc.html("密码格式错误！")
			hahcc.removeClass("activea");
			}
		}
		
		
	});
	//密码确认
	var checkMi=$("#checkMi");
	var setMitex;
	var checktex;
	var hahd=$(".hahd");
	var hahdd=$(".hahdd");
	checkMi.blur(function(){
		setMitex=$("#setMi").val();
		checktex=$("#checkMi").val();
		//console.log(nametex)
		//var patern=/^\w{6,16}/
		if(setMitex.length!=0){
			if(setMitex==checktex){
			hahd.css({display:"none"});
	        hahdd.addClass("activea");
	        d=2;
			}else{
			hahd.css({display:"block"});
			hahd.html("两次密码不同！");
			hahdd.removeClass("activea");
			}
		}else{
			hahd.css({display:"block"});
			hahd.html("密码不能为空！");
			hahdd.removeClass("activea");
		}
	});
	
	
	
	var reg=$("#reg")
	reg.click(function(){
		if(a==2&&b==2&&c==2&&d==2){
		setcookie("phonenumble",nametex,5)
		setcookie("setmi",setMitex,5)
		}else{
			alert("请认真填写注册信息！")
		}
	});

});

//以上是注册信息的js；

$(function(){
	var uses=$(".uses");
	var mimas=$(".mimas");
	var names=$("#names");
	var checkMis=$("#checkMis");
	names.blur(function(){
		var name=getcookie("phonenumble");
		var nametex=$("#names").val();
		if(nametex==name){
			uses.css({display:"block"})
			uses.html("用户名输入正确");
		}else{
			uses.css({display:"block"})
			uses.html("用户名不存在！");
		}
		
	});
	checkMis.blur(function(){
	var mi=getcookie("setmi");	
	var checkMistex=$("#checkMis").val();
	if(checkMistex==mi){
		mimas.css({display:"block"})
		mimas.html("密码正确");
	}else{
		mimas.css({display:"block"})
		mimas.html("密码错误！");
	}
	});
});






















