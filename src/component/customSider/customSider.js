import React,{Component} from "react"
import {withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const  root=[
    {
        name:'首页',
        path:"/admin/home",
        key:'/admin/home'
    },
    {
        name:'设置',
        path:"/admin/user",
        key:'/admin/user'
    },
    {
        name:'用户管理',
        path:"/admin/my",
        key:'/admin/my',
        children:[
            {name:'权限管理',path:"/admin/my/root",key:'/admin/my/root'},
            {name:'信息管理',path:"/admin/my/info",key:'/admin/my/info'}
        ]
    }
]

// import Style from './index.module.less'

class Admin extends Component{
    jump=(path)=>{
        console.log(this)
        this.props.history.push(path)
    };
    renderItem=(data)=>{
        return data.map((item,index)=>{
            if(item.children){
             return(
                 <SubMenu title={item.name} key={item.key}>
                     {this.renderItem(item.children)}
                 </SubMenu>
             )
            }else {
                return <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>
                    {item.name}
                </Menu.Item>
            }
        })
    };
    render() {
        return (
            <div>
                <Menu style={{width: 256}} mode="vertical" theme='dark'>
                    {this.renderItem(root)}
                    {/*{root.map((item,index)=>{*/}
                        {/*if(item.children){*/}
                            {/*return(*/}
                                {/*<SubMenu title={item.name} key={item.key}>*/}
                            {/*{item.children.map((citem,index)=>{*/}
                               {/*return        <Menu.Item key={citem.key} onClick={this.jump.bind(this,citem.path)}>{citem.name}</Menu.Item>*/}
                                    {/*})}*/}
                                 {/*</SubMenu>*/}
                            {/*)*/}
                        {/*}else{*/}
                            {/*return(*/}
                                {/*<Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>*/}
                            {/*)*/}
                        {/*}*/}

                    {/*})}*/}
                    {/*/!*<Menu.Item key='1'>首页</Menu.Item>*!/*/}
                    {/*/!*<SubMenu  title='用户管理'>*!/*/}
                            {/*/!*<Menu.Item key="1">Option 1</Menu.Item>*!/*/}
                            {/*/!*<Menu.Item key="2">Option 2</Menu.Item>*!/*/}
                            {/*/!*<SubMenu  title='用户管理'>*!/*/}
                                {/*/!*<Menu.Item key="2">Option 2</Menu.Item>*!/*/}
                            {/*/!*</SubMenu>*!/*/}
                    {/*/!*</SubMenu>*!/*/}

                </Menu>
            </div>
        )
    }
}
export  default withRouter(Admin)