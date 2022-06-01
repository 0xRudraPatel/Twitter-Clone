import { Avatar, Textarea } from "@nextui-org/react";

const AvatarBox = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "Space-between",
          margin: "20px 0",
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="md"
        />
        <Textarea
          fullWidth
          size="lg"
          bordered
          borderWeight="none"
          placeholder="What's happening?"
          css={{ margin: "0  0 0 10px" }}
        />
      </div>
    </>
  );
};

export default AvatarBox;
