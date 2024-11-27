import React from "react";
import {Row, Col, Card, Timeline, Tag} from "antd";
import "./index.css";
import {RadarChartOutlined, SnippetsOutlined, DollarOutlined, LaptopOutlined} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";

const option = {
  title: {
    text: "堆叠区域图"
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["邮件营销", "联盟广告", "视频广告"]
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "邮件营销",
      type: "line",
      stack: "总量",
      areaStyle: {normal: {}},
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "联盟广告",
      type: "line",
      stack: "总量",
      areaStyle: {normal: {}},
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "视频广告",
      type: "line",
      stack: "总量",
      areaStyle: {normal: {}},
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
};

const option2 = {
  title: {
    text: "ECharts 入门示例"
  },
  tooltip: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  legend: {
    data: ["销量"]
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: "销量",
    type: "bar",
    data: [5, 20, 36, 10, 10, 20]
  }]
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <div className="topStats">
              <div>
                <h2>12479</h2>
                <p>园区总面积(平方米)</p>
              </div>
              <div className="topStats-icon">
                <RadarChartOutlined className="icon"/>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="topStats">
              <div>
                <h2>8635</h2>
                <p>总租赁面积(平方米)</p>
              </div>
              <div className="topStats-icon">
                <SnippetsOutlined className="icon"/>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="topStats">
              <div>
                <h2>38764</h2>
                <p>园区总产值(万元)</p>
              </div>
              <div className="topStats-icon">
                <DollarOutlined className="icon"/>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="topStats">
              <div>
                <h2>2874</h2>
                <p>入驻企业总数(家)</p>
              </div>
              <div className="topStats-icon">
                <LaptopOutlined className="icon"/>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{marginTop: "16px"}}>
        <Col span={12}>
          <Card title="能源消耗情况">
            <ReactECharts option={option}></ReactECharts>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="企业资质情况">
            <ReactECharts option={option2} opts={{renderer: "svg"}}></ReactECharts>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="实时车辆信息" style={{height: "406px"}}>
            <Timeline items={[
              {
                children: <><Tag color="green">进场</Tag>08:24车辆 京A66666</>
              },
              {
                children: <><Tag color="red">出场</Tag>09:15 车辆 京A66666 </>,
                color: "red",
              },
              {
                children: <><Tag color="green">进场</Tag>09:22 车辆 京A23456 </>,
              },
              {
                children: <><Tag color="red">出场</Tag>10:43 车辆 京A18763 </>,
                color: "red",
              },
              {
                children: <><Tag color="green">进场</Tag>13:38 车辆 京A88888 </>,
              },
              {
                children: <><Tag color="green">进场</Tag>14:46 车辆 京A23456 </>,

              },
            ]}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;