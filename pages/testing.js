import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ForDevelopers from "../components/ForDevelopers/ForDevelopers";
import ForInvestors from "../components/ForInvestors/ForInvestors";

export default function Home(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Defi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="defi.vn" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">Testing</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/testing" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇬🇧
                </p>
              </a>
            </Link>
            <Link href="/vi/testing" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇻🇳
                </p>
              </a>
            </Link>
          </div>
          <p>{t("test")}</p>
          <Link href="/">{t("back")}</Link>
          <br />
          <hr />
          <h3>
            {t("footer")}<a href="https://t.me/victoristocrat">@victoristocrat</a>
          </h3>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
