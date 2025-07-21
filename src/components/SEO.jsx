import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData,
}) => {
  const fullTitle = title
    ? `${title} | Bazhena Dementyeva (Maria Demy) - Software Engineer`
    : 'Bazhena Dementyeva (Maria Demy) - Senior Software Engineer | Backend, Cloud & AI Solutions';

  const fullDescription =
    description ||
    'Bazhena Dementyeva (Maria Dementyeva, Maria Demy, bashdemy) - Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions. Expert in Java, Python, React with focus on privacy-first engineering and scalable systems.';

  const fullKeywords =
    keywords ||
    'Bazhena Dementyeva, Maria Dementyeva, Maria Demy, bashdemy, software engineer, backend developer, cloud architect, AI engineer, Java developer, Python developer, React developer, privacy-first engineering, scalable systems';

  const fullUrl = url || 'https://maria-demy.github.io/';
  const fullImage = image || 'https://maria-demy.github.io/profile-picture.JPG';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:type" content={type} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      <link rel="canonical" href={fullUrl} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object,
};

export default SEO;
