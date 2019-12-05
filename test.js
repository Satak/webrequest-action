const webrequest = require('./webrequest');

const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
let method = 'get';
let payload = { title: 'jest post 1' };
const headers = { Authorization: 'Token 123' };
const username = 'username';
const password = 'password';

test('webrequest get', async () => {
  expect.assertions(2);
  method = 'get';
  const res = await webrequest(url, method, null, headers, username, password);

  expect(res.status).toBe(200);
  expect(res.data[0].id).toBe(1);
});

test('webrequest post', async () => {
  expect.assertions(1);
  method = 'post';
  const res = await webrequest(url, method, payload, headers, username, password);

  expect(res.status).toBe(201);
});

test('webrequest put', async () => {
  expect.assertions(2);
  method = 'put';
  const title = 'jest put';
  const res = await webrequest(`${url}/1`, method, { title }, headers, username, password);

  expect(res.status).toBe(200);
  expect(res.data).toEqual({ title, id: 1 });
});

test('webrequest patch', async () => {
  expect.assertions(2);
  method = 'patch';
  const title = 'jest patch';
  const res = await webrequest(`${url}/1`, method, { title }, headers, username, password);

  expect(res.status).toBe(200);
  expect(res.data).toEqual({ title, id: 1 });
});

test('webrequest delete', async () => {
  expect.assertions(1);
  method = 'delete';
  const res = await webrequest(`${url}/1`, method, null, headers, username, password);

  expect(res.status).toBe(200);
});
