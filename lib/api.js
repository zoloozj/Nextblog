import client from "lib/sanity";

export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{_updatedAt, title, content, category, date, "image": cover_image.asset->url, "slug":slug.current, 'publisher':publisher->{name, 'pic':picture.asset->url}} | order(_updatedAt desc)`
  );

  return posts;
};