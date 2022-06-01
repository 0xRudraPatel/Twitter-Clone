import { Avatar, Image, Spacer, Text, Button } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faComment,
  faRetweet,
  faHeart,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  return (
    <>
      <div style={{ padding: "15px 20px", border: "1px solid silver" }}>
        <div style={{ display: "flex" }}>
          <div>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="lg"
            />
          </div>
          <div style={{ padding: "0 0 0 20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text size="18px" weight="semibold">
                Rachel Green
              </Text>
              <Spacer x="0.25" />
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#42A5F5" }}
              />
              <Spacer x="0.5" />
              <Text color="silver" size="16px">
                @RachelGreen
              </Text>
            </div>
            <Text css={{ maxWidth: "fit-content" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quaerat neque architecto repudiandae atque?
              Necessitatibus, quam magnam tenetur hic unde culpa consectetur
              temporibus consequatur, officiis a explicabo expedita, non
              quaerat!
            </Text>
            <Spacer x="0.25" />
            <div style={{ maxWidth: "550px" }}>
              <Image
                autoResize
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Hello_%28yellow%29.svg"
                alt="post"
              />
            </div>
            <Spacer x="0.25" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button color="white" auto ghost css={{ border: "none" }}>
            <FontAwesomeIcon icon={faComment} />
          </Button>
          <Button color="white" auto ghost css={{ border: "none" }}>
            <FontAwesomeIcon icon={faRetweet} />
          </Button>
          <Button color="white" auto ghost css={{ border: "none" }}>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button color="white" auto ghost css={{ border: "none" }}>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Post;
