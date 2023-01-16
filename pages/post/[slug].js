import Layout from "components/layout";
import { getSinglePost, getAllPosts } from "lib/api";
import { PortableText } from "@portabletext/react";
// import { Carousel } from "react-responsive-carousel";

export default ({ post }) => {
  
  return (
    <Layout>
      <div className="flex flex-col gap-4 w-full">
        {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
        <div className="flex w-full pt-6 gap-6 items-center">
          <img
            className="rounded-full w-12 h-12"
            src={post.publisher.pic}
            alt={post.publisher.name}
          />
          <p className="text-gray-400 text-base">
            {post.publisher.name}, {post.date}
          </p>
        </div>
        <h1 className="font-bold text-3xl text-black">{post.title}</h1>
        <h4>{post.category}</h4>
        <div className="flex flex-col w-full gap-4">
          {/* <img
            className="w-full md:w-[350px] object-cover"
            src={post.image}
            alt={post.title}
          /> */}
          <PortableText value={post.content} />
          {/* <Carousel> */}
            {post.content.map((asset, index) =>
              asset.asset === "" || asset.asset === null ? null : (
                <div>
                  <img src={asset.asset} alt={index} />
                </div>
              )
            )}
          {/* </Carousel> */}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths: data,
    fallback: false,
  };
};
