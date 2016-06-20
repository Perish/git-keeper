# git-keeper
react react-router redux react-redux react-router-redux redux-thunk

1、action 是预处理函数
2、reducer 是迎接 action 函数返回的线索的「数据再处理函数」;
	reducer 只是一个模式匹配的东西，真正处理数据的函数，是额外在别的地方写的，在 reducer 中调用罢了。
3、 为什么要有 combineReducers ?
redux 的 combineReducers(reducers) 的返回值 rootReducers， 总是返回新的 state，
它不是修改旧 state，而是创建空对象，然后将 key/value 往上面挂载。只有在 reducers 对象上的 key 才会被迁移。

4、为什么要有 createStore ？

5、为什么要有 bindActionCreators ? 
(react-redux) -- API connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])


6、redux 工作流程是怎样的？
actionCreator|reducer|combineReducers|createStore|bindActionCreators 这些函数的书写与组合的过程以及顺序。

7、
