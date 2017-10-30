$(function(){
	$.ajax({
		url:"http://localhost:3000/item/list",
		type:"get",
		dataType:"json",
		success:function(e){
			for(var i in e){
				$(".news").append("<p>"+e[i].time+"</p>"+"<a href='detail.html?id="+e[i].id+"'>"+e[i].new+"</a>")
			}
		}
	})
})