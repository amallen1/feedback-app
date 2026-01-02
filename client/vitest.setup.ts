import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./src/mocks/node";

beforeAll(() => server.listen({
    onUnhandledRequest(request){
        console.log('Unhandled request %s %s', request.method, request.url)
    }
}));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
