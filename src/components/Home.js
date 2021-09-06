import Newspaper from "../images/newspaper.png";
import {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component{
    
    
    render() {
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post" key={post.id}>
                    <Link to={"/" + post.id}>
                    <div className="post_content">
                        <h2 className="post_title">{post.title}</h2>
                        <p className="post_body">{post.body}</p>
                    </div>
                    </Link>
                    </div>
                );
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="home">
                <div className="main_container">
                    <img src={Newspaper} className="news_img"/>
                    <h1>UNION DAILY</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam omnis nobis ex officiis.</p>
                    <button>JOIN US</button>
                </div>
                <div className="posts_container">
                    <h2>FEATURED ARTICLES</h2>
                    <div className="black_line">*</div>
                    <div className="posts_container_two">
                        {postList}
                    </div>
                </div>
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);