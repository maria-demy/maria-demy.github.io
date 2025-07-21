import PropTypes from 'prop-types';

const BLOG_POSTS_DATA = [];

const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BlogPostCard = ({ post }) => (
  <article className="card group hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between mb-3">
      <time className="text-sm text-theme-muted font-body" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <span className="text-sm text-theme-muted font-body">
        {post.readTime}
      </span>
    </div>

    <h3 className="text-xl font-semibold text-theme-primary mb-3 group-hover:text-theme-accent transition-colors font-heading">
      {post.title}
    </h3>

    <p className="text-theme-secondary mb-4 line-clamp-3 font-body description">
      {post.summary}
    </p>

    <div className="flex items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 bg-theme-accent/20 text-theme-accent rounded text-xs font-medium font-mono tech-label"
          >
            {tag}
          </span>
        ))}
      </div>

      {post.external ? (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-theme-accent hover:text-theme-accent-hover font-medium text-sm transition-colors font-heading"
        >
          Read on Substack →
        </a>
      ) : (
        <button className="text-theme-accent hover:text-theme-accent-hover font-medium text-sm transition-colors font-heading">
          Read more →
        </button>
      )}
    </div>
  </article>
);

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    readTime: PropTypes.string.isRequired,
    external: PropTypes.bool,
    link: PropTypes.string,
  }).isRequired,
};

const Blog = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-theme-background-alt/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-primary mb-4 font-heading">
            Writing & Thoughts
          </h2>
          <p className="text-lg text-theme-secondary max-w-3xl mx-auto font-body description">
            Thoughts on software engineering, AI integration, women in tech, and
            the intersection of technology with life.
          </p>
        </div>

        <div className="text-center">
          <div className="card inline-block max-w-2xl">
            <p className="text-theme-secondary mb-4 font-body">
              Writing content coming soon...
            </p>
            <p className="text-sm text-theme-muted font-body">
              I'm working on sharing thoughts about software engineering, AI
              integration, and women in tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Blog;
