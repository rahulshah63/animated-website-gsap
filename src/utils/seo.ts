// import logo from "assets/icons/cedro-logo.png";

export const getSchemaOrgJSONLD = ({ siteMetadata, pageMetaData }) => {
  const context = "https://schema.org";

  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  } = siteMetadata;
  const {
    title,
    author,
    description,
    image,
    type,
    slug: url,
    date,
    keywords,
    category,
  } = pageMetaData;
  const isBlogPost = type === "blog-post";
  const schemaOrgJSONLD = [
    {
      "@context": context,
      "@type": "WebSite",
      url: siteUrl,
      name: title || siteTitle,
      alternateName: siteTitle,
    },
  ];

  if (!isBlogPost) return schemaOrgJSONLD;

  return [
    ...schemaOrgJSONLD,
    {
      "@context": context,
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": url,
            name: title,
            image: image.src,
          },
        },
      ],
    },
    {
      "@context": context,
      "@type": "BlogPosting",
      url,
      name: title,
      alternateName: siteTitle,
      headline: title,
      keywords,
      genre: category,
      image: {
        "@type": "ImageObject",
        url: image.src,
      },
      description,
      author: {
        "@type": "Person",
        name: author.name,
      },
      publisher: {
        "@type": "Organization",
        url: siteUrl,
        // logo: {
        //   "@type": "ImageObject",
        //   url: `${siteUrl}/${String(logo)}`,
        // },
        name: author.organization,
      },
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": siteUrl,
      },
      datePublished: date,
      dateModified: date,
    },
  ];
};

export const og = ({ title, description, image, siteUrl }) => [
  { property: "og:locale", content: "en_US" },
  { property: "og:site_name", content: "Gangstabet" },
  {
    property: "og:url",
    content: siteUrl,
  },
  {
    property: "og:title",
    content: title,
  },
  {
    property: "og:description",
    content: description,
  },
  {
    property: "og:image",
    content: image,
  },
  {
    property: "og:type",
    content: "website",
  },
];

export const twitterCard = ({ title, description, image }) => [
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: "@GangstabetNFT" },
  {
    name: "twitter:title",
    content: title,
  },
  {
    name: "twitter:description",
    content: description,
  },
  {
    name: "twitter:image",
    content: image,
  },
];
