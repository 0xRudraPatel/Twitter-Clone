import {
  Row,
  Text,
  Container,
  Link,
  Spacer,
  Popover,
  Button,
} from "@nextui-org/react";

import SideNav from "./SideNav";
import SideButton from "./SideButton";
import MorePopUp from "./MorePopUp";

// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faHashtag,
  faUserGroup,
  faBell,
  faEnvelope,
  faBookmark,
  faUser,
  faEllipsis,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div>
        <Button auto ghost css={{ border: "none" }}>
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </Button>

        <Spacer y="1" />

        <SideNav
          Icon={<FontAwesomeIcon icon={faHouse} size="xl" />}
          text="Home"
        />
        <SideNav
          Icon={<FontAwesomeIcon icon={faHashtag} size="xl" />}
          text="Explore"
        />
        <SideNav
          Icon={<FontAwesomeIcon icon={faUserGroup} size="xl" />}
          text="Communities"
        />
        <SideNav
          Icon={<FontAwesomeIcon icon={faBell} size="xl" />}
          text="Notifications"
        />
        <SideNav
          Icon={<FontAwesomeIcon icon={faEnvelope} size="xl" />}
          text="Messages"
        />
        <SideNav
          Icon={<FontAwesomeIcon icon={faBookmark} size="xl" />}
          text="Bookmarks"
        />
        <SideNav
          Icon={<FontAwesomeIcon icon={faUser} size="xl" />}
          text="Profile"
        />

        <Popover placement="right-bottom">
          <Popover.Trigger>
            <Button auto ghost css={{ border: "none", fontSize: "1rem" }}>
              <FontAwesomeIcon icon={faEllipsis} size="xl" />
              <Spacer x="1" />
              More
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <MorePopUp />
          </Popover.Content>
        </Popover>

        <Spacer y="1" />

        <SideButton />
      </div>
    </>
  );
};

export default Sidebar;
