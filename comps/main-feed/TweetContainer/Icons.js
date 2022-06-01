import { Avatar, Input } from "@nextui-org/react";

const Icons = () => {
  return (
    <>
      <div
        style={{
          paddingBottom: "20px",
          borderBottom: "1px solid silver",
        }}
      >
        <Input
          fullWidth
          clearable
          bordered
          size="sm"
          placeholder="Optional : Add Image URL"
        />
      </div>
    </>
  );
};

export default Icons;
