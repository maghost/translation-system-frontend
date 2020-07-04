import axios from "axios";

interface ResponseGetLanguages {
  languages: string[];
}

export async function getLanguages() {
  const response = await axios.get<ResponseGetLanguages>(
    `${process.env.apiUrl}/languages`
  );

  const { languages } = response.data;

  return languages;
}

export async function getAllLanguagesIds() {
  const languages = await getLanguages();

  return languages.map((language) => {
    return {
      params: { id: language },
    };
  });
}
