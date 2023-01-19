import useSWRInfinite from "swr/infinite";
const PAGE_LIMIT = 3;
export const usePosts = () => {

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    size,
    setSize,
  };
};
