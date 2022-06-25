import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u8vfaq0n3u01uhbi77ca1z/master',
  cache: new InMemoryCache()
})