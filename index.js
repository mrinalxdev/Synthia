import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/dist/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
dotenv.cofig()

const tools = [new Calculator(), new SerpAPI()];

const llm = new ChatOpenAI({ modelName: "gpt-3.5", temperature: 0 });

const excutor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
});

//Prompting
const result = await excutor.run("What is the date today ?")

console.log(result);