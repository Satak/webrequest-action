# Hello Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

| Parameter  | Required | Info                                               |
| ---------- | -------- | -------------------------------------------------- |
| `url`      | `true`   | Web request URL endpoint                           |
| `method`   | `true`   | Web request method (`GET`, `POST`, `PUT`, `PATCH`) |
| `payload`  | `false`  | Web request payload in JSON format                 |
| `username` | `false`  | Basic auth username                                |
| `password` | `false`  | Basic auth password                                |

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: satak/hello-action@master
with:
  url: https://webhook.site/${{ secrets.WEBHOOK_ID }}
  method: POST
  payload: '{"name": "${{ env.MY_NAME }}"}'
  username: ${{ secrets.BASIC_AUTH_UN }}
  password: ${{ secrets.BASIC_AUTH_PW }}
```

## Documentation

How to create your custom GitHub action:
<https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-a-javascript-action>

- How to compile your `index.js` file:
  - install node
  - install ncc globally wih npm: `npm i -g @zeit/ncc`
  - run `ncc build index.js`
