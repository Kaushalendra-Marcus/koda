type Role = "system" | "user" | "assistant" | "tool";

interface Message {
  role: Role;
  content: string;
}

interface Tool {
  name: string;
  description: string;
  execute: (args: unknown) => Promise<unknown>;
}

interface LLM_Response {
  message: Message;
}
