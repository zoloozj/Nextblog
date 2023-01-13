import Layout from "components/layout";
import { getSinglePost } from "lib/api";

export default ({ post }) => {
  return (
    <Layout>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full pt-6 gap-6 items-center">
          <img
            className="rounded-full w-12 h-12"
            src={post.publisher.pic}
            alt=""
          />
          <p className="text-gray-400 text-base">
            {post.publisher.name}, {post.date}
          </p>
        </div>
        <h1 className="font-bold text-3xl text-black">{post.title}</h1>
        <h4>{post.category}</h4>
        <div className="flex w-full gap-4">
          <img className="w-[400px] object-cover" src={post.image} alt="" />
          <p className="text-justify py-4 text-gray-600">{post.content}</p>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};
