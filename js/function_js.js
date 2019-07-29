$(function(){
//	$.ajax({
//		url: "ajaxhtmljsp/json.html",
//		type: 'GET',
//		dataType: 'json',
//		beforeSend:function(){},
//		success:function(jsondata){
//			$.each(jsondata,function(i){
//				$("#cs").append("<option>"+jsondata[i].tag_name+"</option>");
//			})
//		},
//		error:function(event,request,settings){
//			alert(settings);
//		},
//	});
	
	$.get("ajaxhtmljsp/json.html",function(data){
		$.each(data,function(i){
			$("#cs").append("<option>"+data[i].tag_name+"</option>");
		})
	},"json");
	
	
	$(".text_2").blur(function(){
		var t = $(this).val();
		var sj = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
		if(sj.test(t)==false){
			alert("手机号格式错误，请重新输入");
			return false;
		}else{
			alert("输入正确");
		}
	});
	
	$(".text_1").blur(function(){
		var tt = $(this).val();
		if(tt==""){
			alert("不能为空")
		}
	})
	
	$(".shbr2_left").click(function(){
		var t = $(".text_2").val();
		var sj = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
		var tt = $(".text_1").val();
		if(sj.test(t)==false&&tt==""){
			alert("手机号格式错误，请重新输入");
			alert("收货人不能为空")
			return false;
		}else{
			alert("保存成功！");
		}
	})
	
})

	
