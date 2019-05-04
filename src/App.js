import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
// 引入React-Router模块

import {Router, Route, BrowserRouter, NavLink} from 'react-router-dom'


import { Layout, Menu, Icon } from 'antd';
import Home from './pages/home';
import Database from "./pages/database";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }



    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }


    render() {
        return (
            <Layout>
                <BrowserRouter  >
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />

                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}

                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="1" ><NavLink to ='home'> 工作台 </NavLink></Menu.Item>
                            <Menu.Item key="2" ><NavLink to ='database'> 数据库展示 </NavLink></Menu.Item>
                            <Menu.Item key="3" >Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>






                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content  id="content" style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,height:'100%'
                    }}>
                        <div>
                            <switch>
                                <Route  exact path="/" component={SiderDemo}></Route>
                                <Route path="/home" component={Home} ></Route>
                                <Route path="/database" component={Database}></Route>
                            </switch>
                        </div>
                    </Content>
                </Layout>
                         </BrowserRouter>
            </Layout>
        );
    }
}

ReactDOM.render(<SiderDemo />, document.getElementById('container'));

// // 配置路由
// ReactDOM.render(
//     <BrowserRouter  >
//
//         <div>
//             <switch>
//             <Route  exact path="/" component={SiderDemo}></Route>
//             <Route path="/home" component={Home} ></Route>
//             <Route path="/database" component={Database}></Route>
//             </switch>
//         </div>
//     </BrowserRouter>
//
// , document.getElementById('content'));