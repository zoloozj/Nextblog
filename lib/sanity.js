const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: "napznkki",
  dataset: "production",
  apiVersion: '2023-01-12', // use current UTC date - see "specifying API version"!
//   token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: process.NODE_ENV === 'production', // `false` if you want to ensure fresh data
})

export default client