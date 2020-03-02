import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogIndex: React.FC<{}> = (props: any) => {
  const siteTitle = props.data.site.siteMetadata.title;
  const posts = props.data.allContentfulBlogPost.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title='All posts' />
      <Bio />
      {posts.map(({ node }: any) => {
        const title = node.title || node.slug;
        return (
          <article key={node.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`/blog/${node.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{node.publishDate}</small>
            </header>
            {/* <Img alt='' sizes={node.heroImage.sizes} /> */}
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
query BlogQuery {
  site {
    siteMetadata {
      title
    }
  }
  allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
    edges {
      node {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`;
