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
  who-to-greet: "<your name>"
  secret: ${{ secrets.MY_SECRET }}
```

## Documentation

How to create your custom GitHub action:
<https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-a-javascript-action>

- How to compile your `index.js` file:
  - `ncc build index.js`
