import { ConfigProvider } from "antd";

const AntdConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotActiveWidth: 16,
            dotWidth: 8,
            dotHeight: 8,
          },
          Tabs: {
            itemSelectedColor: "#222222",
            inkBarColor: "#23CEFD",
          },
          Collapse: {
            headerBg: "#EDF3FF",
            headerPadding: "24px",
            contentPadding: "24px 24px 0px",
            contentBg: "#FFFFFF",
          },
          Button: {
            primaryColor: "#325BAF",
          },
        },
        token: {
          colorPrimary: "#01D167",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigProvider;
