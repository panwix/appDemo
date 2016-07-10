#React Native 手势操作
####一般的点击事件
		TouchableHighlight组件绑定touch事件，实现onPress,onPressIn, onPressOut, onLongPress方法
		
		<TouchableHighlight style={styles.touchable} onPressIn={this.onPressIn} onPressOut={this.onPressOut}  
          onPress={this.onPress.bind(this,'点击了吗？')} onLongPress={this.onLonePress}>  
          <View style={styles.button}></View>  
        </TouchableHighlight>  
        
        
        
        
####手势
		通过PanResponder这个组件来实现
		先在componentWillMount()中创建私有手势属性
		componentWillMount() {
    		this._panResponder = PanResponder.create({
      		onStartShouldSetPanResponder: () => true,
     		onMoveShouldSetPanResponder: () => true,
      		onPanResponderGrant: () => {
        		this._top = this.state.top;
        		this._left = this.state.left;
        		this.setState({bg: 'red'});
      		},
      		onPanResponderMove: (evt,gs) => {
        		console.log(gs.dx+''+gs.dy)
        		this.setState({
          			top: this._top + gs.dy,
          			left: this._left + gs.dx,
        		})
      		},
      		onPanResponderRelease: (evt,gs) => {
        		this.setState({
          			bg: 'white',
          			top: this._top + gs.dy,
          			left: this._left + gs.dx
        		})
      		}
    	})
  		}
  		
  		将手势属性赋给要添加手势响应的组件
  		<View {...this._panResponder.panHandlers} style={[styles.rect, {
          "backgroundColor": this.state.bg,
          "top": this.state.top,
          "left": this.state.left
        }]}>        