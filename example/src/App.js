import React, { Component } from 'react';
import './App.css';
// import Swiper from "react-image-swiper"
import Swiper from "./Swiper"

class App extends Component {
    state = {
        inputValue: "",
        slideArr: [
            {
                img: "https://static.itiger.com/portal/images/banner-zero.06584768.jpg",
            },
            {
                img: "https://static.itiger.com/portal/images/banner-fintech.870f6d75.jpg",
            }
        ],
        reason: []
    }
  render() {
      const options = {
          showPot: true,
          timeGap: 3000,
          autoplay: true
      };
    return (
      <div className="App">
          <Swiper className="container" options={options}>
              {
                  this.state.slideArr.map((item,index) => {
                      return <div className="slider-item" key={index}>
                          <img className="slider-item-img" src={item.img} alt={index}/>
                      </div>
                  })
              }
              <div className="slider-item" key={"34234"}>
                  <video className="slider-item-img" autoPlay src={"http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/4b1060e95285890780486612122/v.f40.mp4"} loop="true" preload="" muted="" width="1280" height="720" ></video>
              </div>
          </Swiper>
        {/*<p className="App-intro">*/}
          {/*<button>自动播放</button>*/}
          {/*<button onClick={() => options.autoplay = false}>取消自动播放</button>*/}
          {/*<button>显示pot</button>*/}
          {/*<button>隐藏pot</button>*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
