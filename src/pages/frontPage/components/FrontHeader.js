import React from 'react';
import { hashHistory } from 'react-router';
import { Menu, Icon } from 'antd';


export default class FrontHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lineHeight: '61px',
        }
    }
    onScrollHandle(event) {
        const headerDom  = this.refs.headerDom;
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
        if(scrollTop > 10){
            this.setState({lineHeight: '48px'});
            this.props.onHanderScroll('48px');
        } else {
            this.setState({lineHeight: '61px'});
            this.props.onHanderScroll('61px');
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHandle.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandle.bind(this));
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        if(e.key === 'companyInfo'){
            hashHistory.push('/front/companyInfo');
        } else if(e.key === 'companyCulture'){
            hashHistory.push('/front/companyInfo');
        } else if(e.key === 'businessSystem'){
            hashHistory.push('/front/companyInfo');
        } else if(e.key === 'investorRelations'){
            hashHistory.push('/front/companyInfo');
        }
    }
    goJustFun(){
        hashHistory.push('/front');
    }
    render() {
        return(
            <div id="Header" ref="headerDom">
                <div style={{float: 'left',width:280, fontSize:24}}>
                    <span><a style={{color:'white',lineHeight: this.state.lineHeight}} onClick={this.goJustFun.bind(this)}>Just Fun</a></span>
                </div>
                <div style={{float: 'right'}}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{background: 'rgba(16, 142, 233, 1)',color:'white',fontSize:16,lineHeight: this.state.lineHeight}}
                    >
                        <Menu.Item key="companyInfo">
                            公司信息
                        </Menu.Item>
                        <Menu.Item key="companyCulture">
                            企业文化
                        </Menu.Item>
                        <Menu.Item key="businessSystem">
                            业务体系
                        </Menu.Item>
                        <Menu.Item key="investorRelations">
                            投资者关系
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}