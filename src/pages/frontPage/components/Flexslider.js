import React from 'react';
import { Carousel } from 'antd';
import Park from './park/Park';

export default class Flexslider extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return(
            <div id="Flexslider">
                <Carousel autoplay>
                    <div>
                        <Park/>
                    </div>
                    <div><img className="slider_img" alt="a1" src={require("../../../images/flexslider/wKgBs1ZhdHaAJKfAAAy_TvZM9Nk89_gaitubao_com_1356x898.jpeg")}/></div>
                    <div><img className="slider_img" alt="a2" src={require("../../../images/flexslider/wKgBs1ZhWo2AfjQ-AA80laSo04M84_gaitubao_com_1356x898.jpeg")}/></div>
                </Carousel>
            </div>
        );
    }
}