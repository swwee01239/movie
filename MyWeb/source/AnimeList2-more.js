$(document).ready(function() {
	new Vue({
		el : '#movie',
		data : {
			userList : [],
			title:2
		},
		methods : {
			getLists : function() {
				var that = this;
					var url = window.location.href; // 获取当前url

					var dz_url = url.split('#')[0]; // 获取#/之前的字符串

					var cs = dz_url.split('?')[1]; // 获取?之后的参数字符串

					var cs_arr = cs.split('&'); // 参数字符串分割为数组

					var cs = {};

					for (var i = 0; i < cs_arr.length; i++) { // 遍历数组，拿到json对象

						cs[cs_arr[i].split('=')[0]] = cs_arr[i].split('=')[1]
					}
					that.title = cs.title;
				$.ajax({
					// 数据请求
					type : "GET",
					url : `http://127.0.0.1/AnimeListmore.php?movieid=${that.title}`,
					data : {},
					datatype : "json"
				}).then(function(res) {
					console.log(that.title);
					// 数据转换
					var obj = eval('(' + res + ')');
					that.userList = obj;
					console.log(that.userList);
				}).fail(function() {
					console.log('失败');
				})
			}
		},

		mounted : function() {
			this.getLists();
		},
		getQueryVariable : function(variable) {
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				if (pair[0] == variable) {
					return pair[1];
				}
			}
			return (false);
		}
	})

})
