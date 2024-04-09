import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import MyDebitCards from "./my-debit-cards";

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active{
    color: #01D167;
  }
`;


const CardTabs: React.FC = () => (
  <StyledTabs
    defaultActiveKey='1'
    destroyInactiveTabPane
    tabBarGutter={32}
    size='small'
    items={[
      {
        label: "My debit cards",
        key: "1",
        children: <MyDebitCards />,
      },
      {
        label: "All company cards",
        key: "2",
        disabled: true,
        children: "All company cards",
      },
    ]}
  />
);

export default CardTabs;
