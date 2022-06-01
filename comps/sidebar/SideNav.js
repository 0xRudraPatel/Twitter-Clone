import { Spacer, Text, Button, Container } from "@nextui-org/react";

function SideNav({ text, Icon }) {
  return (
    <>
      <Button
        auto
        ghost
        css={{
          border: "none",
          fontSize: "1rem",
        }}
      >
        {Icon}
        <Spacer x="1" />
        {text}
      </Button>
      <Spacer y="0.75" />
    </>
  );
}

export default SideNav;
