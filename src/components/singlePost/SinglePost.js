import './singlePost.scss';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Slade Wilson</b>
          </span>
          <span className="singlePostDate">Date: 2 hours ago</span>
        </div>
        <p className="singlePostDes">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, nemo
          suscipit. Accusamus quia, architecto nulla quisquam ipsa aperiam
          impedit, placeat, nemo itaque molestiae soluta assumenda eveniet atque
          numquam. Dolor ad ipsam ab molestiae fugiat enim aut eveniet fuga
          quidem dignissimos, molestias recusandae quaerat quo saepe hic.
          Dolorum, doloremque. Molestias magnam eveniet eligendi, aliquid minus
          tempora molestiae mollitia ad. Pariatur quibusdam eligendi adipisci
          dolor nobis aut dolorum, tempora vitae nam labore tenetur incidunt
          quia, hic repellat quidem earum iure! Fugiat, veritatis temporibus.
          Quia, porro officia, at cum, nostrum aut hic sapiente minima eligendi
          maiores nesciunt earum recusandae ullam. Adipisci, hic labore.m
          eveniet eligendi, aliquid minus tempora molestiae mollitia ad.
          Pariatur quibusdam eligendi adipisci dolor nobis aut dolorum, tempora
          vitae nam labore tenetur incidunt quia, hic repellat quidem earum
          iure! Fugiat, veritatis temporibus. Quia, porro officia, at cum,
          nostrum aut hic sapiente minima eligendi maiores nesciunt earum
          recusandae ullam. Adipisci, hic labore.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
