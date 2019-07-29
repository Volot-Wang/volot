$(document).ready(function(){
	function totalPrices(){
		var yyh = 0;	//已优惠
		var yjzh = 0;	//原价总和
		var zhjzh = 0;	//折后价总和
		$("#sp_ul1").each(function(i,e){
			var num = $(e).children(".sp_4").children("#sp").children("#num").val();  //数量
			var xiaoji = num*$(e).children(".sp_5").children().text();	//小计
			var yuanjia = num*$(e).children(".sp_3").children().children(".sp3_1").children().text();	//原价
			yjzh += yuanjia;
			zhjzh += xiaoji;
			yyh = yjzh-zhjzh;
			$("#spzj").html(parseInt(yjzh).toFixed(2));
			$("#youhui").html(parseInt(yyh).toFixed(2));
			$("#zhehoujia").html(parseInt(zhjzh).toFixed(2));
		})
		return zhjzh;
	};
	totalPrices();
	//删除
	$("#sc").click(function(){
		if(confirm("确定要删除商品吗？")){
			$(".shangpin").next().next().remove();
			$(".shangpin").remove();
			alert("删除成功！");
		}
		$(".qingkong").show();
		
	});
	//修改数量
	$(".shangpin").find(".sp_4").children("#sp").children("#num").change(function(){
		var value = $(this).val();
		if((value == "") || !(/^[1-9][0-9]*$/.test(value))){
			alert("数量不能为空，且只能是正整数，不能以0开头");
			$(this).val(1);
		}else if(value>100){
			alert("库存不足，请重新选购！");
			$(this).val(1);
		}else{
			var x = totalPrices();
			alert("修改成功！您的商品总价格为"+ x +"元");
		}
	});
	$(".zj_9 a").click(function(){
			alert("下单失败！")
		})
	
	$(".sp_1 input").click(function(){
		$(".zj_9 a").click(function(){
			alert("下单成功！")
		})
	})
	
	$(".zj_9 a").click(function(){
		
	})
});
