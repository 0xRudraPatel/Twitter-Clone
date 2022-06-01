import { Button } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import AvatarBox from "./AvatarBox";
import Icons from "./Icons";

const TweetBox = () => {
  return (
    <>
      <div style={{ padding: "0 20px", borderBottom: "1px solid silver" }}>
        <AvatarBox />
        <Icons />
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
      </div>
    </>
  );
};

export default TweetBox;
