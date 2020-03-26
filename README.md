# Web Request Action

> A GitHub Action to make a web request to any JSON API. Supports all HTTP methods, custom headers, JSON payload, data fetch and basic authentication.

[![Test Status](https://github.com/satak/webrequest-action/workflows/Test/badge.svg)](https://github.com/satak/webrequest-action/actions)
![Release](https://img.shields.io/github/v/release/Satak/webrequest-action)


## Usage

### `GET` request

```yaml
uses: satak/webrequest-action@master
with:
  url: https://my-json-server.typicode.com/typicode/demo/posts
  method: GET
```

### `POST` request with headers and basic auth

```yaml
uses: satak/webrequest-action@master
with:
  url: https://webhook.site/${{ secrets.WEBHOOK_ID }}
  method: POST
  payload: '{"name": "${{ env.MY_NAME }}"}'
  headers: '{"Authentication": "Token ${{ env.TOKEN }}"}'
  username: ${{ secrets.BASIC_AUTH_UN }}
  password: ${{ secrets.BASIC_AUTH_PW }}
```

## Inputs

| Parameter  | Required | Info                                                         |
| ---------- | -------- | ------------------------------------------------------------ |
| `url`      | `true`   | Web request URL endpoint                                     |
| `method`   | `true`   | Web request method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) |
| `payload`  | `false`  | Web request payload in JSON format                           |
| `headers`  | `false`  | Web request headers in JSON format                           |
| `username` | `false`  | Basic auth username                                          |
| `password` | `false`  | Basic auth password                                          |

## Outputs

Output format: `JSON`

```json
{
  "output": {
    "url": "<str url>",
    "method": "<str method>",
    "payload": {},
    "time": "<str time>",
    "statusCode": "<int statusCode>",
    "data": "object/array data from API"
  }
}
```

### Example output usage

```yaml
run: |
  $output = '${{ steps.webhook.outputs.output }}' | ConvertFrom-Json
  Write-Host "Time from output $($output.time) statusCode $($output.statusCode) data $($output.data)"
```

## License

[MIT](LICENSE)
