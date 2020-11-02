var add= new Vue({
	el:"#app",
	data:{
		isshow:false,
		boxshow:false,
		slideList:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ef4160c861b998239bce9adb82341e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10aac533af4489c077bc6a8e15219e3b.jpg?thumb=1&w=1226&h=460&f=webp&q=90"],
		n:0,
	},
	methods:{
		mouseenter:function(){
			this.isshow = true;
		},
		mouseleave:function(){
			this.isshow = false;
		},
		boxenter:function(){
			this.boxshow=true;
		},
		boxleave:function(){
			this.boxshow = false;
		},
		go(){
			setInterval( ()=> {
				this.n++;
				if (this.n==this.slideList.length){
					this.n=0;
				}
			},5000)
		}
	},
	mounted(){
		this.go()
	}
});