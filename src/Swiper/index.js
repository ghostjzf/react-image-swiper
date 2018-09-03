import React, {Component} from "react";

import "./style.css"

var timer = null;
let timer2 = null;
let timerJ = null;

export default class Carousel extends Component{
    constructor() {
        super();
        this.myRef = React.createRef();
        this.innerContainer = React.createRef();
        this.state = {
            left: -100,
            idx: -1,
            options: {
                showPot: true,
                timeGap: 3000,
                autoplay: true
            }
        }
    }

    componentDidMount() {
        var oContainer = document.getElementsByClassName("carousel-container")[0];
        var oClassList = oContainer.classList;
        if(this.props.className || this.props.class) {
            oClassList.add(this.props.className || this.props.class)
        }
        this.setState({
            options: Object.assign({}, this.state.options, this.props.options)
        }, () => {
            this.init();
        });

        window.onresize = () =>{
            if (timerJ) {
                clearTimeout(timerJ)
            }
            timerJ = setTimeout(() => {
                //滚动条位置
                this.init();
                timerJ = undefined;
            }, 300)

        }

    }

    render() {
        return (
            <div className="carousel-container" ref={this.myRef} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="slider-container" ref={this.innerContainer}>
                    {this.props.children}
                </div>
                {
                    this.state.options.showPot
                        ?
                        <ul className={"carousel-nav"} >
                            {this.state.arr && this.state.arr.map((item,index) => {
                                return <li
                                    className={["pot", this.state.idx === index? "active" : ""].join(" ")}
                                    key={index}
                                    onClick={this.changeNav.bind(this, index)}
                                    onMouseEnter={this.handleMouseEnter}></li>
                            })}
                        </ul>
                        :null
                }
            </div>
        )
    }

    init() {
        let option = Object.assign({}, this.state.options, this.props.options);
        let outerParentWidth = this.myRef.current.clientWidth;
        let sliderLength = this.myRef.current.firstChild.childNodes.length;
        let arr = Array.prototype.slice.call(this.myRef.current.firstChild.childNodes);

        let children = this.myRef.current.firstChild.childNodes;
        let className = this.innerContainer.current.className;
        let height = this.myRef.current.firstChild.children[0].clientHeight;
        let sliderContainer = document.getElementsByClassName(className)[0];

        for(var i = 0; i < sliderLength; i++) {
            children[i].style.width =  outerParentWidth + "px";
        }
        sliderContainer.style.cssText = `width:${outerParentWidth * sliderLength }px;height: ${height}px;`;
        this.setState({
            arr:arr,
            sliderContainer: sliderContainer,
            outerParentWidth: outerParentWidth,
            sliderLength:sliderLength,
            options: option
        },() => {
            clearTimeout(timer);
            clearTimeout(timer2);
            if(option.autoplay) {
                this.startRun();
            }else{
                this.setState({
                    idx: 0
                })
            }
        })
    }

    changeNav(index) {
        this.setState({
            idx: index
        },() => {
            this.state.sliderContainer.style.left = -this.state.outerParentWidth * index + "px";
        })
    }

    startRun() {
        var that = this;
        let length = this.state.sliderLength;
        function begin() {
            let idx = that.state.idx;

            that.setState({
                idx: idx >= length - 1 ? 0 : ++that.state.idx
            },() => {
                that.state.sliderContainer.style.left = -that.state.outerParentWidth * that.state.idx + "px";
            });
            timer = setTimeout(begin, that.state.options.timeGap)
        }

        begin();
    }

    handleMouseEnter = () => {
        clearTimeout(timer);
        clearTimeout(timer2);
    };

    handleMouseLeave = () => {
        timer2 = setTimeout(() => {
            clearTimeout(timer);
            if(this.state.options.autoplay) {
                this.startRun();
            }
            clearTimeout(timer2);
        },1500)

    }
}