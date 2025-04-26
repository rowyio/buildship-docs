MDX files for buildship app. The app can render MDX files from here.

#### How it works?

Write your MDX files in `buildship-app-mdx`. Using `mdx-bundler`, these files are converted into `.js` files that are
stored in `buildship-app-js` folder. The frontend (buildship app) can render these `.js` files.

#### How to use

##### Defining MDX files

All files matching `./buildship-app-mdx/*/index.mdx` are converted into React components ready to be rendered. Any file
imported by `index.mdx` is resolved and bundled automatically.

#### Local development

The following command will:

- Bundle all MDX files
- Serve the `.js` files at `http://localhost:3030/{filename}.js`
- Watch for changes

```
node compile.mjs --dev
```

#### For production use

The following command will bundle all MDX files.

```
node compile.mjs
```

### Types

We have `props` and `components` available in the MDX files. The list of available props and components can be found at
`./buildship-app-mdx/types`.

To enable intellisense for these add the following lines:

```ts
{
  /**
   * @import { type Props } from '../types/preview'
   */
}
```

You need to have the VSCode [`MDX`](https://marketplace.visualstudio.com/items/?itemName=unifiedjs.vscode-mdx) extension
installed for intellisense to work.
