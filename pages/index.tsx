import { GetServerSideProps } from "next";

import Head from "next/head";
import Link from "next/link";

import { getLanguages } from "lib/languages";

import { Layout, siteTitle } from "components";

import utilStyles from "styles/utils.module.scss";

export const getServerSideProps: GetServerSideProps = async () => {
  const languages = await getLanguages();

  return { props: { languages } };
};

interface HomeProps {
  languages: string[];
}

export default function Home(props: HomeProps) {
  const { languages } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd}`}>
        <h2 className={utilStyles.headingLg}>Idiomas</h2>

        <ul className={utilStyles.list}>
          {languages.map((language) => (
            <li className={utilStyles.listItem} key={language}>
              <Link href="/languages/[id]" as={`/languages/${language}`}>
                <a>{language}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
