# Hello Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: satak/hello-action@master
with:
  webhook-id: '<guid>'
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
