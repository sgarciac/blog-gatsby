import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Bio from "../components/bio";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";


export default class BlogList extends React.Component {
	render() {
		const posts = this.props.data.allMarkdownRemark.edges;
		const { previousIndexPath, nextIndexPath, currentPage } = this.props.pageContext

		const siteTitle = this.props.data.site.siteMetadata.title;

		return (
				<Layout location={this.props.location} title={siteTitle}>
				<SEO title="All posts" />
				<Bio />
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (
						<article key={node.fields.slug}>
							<header>
								<h3
									style={{
										marginBottom: rhythm(1 / 4),
									}}
								>
									<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
										{title}
									</Link>
								</h3>
								<small>{node.frontmatter.date}</small>
							</header>
							<section>
								<p
									dangerouslySetInnerHTML={{
										__html:  node.excerpt,
									}}
								/>
							</section>
						</article>
					)
				})}

				<nav>
					<ul
						style={{
							display: `flex`,
							flexWrap: `wrap`,
							justifyContent: `space-between`,
							listStyle: `none`,
							padding: 0,
						}}
					>
						<li>
							{previousIndexPath && (
								<Link to={previousIndexPath} rel="prev">
									← {currentPage - 1}
								</Link>
							)}
						</li>
						<li>
							{nextIndexPath && (
								<Link to={nextIndexPath} rel="next">
									{currentPage + 1} →
								</Link>
							)}
						</li>
					</ul>
				</nav>

			</Layout>

		);
	}
}
export const blogListQuery = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
	 site {
			siteMetadata {
				title
				author
			}
		}

		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					excerpt(pruneLength: 160)
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						description
					}
				}
			}
		}
	}
`;
