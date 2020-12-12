import { graphql } from 'gatsby';
import PostList from '../components/PostList';

const React = require('react');

export default function BlogPage({ data }) {
  const posts = data.posts.nodes;
  return (
    <>
      <PostList posts={posts}>
        <p>hi</p>
      </PostList>
    </>
  );
}

export const query = graphql`
  query PostQuery {
    posts: allSanityPost {
      nodes {
        id
        title
        date
        keywords
        text {
          _rawChildren
          style
          list
        }
      }
    }
  }
`;
