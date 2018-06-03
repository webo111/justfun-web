import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class FrontHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lineHeight: '60px',
            current: ''
        }
    }
    onScrollHandle(event) {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
        if(scrollTop > 10){
            this.setState({lineHeight: '48px'});
            this.props.onHanderScroll('48px');
        } else {
            this.setState({lineHeight: '60px'});
            this.props.onHanderScroll('60px');
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHandle.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandle.bind(this));
    }
    handleClick = (e) => {
        this.setState({
            current: e.key
        });
    }
    render() {
        return(
            <div id="frontHeader" ref="headerDom">
                <div style={{float: 'left',width:280, fontSize:24}}>
                    <span style={{color:'white',lineHeight: this.state.lineHeight}}>
                        <Link to="/front">
                            <span className="nav-text">Just Func</span>
                        </Link>
                    </span>
                </div>
                <div style={{float: 'right'}}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{background: 'rgba(16, 142, 233, 1)',color:'white',fontSize:16,lineHeight: this.state.lineHeight}}
                    >
                        <Menu.Item key="companyInfo">
                            <Link to="/front/companyInfo">
                                <span className="nav-text">公司信息</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="companyCulture">
                            <Link to="/front/companyCulture">
                                <span className="nav-text">企业文化</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="businessSystem">
                            <Link to="/front/businessSystem">
                                <span className="nav-text">业务体系</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="investorRelations">
                            <Link to="/front/investorRelations">
                                <span className="nav-text">投资者关系</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="control" title={<a href="javascript:void(0)">控制台</a>}>
                            <Menu.Item key="control1">
                                <Link to="/back">
                                    <span className="nav-text">控制台 1</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="control2">
                                <Link to="/app/dashboard/index">
                                    <span className="nav-text">控制台 2</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        );
    }
}