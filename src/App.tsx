import { useState } from "react";
import { useFetch } from "./api";
import { LeftNavItem } from "./types";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import LeftNavigation from "./modules/left-navigation";
import AntdConfigProvider from "./providers/AntdProvider";
import ModuleProvider from "./providers/ModuleProvider";

function App() {
  const { data, error, isLoading } = useFetch<LeftNavItem[]>("/left-nav");
  const [activeKey, setActiveKey] = useState("cards");

  if (isLoading || !data) {
    return (
      <Spin
        size={"large"}
        indicator={<LoadingOutlined className='text-brand' />}
        fullscreen
        tip='Loading Modules'
      />
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <AntdConfigProvider>
      <div className='mx-auto w-full h-[100vh] flex'>
        <div className='w-[25%] max-w-[360px]'>
          <LeftNavigation
            leftNavConfig={data}
            activeKey={activeKey}
            onMenuItemClick={(value: string) => setActiveKey(value)}
          />
        </div>
        <div className='w-[75%]'>
          <ModuleProvider activeKey={activeKey} />
        </div>
      </div>
    </AntdConfigProvider>
  );
}

export default App;
