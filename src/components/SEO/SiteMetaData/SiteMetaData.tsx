import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

// import defaultCoverImage from "assets/images/.jpg";
import { getSchemaOrgJSONLD, og, twitterCard } from "@/utils/seo";

const SiteMetaData = ({ siteMetadata, pageMetaData }) => {
  const { siteTitle, siteDescription, siteKeywords, siteUrl } = siteMetadata;

  const { pageTitle, pageDescription, pageKeywords, pageImage } = pageMetaData;

  const title = pageTitle || siteTitle;
  const description = pageDescription || siteDescription;
  const keywords = pageKeywords || siteKeywords;
  const coverImage =
    pageImage && pageImage.src ? pageImage.src : null;
  const imageUrl = coverImage;
  const schemaOrgConfig = getSchemaOrgJSONLD({ pageMetaData, siteMetadata });
  const canonicalUrl = `${siteUrl}${window.location.pathname}`;

  const helmetMeta = [
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: keywords,
    },
    { name: "author", content: "Gangstabet" },
    ...og({ title, description, image: imageUrl, siteUrl }),
    ...twitterCard({ title, description, image: imageUrl }),
  ];

  return (
    <Helmet title={title} meta={helmetMeta}>
      <html lang="en" />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgConfig)}
      </script>
    </Helmet>
  );
};

SiteMetaData.defaultProps = {
  pageMetaData: {},
};

SiteMetaData.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
  pageMetaData: PropTypes.object,
};

export default SiteMetaData;
