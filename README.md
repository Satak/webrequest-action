# Web Request Action

This action makes a web request to any JSON API. Supports all HTTP methods, JSON payload and basic authentication.

## Inputs

| Parameter  | Required | Info                                               |
| ---------- | -------- | -------------------------------------------------- |
| `url`      | `true`   | Web request URL endpoint                           |
| `method`   | `true`   | Web request method (`GET`, `POST`, `PUT`, `PATCH`) |
| `payload`  | `false`  | Web request payload in JSON format                 |
| `headers`  | `false`  | Web request headers in JSON format                 |
| `username` | `false`  | Basic auth username                                |
| `password` | `false`  | Basic auth password                                |

## Example usage

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

## Outputs

Output format: `JSON`

```json
{
  "output": {
    "url": "<str url>",
    "method": "<str method>",
    "payload": {},
    "time": "<str time>",
    "statusCode": "<int statusCode>"
  }
}
```

### Example output usage

```yaml
run: |
  $output = '${{ steps.webhook.outputs.output }}' | ConvertFrom-Json
  Write-Host "Time from output $($output.time) statusCode $($output.statusCode)"
```
