interface Prompt{
    role : string,
    prompt : string
}

interface Tool{
    tool_name : string,
    description : string,
    action : string
}
interface LLM_Response{
    response : string
}