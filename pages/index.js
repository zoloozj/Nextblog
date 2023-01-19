import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import ListItem from "components/list-item";
import { usePosts } from "hooks/usePosts";
const PAGE_LIMIT = 3;

export default function Home({ posts }) {
  const { data, isLoading, error, size, setSize } = usePosts();
  return (
    <Layout>
      <Intro />
      <ListItem />
      <>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className="custom-grid w-full gap-6 pb-10 mx-auto">
          {data && data.map((page) =>
            page.map((post, index) => <GridItem post={post} key={index} />)
          )}
        </div>
        {data && data[data.length - 1].length !== 0 && (
          <div className="text-center">
            {" "}
            <button
              onClick={() => setSize(size + 1)}
              className="text-blue-600 hover:text-blue-400"
            >
              Цааш нь ...
            </button>{" "}
          </div>
        )}
      </>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts(1, PAGE_LIMIT);

  return {
    props: {
      posts,
    },
  };
};
