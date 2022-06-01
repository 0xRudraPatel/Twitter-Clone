import { Link, Spacer, Text } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StickyNav = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          borderBottom: "1px solid silver",
        }}
      >
        <Link href="#" color="text">
          <Text h4 weight="extrabold">
            Home
          </Text>
        </Link>
        <Link color="text" href="#">
          <FontAwesomeIcon icon={faStar} size="lg" />
        </Link>
      </div>
    </>
  );
};

export default StickyNav;
