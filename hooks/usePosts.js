import useSWRInfinite from "swr/infinite";
const PAGE_LIMIT = 3;
export const usePosts = ({initialData}) => {

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`, {initialData: [initialData]}
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    size,
    setSize,
    isValidating,
  };
};
