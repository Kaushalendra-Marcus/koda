type Role = "system" | "user" | "assistant" | "tool";

interface Message {
  role: Role;
  content: string;
}

interface Tool {
  tool_name: string;
  description: string;
  action: string;
}

interface LLM_Response {
  response: string;
}
