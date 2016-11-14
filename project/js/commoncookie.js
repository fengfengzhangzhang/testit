
	function setcookie(name,value,n){
		var d=new Date();
		d.setDate(d.getDate()+n);
		document.cookie=name+"="+value+";expires="+d+";path=/";
		console.log("cookie is OK!");
	}
	//设置cookie的值；
	
	function getcookie(name){
    	var arr=document.cookie.split("; ");
		var n;
		for(var i=0;i<arr.length;i++){
		  if(arr[i].indexOf(name)!=-1){
			  n= i;
				break;
			}
		}
		//console.log(n);
		if(n!=undefined){
    	return arr[n].split("=")[1];}else{
    		return ""
    	}
		
	}
	//查找cookie值；
	
	function delcookie(name,path){
		var d=new Date();
		d.setDate(0);
		document.cookie=name+"="+"value"+";expires="+d+";path="+path;
	}	
	//删除cookie的函数；	

	
	

