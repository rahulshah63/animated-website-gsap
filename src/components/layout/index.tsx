import { ReactNode, FC } from 'react';
import Header from './header';
import Footer from './footer';

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
  return (
    <div className={`flex flex-col justify-between items-center min-h-screen site-layout overflow-hidden ${className ?? ''}`}>
      {!hideheader && <Header classname={headerClass} />}
      <main className={`w-full px-5 sm:px-[1.5rem] lg:px-[3rem] xl:px-[5rem] ${mainClass}`}>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
