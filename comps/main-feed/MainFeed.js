import Post from "./Post";
import StickyNav from "./StickyNav";
import TweetBox from "./TweetContainer/TweetBox";

const MainFeed = () => {
  return (
    <>
      <StickyNav
        style={{
          position: "sticky",
          top: "0",
        }}
      />
      <TweetBox />
      <Post />
    </>
  );
};

export default MainFeed;
