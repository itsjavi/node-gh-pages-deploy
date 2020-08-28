# node-gh-pages-publish
Node script for publishing a directory into the project's gh-pages branch.


## Installing

```bash

yarn add -D https://github.com/itsjavi/node-gh-pages-publish#1.0.0

```

## Usage

```bash

npx gh-pages-publish

```

## Configuration

In your `package.json` you can configure the deployment like this:

```json
{
	"ghPagesDeploy": {
    	"repository": "git@github.com:foo/bar.git", // repository where to publish
    	"directory": "./build", // local relative directory to publish
    	"commitMessage": "the commit message for the gh-pages branch"
  	}
}
```