import axios from "axios";

interface ResponseGetNamespaces {
  namespaces: string[];
}

export async function getNamespaces(id) {
  const response = await axios.get<ResponseGetNamespaces>(
    `${process.env.apiUrl}/namespaces/${id}`
  );

  const { namespaces } = response.data;

  return namespaces;
}

export async function getAllNamespacesIds(id) {
  const namespaces = await getNamespaces(id);

  return namespaces.map((namespace) => {
    return {
      params: { id: namespace },
    };
  });
}
