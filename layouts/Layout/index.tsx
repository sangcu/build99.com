import Head from "next/head";
import LayoutProps from "./Layout.props";

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  renderHeader,
  renderMain,
  renderFooter,
}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renderHeader && (
        <header className="sticky h-full lg:block top-0 z-50">
          {renderHeader()}
        </header>
      )}
      {renderMain ? (
        renderMain()
      ) : (
        <main>
            {children}
        </main>
      )}
      {renderFooter && <footer>{renderFooter()}</footer>}
    </>
  );
};

export default Layout;
