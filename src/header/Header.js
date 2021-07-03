import './header.scss';
const header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Novels & Stories</span>
        <span className="headerTitleLg"> Blog</span>
      </div>
      <div className="headerImg">
        <img
          src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="story"
        />
      </div>
    </div>
  );
};

export default header;
