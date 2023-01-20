import client from "lib/sanity";

export const getPaginatedPosts = async (page, limit = 3) => {
  const posts = await client.fetch(
    `*[_type=="post"]{title, content, category, date, "image": cover_image.asset->url, 
    "slug":slug.current, 'publisher':publisher->{name, 'pic':picture.asset->url}} | order(date desc)
    [${page * limit}...${(page + 1) * limit}] `
  );

  return posts;
};

export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{title, content, category, date, "image": cover_image.asset->url, 
    "slug":slug.current, 'publisher':publisher->{name, 'pic':picture.asset->url}} | order(date desc)`
  );

  return posts;
};

export const getSinglePost = async (slug) => {
  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug]{_updatedAt, title, content[]{..., 'asset':asset->url},
     category, date, "image": cover_image.asset->url, "slug":slug.current, 
     'publisher':publisher->{name, 'pic':picture.asset->url}}`,
    { slug }
  );
  return post;
};
