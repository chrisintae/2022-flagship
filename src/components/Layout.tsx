import Head from "next/head";

import styles from "../components/sass/layout.module.sass";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className={styles["root-wrapper"]}>
      <HeadSEO />

      {/* <Header /> */}

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <div>Logo</div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a target="_new" href="https://www.linkedin.com/in/chrisintae/">
        Connect via LinkedIn
      </a>
      <small>
        Made with [NextJS] on [Netlify]. Built in Somerville w/ [Love].
      </small>
    </footer>
  );
};

const HeadSEO = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <meta name="theme-color" content="#fff" />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};
