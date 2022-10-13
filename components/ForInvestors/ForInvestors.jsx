import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ForInvestors() {
  // eslint-disable-next-line
  const { t } = useTranslation("common");
  const buttonStyle = {
    backgroundColor: "#ebebeb",
    margin: "5px 5px 5px 0px",
    padding: "15px 10px 15px 10px",
    WebkitAppearance: "none",
    borderRadius: "6px",
    border: "2px solid var(--color-border-default)",
    fontSize: "20px",
    color: "var(--color-fg-default)",
  };

  return (
    <>
      <h2>{t("section-2")}</h2>
      <div
        style={{
          display: "grid",
          gap: "15px 15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <Link href="/crypto-ramp">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s2t1")}</h3>
          </a>
        </Link>
        <Link href="/defi-stats">
					<a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s2t2")}</h3>
          </a>
        </Link>
        <Link href="/defi-analytics">
					<a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s2t3")}</h3>
          </a>
        </Link>
        <Link href="/signals">
        	<a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s2t4")}</h3>
          </a>
        </Link>
        <Link href="/learn-defi">
        	<a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s2t5")}</h3>
          </a>
        </Link>
      </div>
    </>
  );
}