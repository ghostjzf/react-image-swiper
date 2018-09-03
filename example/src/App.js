import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Swiper from "react-image-swiper"

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
          timeGap: 3000
      };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Swiper options={options}>
              {
                  this.state.slideArr.map((item,index) => {
                      return <div className="slider-item" key={index}>
                          <img src={item.img} />
                      </div>
                  })
              }
              <div className="slider-item" key={"34234"}>
                  <video autoPlay src={"http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/4b1060e95285890780486612122/v.f40.mp4"} loop="true" preload="" muted="" width="1280" height="720" ></video>
              </div>
          </Swiper>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
