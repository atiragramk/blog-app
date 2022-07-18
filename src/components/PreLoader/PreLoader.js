import { Skeleton, Space } from "antd";

export const PreLoader = () => {
  return (
    <>
      <Space
        direction="vertical"
        size="large"
        style={{ alignItems: "flex-end", width: "400px", margin: "20px 10px" }}
      >
        <Space>
          <Skeleton.Button shape="round" size="small" active />
          <Skeleton.Button shape="round" size="small" active />
        </Space>
        <Skeleton.Input size="default" active style={{ width: "380px" }} />
        <Skeleton.Input size="large" active style={{ width: "380px" }} />
        <Skeleton.Input size="default" active style={{ width: "380px" }} />
      </Space>
    </>
  );
};
