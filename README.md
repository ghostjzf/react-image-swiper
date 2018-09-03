# react-image-swiper
这是一个基于react的轮播组件[github地址](https://github.com/ghostjzf/react-image-swiper/)

代码示例
```
cd example
npm install
npm start
```

### 组件的使用
```

import Swiper from "react-image-swiper"
.
.
.
const options = {
    showPot: true,  //是否显示下方pot 默认为true
    timeGap: 3000   //时间间隔 默认3000
    autoplay: true  //默认为true
};
.
.
.

<Swiper options={options}>
    {
        this.state.slideArr.map((item,index) => {
            return <div className="slider-item" key={index}>
                <img src={item.img} />
            </div>
        })
    }
    <div className="slider-item" key={"34234"}>
        <video 
          autoPlay 
          src={"http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/4b1060e95285890780486612122/v.f40.mp4"}               loop="true" 
          preload="" 
          muted="" 
          width="1280" 
          height="720" ></video>
    </div>
</Swiper>
```
* 轮播列表的每一项要设置类名 slider-item
* 组件源码在根目录src下
