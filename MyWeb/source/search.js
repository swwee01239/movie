$(document).ready(function() {
	new Vue(
			{
				el : '#movie',
				data : {
					
					userList : [],
					message:''
				},
				methods : {
					getLists : function(event){
						var that = this;
						console.log(event.data);
						that.message = event.data;
						$
								.ajax(
										{
											// 数据请求
											type : "GET",
											url : `http://127.0.0.1/search.php?username=${that.message}`,
											data : {},
											datatype : "json"
										}).then(function(res) {
									// 数据转换
									var obj = eval('(' + res + ')');
									console.log(obj);
									that.userList = obj;
									
								}).fail(function() {
									console.log('失败');
								})
					},
				},

				mounted : function() {
					this.getLists();
				},

			})

})
