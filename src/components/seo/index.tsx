import { Helmet } from "react-helmet";

interface ISeoProps {
    title: string;
    description: string;
}

export default function Seo({ title, description }: ISeoProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}
