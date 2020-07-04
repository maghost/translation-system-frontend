import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { getAllLanguagesIds } from "lib/languages";
import { getNamespaces } from "lib/namespaces";

import { Layout } from "components";

import utilStyles from "styles/utils.module.scss";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllLanguagesIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const language = params.id;
  const namespaces = await getNamespaces(language);

  return {
    props: {
      language,
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
