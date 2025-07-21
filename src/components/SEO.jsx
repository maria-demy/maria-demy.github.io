import { useEffect } from 'react';
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

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updatePropertyTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', fullDescription);
    updateMetaTag('keywords', fullKeywords);

    // Update Open Graph tags
    updatePropertyTag('og:title', fullTitle);
    updatePropertyTag('og:description', fullDescription);
    updatePropertyTag('og:url', fullUrl);
    updatePropertyTag('og:image', fullImage);
    updatePropertyTag('og:type', type);

    // Update Twitter tags
    updatePropertyTag('twitter:title', fullTitle);
    updatePropertyTag('twitter:description', fullDescription);
    updatePropertyTag('twitter:image', fullImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [
    fullTitle,
    fullDescription,
    fullKeywords,
    fullUrl,
    fullImage,
    type,
    structuredData,
  ]);

  return null; // This component doesn't render anything
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
