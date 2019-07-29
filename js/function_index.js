$(function(){
	//显隐
	$(".mr_jq1").mouseenter(function(){
		$(".mr_jq1_volot").show();
	})
	$(".mr_jq1_volot").mouseleave(function(){
		$(this).hide();
	});
	
	$(".mr_jq2").mouseenter(function(){
		$(".mr_jq2_volot").show();
	})
	$(".mr_jq2_volot").mouseleave(function(){
		$(this).hide();
	});
	
	$(".mr_jq3").mouseenter(function(){
		$(".mr_jq3_volot").show();
	})
	$(".mr_jq3_volot").mouseleave(function(){
		$(this).hide();
	});
	
	//轮播
	var jishi;
	var index=0;
	function lunbo(){
		jishi=setInterval(time,2000);
		function time(){
			index++;
			if(index>7){
				index=0;
			}
			$(".lunbodatu li img").attr({"src":"img/text_"+index+".jpg"})
		};
	};
	lunbo();
	$(".lunbodatu").mouseover(function(){
		clearInterval(jishi);
	});
	$(".lunbodatu").mouseout(function(){
		lunbo();	
	});
	//前后换图
	$(".shang").click(function(){
		clearInterval(jishi);
		index--;
		if(index>=0){
			$(".lunbodatu li img").attr({"src":"img/text_"+index+".jpg"});
		}else{
			index = index+8;
			$(".lunbodatu li img").attr({"src":"img/text_"+index+".jpg"});
		}
	});
	$(".xia").click(function(){
		clearInterval(jishi);
		index++;
		if(index<=7){
			$(".lunbodatu li img").attr({"src":"img/text_"+index+".jpg"});
		}else{
			index -= index;
			$(".lunbodatu li img").attr({"src":"img/text_"+index+".jpg"});
		}
	});
	
	//滚动条
	$(window).scroll(function(){
		var scrollTop = parseInt($(this).scrollTop());
		if(scrollTop>200){
			$(".a_header").show();
		}else{
			$(".a_header").hide();
		}
	});
	
	//二级菜单
	$(".ah_1").hover(function(){
		$(this).children("div").show();
	},function(){
		$(this).children("div").hide();
	});
	
	//倒计时
	var intDiff = parseInt(30*60);//倒计时总秒数量
	function timer(intDiff){
	    window.setInterval(function(){
	    var day=0,
	        hour=0,
	        minute=0,
	        second=0;//时间默认值        
	    if(intDiff > 0){
	        day = Math.floor(intDiff / (60 * 60 * 24));
	        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
	        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
	        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
	    }
	    if (hour <= 9) hour = '0' + hour;
	    if (minute <= 9) minute = '0' + minute;
	    if (second <= 9) second = '0' + second;
	    $('#day_show').html(day+"天");
	    $('#hour_show').html('<s id="h"></s>'+hour);
	    $('#minute_show').html('<s></s>'+minute);
	    $('#second_show').html('<s></s>'+second);
	    intDiff--;
	    }, 1000);
	} 
	$(function(){
	    timer(intDiff);
	}); 
	
	//跑马灯
	var marginTop=0;
    var obj=true;
    $("#h_h").mouseenter(function(){
        obj=false;
    })
    $("#h_h").mouseleave(function(){
        obj=true;
    })
    setInterval(function(){
        if(obj==true) {
            $("#h_h").children("li").first().animate(
                {"margin-top": marginTop--}, 0,
                function () {
                    var $first = $(this);
                    if (!$first.is(":animated")) {
                        if ((-marginTop) > $first.height()) {
                            $first.css({"margin-top": 0}).appendTo($("#h_h"));
                            marginTop = 0;
                            obj = true;
                        }
                    }
                }
            )
        }
    },100);
});

//倒计时
//	//时间为一位数时显示格式为："0X"
//  function checkTime(i) {
//      if (i < 10) {
//          i = "0" + i;
//      }
//      return i;
//  }
//
//  //显示浏览器现在的时间
//  function formatTime(timeVal) {
//      var datePara = new Date(timeVal);//定义日期对象
//      var yyyy = datePara.getFullYear();//通过日期对象的getFullYear()方法返回年
//      var MM = datePara.getMonth() + 1;//通过日期对象的getMonth()方法返回月
//      var dd = datePara.getDate();//通过日期对象的getDate()方法返回日
//      var hh = datePara.getHours();//通过日期对象的getHours方法返回时
//      var mm = datePara.getMinutes();//通过日期对象的getMinutes方法返回分
//      var ss = datePara.getSeconds();//通过日期对象的getSeconds方法返回秒
//      // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09
//      MM = checkTime(MM);
//      dd = checkTime(dd);
//      hh = checkTime(hh);
//      mm = checkTime(mm);
//      ss = checkTime(ss);
//
//      //用于保存星期（getDay()方法得到星期编号）
//      var day; 
//      if (datePara.getDay() == 0) day = "星期日 "
//      if (datePara.getDay() == 1) day = "星期一 "
//      if (datePara.getDay() == 2) day = "星期二 "
//      if (datePara.getDay() == 3) day = "星期三 "
//      if (datePara.getDay() == 4) day = "星期四 "
//      if (datePara.getDay() == 5) day = "星期五 "
//      if (datePara.getDay() == 6) day = "星期六 "
//
//      //document.getElementById('start').value = yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + " " + day;
//      //setTimeout('formatTime()', 1000);//每一秒中重新加载formatTime()方法
//      return yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss; //+ " " + day;
//  }
//  
//  //服务器现在的时间（这里只是测试，就用浏览器时间代替）
//  var startTime = '';
//  //活动截止时间endTime（以服务器时间为标准，即给定的时间）
//  var end = '';
//  var endTime = '';
//  //活动截止时间（以浏览器时间为标准）
//  var browserEndTime = '';
//  //距离活动结束还剩余的时间（以浏览器为标准）
//  var plus = '';
//
//  //倒计时
//  function setTimer() {
//      if (!plus) {
//          //服务器现在的时间（这里只是测试，就用浏览器时间代替）
//          startTime = new Date();
//          $("#start").val(formatTime(startTime));
//          //活动截止时间endTime（预先给定的值）
//          end = document.getElementById("end").value;
//          endTime = new Date(end);
//          //活动截止时间与当前时间的时间差
//          plus = endTime - startTime;
//      }
//      else {
//          //距离活动结束还剩余的时间，第二次以后就不需要再计算，直接自减即可
//          plus -= 1000;
//          //更新当前时间(getTime()获取时间转化成毫秒后的数值)
//          startTime = new Date(startTime.getTime() + 1000);
//          $("#start").val(formatTime(startTime));
//      }
//
//      var day = parseInt(plus / 1000 / 60 / 60 / 24);
//      var hour = parseInt(plus / 1000 / 60 / 60) - day * 24;
//      var minute = parseInt(plus / 1000 / 60) - parseInt(plus / 1000 / 60 / 60) * 60;
//      var second = parseInt(plus / 1000) - parseInt(plus / 1000 / 60) * 60;
//
//      // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09            
//      day = checkTime(day);
//      hour = checkTime(hour);
//      minute = checkTime(minute);
//      second = checkTime(second);
//
//      document.getElementById("p").innerHTML = "距离活动截止，还剩" + day + "天" + hour + "时" + minute + "分" + second + "秒";
//
//      if (plus <= 1) {
//          clearInterval(id);
//      }
//  }
//  //每秒循环一次，刷新活动截止时间与当前时间的时间差
//  var id = setInterval(setTimer, 1000);