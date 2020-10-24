import React from 'react';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

// Actions
import { fetchPostsAndUser } from '../actions';


class PostList extends React.Component {
    componentDidMount() {
      this.props.fetchPostsAndUser();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div key={post.id} className="item">
                    <i className="large middle ligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2 className="">{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }

    render() {
      return (
          <div className="ui relaxed divided list">
            {this.renderList()}
          </div>
        )
    }
  }
  

const mapStateToProps = (state) => {

    return { posts: state.posts }
}


export default connect(mapStateToProps, {fetchPostsAndUser})(PostList);