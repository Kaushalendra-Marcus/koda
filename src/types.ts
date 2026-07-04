interface Prompt {
  role: string;
  prompt: string;
}

type Role = "system" | "user" | "assistant" | "tool";

interface Tool {
  tool_name: string;
  description: string;
  action: string;
}
interface LLM_Response {
  response: string;
}
