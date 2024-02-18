import { siteConfig } from "@/configs/siteConfig";
import SiteMetaData from "./SiteMetaData/SiteMetaData";

const SEO = ({ children, pageMetaData }) => {
  const { siteMetadata } = siteConfig;
  return (
    <>
      <SiteMetaData siteMetadata={siteMetadata} pageMetaData={pageMetaData} />
      {children}
    </>
  );
};

export default SEO;
