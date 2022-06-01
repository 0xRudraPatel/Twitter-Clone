import { Spacer, Text, Row, Button } from "@nextui-org/react";

const MoreNav = ({ text, Icon }) => {
  return (
    <>
      <Button
        ghost
        css={{
          border: "none",
          fontSize: "1rem",
        }}
      >
        {Icon}
        <Spacer x="0.5" />
        {text}
      </Button>
    </>
  );
};

export default MoreNav;
