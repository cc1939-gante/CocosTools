# 分帧加载脚本

## 1. 简介  
    1.1 脚本功能：  实现分帧加载，将一个界面分成多个部分，比如 A、B、C、D，按照代码中的先后顺序分帧加载各部分，主要用于处理打开界面卡顿的问题
    1.2 脚本使用：  在当前界面上添加脚本（DelayLoad），在界面初始化的时候，调用脚本的 init 方法，传入界面的初始化方法，需要注意的是，界面的初始化方法必须为 function * 类型，否则会报错。
    1.3 脚本原理：  基于 js 中的生成器和 cocos creator 中的定时器，实现每一帧去触发一个函数，然后根据触发器的状态(isDone)判断是否加载完成，如果加载完成则调用回调函数。    