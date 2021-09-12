import sanityClient from '@sanity/client'
//used to get data from sanity, but must install sanity data package


//every sanity project has a projectId... look at sanity.json
export default sanityClient({
    projectId: "rg3xxfyh",
    dataset: "production"
})