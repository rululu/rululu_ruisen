var url=window.location.href;
var id=url.split("?")[1].split("=")[1];
console.log(id)
$(function(){
	$.ajax({
		url:"http://localhost:3000/item/detail",
		type:"POST",
		data:{id:id},
		success:function(e){
			console.log(e)
			$(".news").append("<h1>"+e[0].head+"</h1>"+"<h2>"+e[0].heading+"</h2>"+"<p>"+e[0].content+"</p>")
		}
	})
})	