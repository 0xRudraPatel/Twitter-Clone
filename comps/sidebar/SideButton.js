import { Button, Text } from "@nextui-org/react";

const SideButton = () => {
  return (
    <>
      <Button
        css={{
          border: "$space$1 solid transparent",
          background: "$blue800",
          height: "$14",
          marginTop: "10px",
          marginBottom: "10px",
          marginLeft: "auto",
          boxShadow: "$md",
          "&:hover": {
            background: "$blue100",
            color: "$blue800",
          },
          "&:active": {
            background: "$blue200",
          },
          "&:focus": {
            borderColor: "$blue400",
          },
        }}
      >
        Tweet
      </Button>
    </>
  );
};

export default SideButton;
