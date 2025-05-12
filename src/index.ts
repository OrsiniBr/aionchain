import { Assistant } from 'openai/resources/beta/assistants.mjs';
import OpenAi from "openai";
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from './openai/createRun';
import { performRun } from './openai/performRun';

async function main() {
    const client = new OpenAi();
    const message = "helo alt"

    const Assistant = await createAssistant(client);
    const Thread = await createThread(client, message);
    const run = await createRun(client, Thread, Assistant.id);
    const result = await performRun(run, client, Thread);


    console.log("Hello, world!");
}
main();