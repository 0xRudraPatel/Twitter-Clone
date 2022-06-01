import { Button } from "@nextui-org/react";

import MoreNav from "./MoreNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faCommentDots,
  faBoltLightning,
  faNewspaper,
  faRocket,
  faSquareArrowUpRight,
  faChartSimple,
  faGear,
  faCircleQuestion,
  faPalette,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const MorePopUp = () => {
  return (
    <>
      <Button.Group size="lg" vertical flat>
        <MoreNav Icon={<FontAwesomeIcon icon={faList} />} text="Lists" />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faCommentDots} />}
          text="Topics"
        />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faBoltLightning} />}
          text="Moments"
        />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faNewspaper} />}
          text="Newsletters"
        />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faRocket} />}
          text="Twitter for Professionals"
        />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faSquareArrowUpRight} />}
          text="Twitter Ads"
        />
        <MoreNav
          Icon={<FontAwesomeIcon icon={faChartSimple} />}
          text="Analytics"
        />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faGear} />}
          text="Settings and privacy"
        />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faCircleQuestion} />}
          text="Help Center"
        />

        <MoreNav Icon={<FontAwesomeIcon icon={faPalette} />} text="Display" />

        <MoreNav
          Icon={<FontAwesomeIcon icon={faUniversalAccess} />}
          text="Keyboard shortcuts"
        />
      </Button.Group>
    </>
  );
};

export default MorePopUp;
