import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { fakeResponse } from './test_elements';

export const handlers = [
  rest.get(`https://randomuser.me/api/`, (req, res, ctx) => {
    // we can grab the request params if we need them
    // with req.url.searchParams.get('paramName')
    return res(ctx.status(200), ctx.json(fakeResponse), ctx.delay(0));
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." })
    );
  })
];

const server = setupServer(
  ...handlers
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export * from 'msw';
export * from 'msw/node';

// override server
export { server };
