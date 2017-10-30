function getStyle(element,attribute){
			if('currentStyle' in element){
				return element.currentStyle[attribute];
				}
			else{
				return getComputedStyle(element)[attribute];
				}
			}
	function move(boxId,btnClass,listId){
		this.box=document.getElementById(boxId);
		this.btn=document.getElementsByClassName(btnClass);
		this.list=document.getElementById(listId);
		this.img=this.list.getElementsByTagName('img');
		console.log(this.img);
		this.timer=null;
		}
	move.prototype.dong=function(width,step){
		num=Math.abs(width/step);
		var boo=true;
		var a=0;
		var step=30;
		var sum=0; 
       	this.list.timer=setInterval(function(){
            if(sum>=num){
                clearInterval(this.list.timer);
                sum=0; 
                boo=true;
                return;
				}
				this.list.style.left=parseInt(getStyle(this.list,"left"))+step+"px";
				sum++;
			},20)
		this.btn[1].onclick=function(){
			if(boo){
				boo=false;
				if(a<=0){
					this.list.style.left=-488+'px';
					a=this.img.length-1;
					}
				move(600,-step);
				a--;
				}
			}
		this.btn[0].onclick=function(){
			if(boo){
				boo=false;
				if(a>4){
					this.list.style.left=0+'px';
					a=0;
					}
				move(600,step);
				a++;
				}
			}
		}
	var a=new move('box','btn','list');
		a.dong();