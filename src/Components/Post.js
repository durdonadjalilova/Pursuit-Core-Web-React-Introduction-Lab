import React from "react";
import "../styles/post.css";

// function Post() {
//   return (
//     <section className="post">
//       <h2>Title</h2>
//       <p>Lorem Ipsem</p>
//     </section>
//   );
// }


class Post extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <section className="post">
      <h2>Title</h2>
      <p>Lorem Ipsem</p>
    </section>
  )
  }
}
export default Post;
