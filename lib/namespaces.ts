import axios from "axios";

interface ResponseGetNamespaces {
  namespaces: string[];
}

export async function getNamespaces(language: string) {
  const response = await axios.get<ResponseGetNamespaces>(
    `${process.env.API_URL}/namespaces/${language}`
  );

  const { namespaces } = response.data;

  return namespaces;
}

export async function getAllNamespacesIds(language: string) {
  const namespaces = await getNamespaces(language);

  return namespaces.map((namespace) => {
    return {
      params: { id: namespace },
    };
  });
}
