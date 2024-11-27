import React from "react";

import {Layout} from "antd";
import XMenu from "@/components/xMenu";
import XBreadcrumb from "@/components/xBreadcrumb";
import XHeader from "@/components/xHeader";
import {Outlet} from "react-router-dom";
import "./index.css";

const {Header, Content, Sider} = Layout;

const Home: React.FC = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <XHeader/>
      </Header>

      <Layout>
        <Sider className="sider">
          <XMenu/>
        </Sider>
        <Layout>
          <Content className="content">
            <XBreadcrumb/>
            <div>
              <Outlet/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;