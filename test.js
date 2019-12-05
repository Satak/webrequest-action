const webrequest = require('./webrequest');

let url = 'https://my-json-server.typicode.com/typicode/demo/posts';
let method = 'get';
let payload = { title: 'jest post 1' };
const headers = { Authorization: 'Token 123' };
const username = 'username';
const password = 'password';

test('webrequest post', () => {
  method = 'post';
  webrequest(url, method, payload, headers, username, password).then(res => {
    expect(res.status).toBe(201);
  });
});

test('webrequest get', () => {
  method = 'get';
  webrequest(url, method, null, headers, username, password).then(res => {
    expect(res.status).toBe(200);
    expect(res.data[0].id).toBe(1);
  });
});

test('webrequest delete', () => {
  method = 'delete';
  url = 'https://my-json-server.typicode.com/typicode/demo/posts/1';
  webrequest(url, method, null, headers, username, password).then(res => {
    expect(res.status).toBe(200);
  });
});

test('webrequest put', () => {
  method = 'put';
  url = 'https://my-json-server.typicode.com/typicode/demo/posts/1';
  const title = 'jest post put';
  webrequest(url, method, { title }, headers, username, password).then(res => {
    expect(res.status).toBe(200);
    expect(res.data).toEqual({ title, id: 1 });
  });
});

test('webrequest patch', () => {
  method = 'patch';
  url = 'https://my-json-server.typicode.com/typicode/demo/posts/1';
  const title = 'jest post patch';
  webrequest(url, method, { title }, headers, username, password).then(res => {
    expect(res.status).toBe(200);
    expect(res.data).toEqual({ title, id: 1 });
  });
});
