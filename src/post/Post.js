import './post.scss';

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Classics</span>
          <span className="postCat">Fantasy</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">2 hours ago</span>
      </div>

      <p className="postDes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe
        tempora pariatur laboriosam laborum ex! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Impedit, saepe.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Hic saepe tempora pariatur laboriosam
        laborum ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Impedit, saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Hic saepe tempora pariatur laboriosam laborum ex! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Impedit, saepe.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Hic saepe tempora pariatur laboriosam
        laborum ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Impedit, saepe.
      </p>
    </div>
  );
};

export default Post;
