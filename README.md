# new-react-demo

## 关于React的生命周期变动

从16.3开始，React的组件生命周期发生了大的改动，增加getDerivedStateFromProps、getSnapshotBeforeUpdate等方法，原来的componentWillMount、componentWillReceiveProps和componentWillUpdate将标记为deprecated，至React17将会弃用。

具体官方资料如下：

React 16.3改动日志：https://reactjs.org/blog/2018/03/29/react-v-16-3.html

getDerivedStateFromProps：https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

getSnapshotBeforeUpdate：https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
