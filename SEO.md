# SEO Configuration

This website has been configured with comprehensive SEO optimizations to improve search engine visibility and social media sharing, specifically targeting searches for **Bazhena Dementyeva**, **Maria Dementyeva**, **Maria Demy**, and **bashdemy**.

## SEO Features Implemented

### 1. Meta Tags

- **Primary Meta Tags**: Title, description, keywords, author
- **Open Graph Tags**: For Facebook and other social media platforms
- **Twitter Card Tags**: For Twitter sharing
- **Additional Tags**: Theme color, mobile app capabilities, canonical URLs

### 2. Structured Data

- **Person Schema**: JSON-LD structured data for Bazhena Dementyeva
- **Alternate Names**: Includes Maria Dementyeva, Maria Demy, bashdemy
- **Professional Information**: Job title, skills, and expertise areas
- **Social Links**: GitHub profile and other professional links

### 3. Technical SEO

- **Sitemap**: `sitemap.xml` for search engine crawling
- **Robots.txt**: Instructions for search engine crawlers
- **Web App Manifest**: PWA capabilities for mobile devices
- **Canonical URLs**: Prevent duplicate content issues

### 4. Performance Optimizations

- **Code Splitting**: Vendor and utility chunks for faster loading
- **Asset Optimization**: Hashed filenames for cache busting
- **Minification**: Terser for production builds
- **Preconnect**: External domain optimization

## Target Search Terms

The website is specifically optimized for the following search terms:

- **Bazhena Dementyeva** - Primary professional name
- **Maria Dementyeva** - Alternative name variation
- **Maria Demy** - Shortened professional name
- **bashdemy** - GitHub handle and online identity

These terms are strategically placed in:

- Page titles and meta descriptions
- Open Graph and Twitter Card tags
- Structured data (JSON-LD)
- Content sections
- Web app manifest

## Files Created/Modified

### Core SEO Files

- `public/sitemap.xml` - Search engine sitemap
- `public/robots.txt` - Crawler instructions
- `public/manifest.json` - PWA manifest with name variations
- `index.html` - Enhanced with comprehensive meta tags

### React Components

- `src/components/SEO.jsx` - Reusable SEO component
- `src/App.jsx` - Updated with React Helmet integration
- `src/components/About.jsx` - Added professional identity section

### Build Configuration

- `vite.config.js` - Optimized for SEO and performance
- `scripts/optimize-seo.js` - SEO validation script
- `scripts/test-seo.js` - SEO testing for target terms
- `package.json` - Updated build scripts

## Usage

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

This will run SEO optimization before building.

### SEO Check

```bash
npm run seo
```

This will validate and create missing SEO files.

### SEO Testing

```bash
npm run test-seo
```

This will test that all target search terms are properly included.

## SEO Best Practices Implemented

1. **Semantic HTML**: Proper heading hierarchy and semantic elements
2. **Meta Descriptions**: Unique, compelling descriptions under 160 characters
3. **Title Tags**: Descriptive, keyword-rich titles under 60 characters
4. **Image Optimization**: Alt text and proper image formats
5. **Mobile Optimization**: Responsive design and mobile-first approach
6. **Page Speed**: Optimized assets and code splitting
7. **Social Sharing**: Open Graph and Twitter Card optimization
8. **Structured Data**: JSON-LD for rich snippets
9. **Name Variations**: Strategic placement of all name variations

## Maintenance

### Regular Updates

- Update `sitemap.xml` when adding new pages
- Refresh meta descriptions for new content
- Update structured data when professional info changes
- Monitor Core Web Vitals and page speed

### Content Guidelines

- Keep meta descriptions under 160 characters
- Use relevant keywords naturally
- Update content regularly for freshness
- Ensure all images have alt text
- Maintain name consistency across all platforms

## Testing SEO

### Local Testing

1. Use browser dev tools to inspect meta tags
2. Test social media sharing with Facebook Debugger
3. Validate structured data with Google's Rich Results Test
4. Check mobile responsiveness
5. Run `npm run test-seo` to verify target terms

### Production Testing

1. Submit sitemap to Google Search Console
2. Monitor Core Web Vitals in Google PageSpeed Insights
3. Test social sharing on actual platforms
4. Verify canonical URLs and redirects
5. Search for target terms to check ranking

## Search Term Strategy

### Primary Terms

- **Bazhena Dementyeva**: Main professional identity
- **Maria Dementyeva**: Full name variation
- **Maria Demy**: Shortened professional name
- **bashdemy**: Online handle and GitHub identity

### Implementation Strategy

- **Title Tags**: Include primary and secondary names
- **Meta Descriptions**: Natural inclusion of all variations
- **Content**: Organic placement in professional identity section
- **Structured Data**: Alternate names in JSON-LD schema
- **Social Media**: Consistent branding across platforms

## Future Enhancements

- Add blog post SEO components
- Implement dynamic sitemap generation
- Add analytics integration
- Create SEO-friendly URL structure
- Implement breadcrumb navigation
- Add more structured data types
- Monitor search rankings for target terms
