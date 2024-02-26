import { ReactNode, FC, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    hideheader?: boolean;
    hideFooter?: boolean;
    headerClass?: string;
    mainClass?: string;
}

const Layout: FC<LayoutProps> = ({
    children,
    className,
    hideheader,
    hideFooter,
    headerClass,
    mainClass,
}: LayoutProps) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <HelmetProvider>
            <div
                className={`flex scroll-smooth flex-col justify-between items-center min-h-screen bg-[rgb(244,240,250)] site-layout overflow-hidden ${
                    className ?? ""
                }`}
            >
                {!hideheader && (
                    <Header
                        setShowMobileMenu={setShowMobileMenu}
                        showMobileMenu={showMobileMenu}
                        classname={headerClass}
                    />
                )}
                <main className={`w-full  ${mainClass}`}>{!showMobileMenu && children}</main>
                {!hideFooter && <Footer classname="bg-white" />}
            </div>
        </HelmetProvider>
    );
};

export default Layout;
