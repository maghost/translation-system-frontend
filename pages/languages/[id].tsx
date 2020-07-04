import { GetServerSideProps } from "next";
import Head from "next/head";

import { getNamespaces } from "lib/namespaces";

import { Layout } from "components";

import utilStyles from "styles/utils.module.scss";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const language = params.id;
  const languageId = Array.isArray(language) ? language[0] : language;
  const namespaces = await getNamespaces(languageId);

  return {
    props: {
      language: languageId,
      namespaces,
    },
  };
};

interface LanguageProps {
  language: string;
  namespaces: string[];
}

export default function Language(props: LanguageProps) {
  const { language, namespaces } = props;

  return (
    <Layout>
      <Head>
        <title>Idioma: {language}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{language}</h1>

        <h2 className={utilStyles.headingLg}>Namespaces</h2>

        <ul className={utilStyles.list}>
          {namespaces.map((namespace) => (
            <li className={utilStyles.listItem} key={namespace}>
              {namespace}
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  );
}
