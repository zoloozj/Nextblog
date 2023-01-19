import Layout from "components/layout";
import { getSinglePost, getPaginatedPosts } from "lib/api";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import { useRouter } from "next/router";
export default ({ post }) => {

  const router = useRouter();

  if(router.isFallback) return (
    <layout>
      <h1>Түр хүлээнэ үү...</h1>
    </layout>
  )

  moment.locale("en");
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
            {post.publisher.name}, {moment(post.date).format("lll")}
          </p>
        </div>
        <h1 className="font-bold text-3xl">{post.title}</h1>
        <h4>{post.category}</h4>
        <div className="flex flex-col w-full gap-4">
          <PortableText key={post._id} value={post.content} />
          {post.content.map((asset, index) =>
            asset.asset === "" || asset.asset === null ? null : (
              <div>
                <img key={index} src={asset.asset} alt={index} />
              </div>
            )
          )}
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
  const posts = await getPaginatedPosts(0,);
  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths: data,
    fallback: true,
  };
};
