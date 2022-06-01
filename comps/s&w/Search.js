import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Input } from "@nextui-org/react";

const Search = () => {
  return (
    <>
      <Input
        bordered
        labelLeft={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        fullWidth
        placeholder="Search Twitter"
      />
    </>
  );
};

export default Search;
