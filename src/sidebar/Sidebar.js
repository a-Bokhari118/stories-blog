import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1603169130499-04f370dae46d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="about me"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dignissimos illo, ad ea obcaecati Lorem, ipsum.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Classics</li>
          <li className="sidebarListItem">Graphic Novel</li>
          <li className="sidebarListItem">Detective and Mystery</li>
          <li className="sidebarListItem">Fantasy</li>
          <li className="sidebarListItem">Horror</li>
          <li className="sidebarListItem">Romance</li>
          <li className="sidebarListItem">Science Fiction</li>
          <li className="sidebarListItem">Short Stories</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
