$(function(){
	var num = Math.floor(Math.random()*10000);
	$(".sd_input3 a").click(function(){
		alert(num);
	})
	$("#yzm").blur(function(){
		var yzm = $("#yzm").val();
		if(yzm!=num){
			alert("验证码错误")
		}else{
			alert("验证成功")
		}
	})
	
	//删除
	$(".sdi_1").click(function(){
		$("#zh").val("");
	});
	
	$("#zh").blur(function(){
		var zhanghao = $(this).val();
		var pd = /^[a-zA-Z0-9_-]{4,16}$/;
		if(pd.test(zhanghao)==false){
			alert("账号错误")
			return false;
		}else{
			alert("帐号正确")
			return true;
		}
	})
	
	$(".sd_input4 a").click(function(){
		var zhanghao = $("#zh").val();
		var pd = /^[a-zA-Z0-9_-]{4,16}$/;
		var yzm = $("#yzm").val();
		if(pd.test(zhanghao)==true&&yzm==num){
			alert("登录成功");
			open("index.html");
		}else{
			alert("登录失败");
			if(pd.test(zhanghao)==false){
				alert("账号错误");
				return false;
			}else if(yzm!=num){
				alert("验证码错误")
			}
		}
	})
})
