# React Native的网络请求
#### fetch请求
		1.一个参数
		fetch('https://mywebsite.com/mydata.json')
		
		2.二个参数
		fetch('https://mywebsit.com/endpoint/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstParam: 'yourValue',
				secondParam: 'yourOtherValue',
			})
		})
		
#### fetch请求响应
		fetch('http://facebook.github.io/react-native/movies.json')
			.then((responseJson) => response.json())
			.then((responseJson) => {
				return responseJson.movies;
			})
			.catch((error) => {
				console.error(error);
			});		