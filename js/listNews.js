$(function(){
	$.ajax({
		url:"http://localhost:3000/item/list",
		type:"get",
		dataType:"json",
		success:function(e){
			for(var i in e){
				$(".news").append("<a href='detail.html?id="+e[i].id+"'>"+e[i].new+"<span>"+e[i].time+"</span>"+"</a>")
			}
		}
	})
})