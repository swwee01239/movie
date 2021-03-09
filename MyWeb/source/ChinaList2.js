$(document).ready(function() {
	new Vue(
			{
				el : '#movie-group',
				data : {
					
					userList : [],
					pageNo : 1,
					pageTotal : 1
				},
				methods : {
					getLists : function(i) {
						var that = this;
						console.log(i);
						that.pageNo = i || that.pageNo;
						$
								.ajax(
										{
											// 数据请求
											type : "GET",
											url:'http://127.0.0.1/ChinaList.php',
											//url : `https://www.shangmeng-movie.club/ChinaList2.php?a=${that.pageNo}`,
											data : {},
											datatype : "json"
										}).then(function(res) {

									// 数据转换
									var obj = eval('(' + res + ')');
									that.userList = obj;
									//that.userList = obj.user;
									//that.pageTotal = obj.Total2
								}).fail(function() {
									console.log('失败');
								})
					},

					curPage : function(index) {
						this.getLists(index);
					},
					prePage : function() {

						if (this.pageNo > 1) {
							this.pageNo--;
							this.getLists(this.pageNo);
						}

					},
					nextPage : function() {

						if (this.pageNo < this.pageTotal) {
							this.pageNo++;
							this.getLists(this.pageNo);

						}

					}

				},

				mounted : function() {
					this.getLists();
				},

			})

})
