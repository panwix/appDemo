#ListView
####数据
		constructor(props){
			super(props);
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
			this.state = {
				dataSource: ds.cloneWithRows(['1','2','3']),
			};
		}
		
		ds是新创建的一个ListView.DataSource
		rowHasChanged: 只渲染改变的行
		
####展示
		render(){
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>	
		}
		
				