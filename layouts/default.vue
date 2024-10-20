<script>
import axios from 'axios';
import { OpenAI } from 'openai'; // Import OpenAI

export default {
  // ... existing code ...
  data() {
    return {
      // ... existing data ...
      openaiClient: new OpenAI({ apiKey: process.env.OPENAI_API_KEY }), // Initialize OpenAI client
    };
  },
  methods: {
    // ... existing methods ...
    
    async getCompletion(query, context) {
      const completion = await this.openaiClient.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: `Based on this context, answer the user query. Context: ${context}` },
          { role: "user", content: query }
        ]
      });
      return completion.choices[0].message;
    },

    async embeddQuery(query) {
      const response = await this.openaiClient.embeddings.create({
        input: query,
        model: "text-embedding-3-small"
      });
      return response.data[0].embedding;
    },

    async handleChatbotQuery(value) {
      const embeddedQuery = await this.embeddQuery(value.text); // Embed the user query
      const context = await this.getContext(embeddedQuery); // Get context using the embedded query
      const completion = await this.getCompletion(value.text, context); // Get completion from OpenAI
      this.messages.push({
        agent: 'bot',
        type: 'text',
        text: completion.content, // Use the content from the completion
      });
    },
    
    async messageSendHandler(value) {
      this.messages.push({
        agent: 'user',
        type: 'text',
        text: value.text,
      });

      this.botTyping = true;
      this.inputDisable = true;

      // Call the new handleChatbotQuery method instead of the previous API request
      await this.handleChatbotQuery(value);

      this.botTyping = false;
      this.inputDisable = false;
    },

    async getContext(queryvector) {
      // Create Pinecone client
      const pc = new PineconeClient.Pinecone({ fetchApi: fetch, apiKey: "d7713071-9c81-4409-a298-66026ed152d9" });
      const index = pc.Index("lukamindek");

      // Perform the query
      const queryResponse = await index.query({
        vector: queryvector,
        topK: 3,
        includeMetadata: true,
        includeValues: false,
      });

      // Return the query response
      return queryResponse;
    },
  },
};
</script>