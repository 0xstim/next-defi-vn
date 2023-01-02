import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";

export default function ZxStim(props) {
  const { t } = useTranslation("zxstim");
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-B3Z17PVC6F"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B3Z17PVC6F');
          `}
      </Script>
      <Head>
        <title>0xStim</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="0xStim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="0xStim" key="ogtitle" />
        <meta property="og:description" content="0xStim" key="ogdesc" />
        <meta property="og:site_name" content="0xStim" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/0xstim" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/0xstim" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/0xstim" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>README.md</h2>
          {/* center the below image */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <Image
              src="/0xstim-nouns.svg"
              alt="0xStim pfp"
              width={200}
              height={200}
            />
          </div>
          <p>
            👋 Hi, I’m 0xStim. I’m a fullstack developer in Python,
            Javascript and Solidity. Currently reading up a lot on Go and Rust
            for high performance systems. I'm a supporter of DeFi, hence the creation of Defi.vn.
          </p>

          {/* <div className="stim-info-container">
            <div className="stim-info">test 1</div>
            <div className="stim-info">test 2</div>
            <div className="stim-info">test 3</div>
          </div> */}
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zxstim"])),
      // Will be passed to the page component as props
    },
  };
}
