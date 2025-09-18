import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { items } = await client.getEntries({
        content_type: "reactProjects",
      });

      const projectsArr = items.map((item) => {
        const { title, url, image: img } = item.fields;
        const id = item?.sys?.id;
        const image = img?.fields?.file?.url;

        return { id, title, url, image };
      });

      setProjects(projectsArr);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
