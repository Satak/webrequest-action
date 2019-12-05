const webrequest = require('./webrequest');

const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
const headers = { Authorization: 'Token 123' };
const username = 'username';
const password = 'password';

test('webrequest get', async () => {
  expect.assertions(2);
  const method = 'get';
  const res = await webrequest(url, method, null, headers, username, password);

  expect(res.status).toBe(200);
  expect(res.data[0].id).toBe(1);
});

test('webrequest post', async () => {
  expect.assertions(2);
  const method = 'post';
  const title = 'Jest Post';
  const res = await webrequest(url, method, { title }, null, username, password);

  expect(res.status).toBe(201);
  expect(res.data.title).toBe(title);
});

test('webrequest put', async () => {
  expect.assertions(2);
  const method = 'put';
  const title = 'jest put';
  const res = await webrequest(`${url}/1`, method, { title }, headers);

  expect(res.status).toBe(200);
  expect(res.data).toEqual({ title, id: 1 });
});

test('webrequest patch', async () => {
  expect.assertions(2);
  const method = 'patch';
  const title = 'jest patch';
  const res = await webrequest(`${url}/1`, method, { title }, headers, username, password);

  expect(res.status).toBe(200);
  expect(res.data).toEqual({ title, id: 1 });
});

test('webrequest delete', async () => {
  expect.assertions(1);
  const method = 'delete';
  const res = await webrequest(`${url}/1`, method);

  expect(res.status).toBe(200);
});
