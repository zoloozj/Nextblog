import GridItem from "components/grid-item";
import { getPaginatedPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import ListItem from "components/list-item";
import { usePosts } from "hooks/usePosts";
const PAGE_LIMIT = 3;

export default function Home({ posts }) {
  const { data, isLoading, error, size, setSize, isValidating } = usePosts({
    posts,
  });
  return (
    <Layout>
      <Intro />
      <ListItem />
      <>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {isLoading ? (
          <div className="py-12 mx-auto w-full flex justify-center">
            <h2 className="text-xl font-bold">Түр хүлээнэ үү...</h2>
          </div>
        ) : (
          <div className="custom-grid w-full gap-6 pb-10 mx-auto">
            {data.map((page) =>
              page.map((post, index) => <GridItem post={post} key={index} />)
            )}
          </div>
        )}

        {data && data[data.length - 1].length !== 0 &&
          (isValidating ? (
            <div className="py-12 mx-auto w-full flex justify-center">
              <h2 className="text-xl font-bold">Түр хүлээнэ үү...</h2>
            </div>
          ) : (
            <div className="text-center">
              {" "}
              <button
                onClick={() => setSize(size + 1)}
                className="text-blue-600 hover:text-blue-400"
              >
                Цааш нь ...
              </button>{" "}
            </div>
          ))}
      </>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPaginatedPosts(0, PAGE_LIMIT);
  console.log("Index Дахин build хийгдлээ");
  return {
    props: {
      posts,
    },
    // revalidate: 10,
  };
};
