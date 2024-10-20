// const PineconeClient = require('@pinecone-database/pinecone');
// const fetch = require('node-fetch');
// const openai = require("openai")

// const client = new openai.OpenAI({apiKey: "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"})

// async function getCompletion(query, context){
//     const completion = await client.chat.completions.create({
//         "model": "gpt-4o-mini",
//         "messages": [
//             {"role": "system", "content": `Based on this context, answer the user query.  Context : ${context}`},
//             {
//                 "role": "user",
//                 "content": query
//             }
//         ]
//     })
    
//     return completion.choices[0].message
// }

// async function embeddQuery(query){
//     const response = await client.embeddings.create({
//         "input": query,
//         "model": "text-embedding-3-small"
//     })
//     return response.data[0].embedding
// }

// async function getContext(queryvector) {
//   // Create Pinecone client
//   const pc = new PineconeClient.Pinecone({fetchApi: fetch, apiKey: "d7713071-9c81-4409-a298-66026ed152d9"});
//   const index = pc.Index("lukamindek");

//   // Perform the query
//   const queryResponse = await index.query({
//     vector: queryvector,
//     topK: 3,
//     includeMetadata: true,
//     includeValues: false,
//   });

//   // Return the query response
//   return queryResponse;
// }

// (async () => {
//     const query = "Hey"
//     const embedded_query = await embeddQuery(query)   // Await here
//     const context = await getContext(embedded_query)  // Await here
//     const completion = await getCompletion(query, context) // Await here
//     console.log(completion)
// })();
