import React from "react";

import {Layout, theme} from "antd";
import XMenu from "@/components/xMenu";
import XBreadcrumb from "@/components/xBreadcrumb";
import XHeader from "@/components/xHeader";
import {Outlet} from "react-router-dom";

const {Header, Content, Sider} = Layout;

const Home: React.FC = () => {
  const {
    token: {
      colorBgContainer,
      // borderRadiusLG
    },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{padding: 0}}>
        <XHeader/>
      </Header>
      <Layout>
        <Sider style={{background: colorBgContainer}}>
          <XMenu/>
        </Sider>
        <Content style={{margin: "0 16px"}}>
          <XBreadcrumb/>
          <div
            style={{
              // padding: 24,
              minHeight: 360,
              minWidth: 1200,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;