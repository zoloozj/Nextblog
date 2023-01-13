import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import ListItem from "components/list-item";

export default function Home({ posts }) {
  return (
    <Layout>
    <Intro />
    <ListItem />
      <div className="custom-grid w-full gap-6 pb-10 mx-auto">
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        {posts.map((post, index) => (
          <GridItem post={post} key={index} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
