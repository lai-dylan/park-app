import React from "react";

import {Layout, theme} from "antd";
import XMenu from "@/components/xMenu";
import XBreadcrumb from "@/components/xBreadcrumb";
import XHeader from "@/components/xHeader";

const {Header, Content, Sider} = Layout;

const titleStyle = {
  color: "#000",
  margin: "15px 15px 15px 26px",
  height: "34px",
  fontSize: "23px",
  fontWeight: "bold"
};

const Home: React.FC = () => {
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Sider style={{background: colorBgContainer}}>
        <div className="demo-logo-vertical"/>
        <div style={titleStyle}>Park App</div>
        <XMenu/>
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer}}>
          <XHeader/>
        </Header>
        <Content style={{margin: "0 16px"}}>
          <XBreadcrumb/>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;