# React Native通信机制原理
* React Native用ios自带的JavaScriptCore作为JS的解析引擎，但并没有用到JavaScriptCore提供的一些可以让js与oc互调的特性，而是自己实现了一套机制，这套机制可以通用于所有js引擎上。

* 普通的的js-oc通信实际上是oc向js传信息有现成的接口，通过调用接口方法可以直接在当前context上执行一段js脚本，并且可以获取执行后的返回值，这个值就相当于js向oc传递信息。React Native以此为基础，通过各种手段，实现了在oc定义一个模块的方法，js可以直接调用这个模块方法并还可以无缝衔接回调。


### 具体配置方法：
    模块配置表：
      oc端和js端分别各有一个bridge，两个bridge都保存了同样的一份模块配置表，js调用oc模块方法时，通过bridge里的配置表把模块方法转化为模块ID和方法ID传给oc，oc通过bridge的模块配置表找到对应的方法执行之。
    模块配置表自动生成流程：
      1. 取所有模块类：
          每个模块类都实现了RCTBriBridgeModule接口，可以通过runtime接口obj_getClassList或obj_copyClassList取出项目里所有类，然后逐个判断是否实现了RCTBridgeModule接口，就可以找到所有模块类，实现在RCTBridgeModuleClassesByModuleID()方法里。
      2. 读取模块里暴露给js的方法
          编译属性__attribute__。通过RCT_ECPORT(),模块里的方法加上这个宏就可以实现暴露给js，无需其它规则。在RCTBridge.m的RCTExprotedMethodsByModuleID()方法里获取这些内容，提取每个方法的类名和方法名，就完成了提取模块里暴露给js的工作。整体的模块类／方法提取实现在RCTRemoteModulesConfig(）方法里。


![](http://blog.cnbang.net/wp-content/uploads/2015/03/ReactNative2.png)

### 流程步骤说明
1. js调用某个oc模块暴露出来的方法
2. 把上一步的调用分解为ModuleName， MethodName， arguments, 再扔给MessageQuence处理（具体实现在BatchedBridgeFactory.js的_createBridgedModule里
3. 在这一步把js的callback函数缓存在MessageQueue的一个成员变量里，用CallbackID代表callback。在通过保存在MessageQueue的模块配置表把上一步传进来的ModuleName和MethodName转化为ModuleID和MethodID。
4. 把上述步骤得到的ModuleID， MethodID， CallbackID和其它参数argus传给oc。
5. oc接收到消息，通过模块配置表拿到对应的模块和方法（具体实现在__handleRequestNumber:moduleID:methodID:params:）
6. RCTModuleMethod对js传过来的每一个参数进行处理
7. oc模块方法调用完，执行block回调
8. 调用到第六步说明的RCTModuleMethod生成的block。
9. block里带着CallCallbackID和block传过来的参数去调用js里MessageQueue的方法invokeCallbackAndReturnFlushedQueue。
10. MessageQueue通过ClassbackID找到响应的js callback方法
11. 调用callback方法，并把oc带过来的参数一起传过去，完成回调。

    整个流程：（关键点在于：模块化，模块配置表，传递ID，封装调用，事件响应）

    js函数调用转ModuleID／ModuleID －> callback转CallbackID－>oc根据id拿到方法->处理参数->调用CallBackId->js通过CallBackId拿到callback执行
