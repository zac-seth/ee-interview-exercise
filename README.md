# Notes from Zac

> Exercise version number: **5b8d0fd276b6d288905ed2f63a934e057e8feca2**

## Technical Pre-requisites

1. This should work in any of the major OS environments (however, if you're working on Windows, I recommend you run it via WSL and not on the Windows OS platform - the WSL developer experience and tooling story is far superior to that of Windows for Node development).
1. You'll need Node (I'm using v16.2.2 - this hasn't been tested on a lower version) as the environment for running this project.
1. To run the commands, I've used `yarn` package manager so, ideally, you should do the same (though `npm` _should_ work - but no guarantees).
1. Before attempting to run the app, make sure you're on a network connected device and run `yarn install`.
1. You should be setup at this point and you can run any of Create React App's default commands, below.

## Other Technical Notes

* If you want to get syntax highlighting when viewing the code, make sure you have a Typescript-capable IDE or IDE plugin.
* CSS code is written with the use of the [Styled Components](https://styled-components.com/) framework. I'm not sure about other IDEs but there's a plugin for VS Code called `vscode-styled-components` which will greaty improve the readability of CSS in `*.style.ts` files.
   * I haven't performed any unit tests directly on `*.styled.ts` files because they're not part of any public API - i.e. they're used internally and covered by other tests already.
* The project's structure is a _highly_ simplified variation on the [Feature Sliced](https://feature-sliced.design/en/) application architecture (note: the docs are primarily in Russian, some content may not yet be translated into English). In my opinion, it's an elegant, highly scalable architecture that can support the right amount of complexity for any given scenario* because it:
   * Promotes a clearly defined dependency hierarchy.
   * Encourages coherent grouping of related functionality.
   * Enables recursive scalability through an elegant approach to composition (you can only compose a complex component out of simpler components - never the other way around).

\* In my case, for the sake of simplicity, I've done away with the slices and many of the layers defined in the architecture, so the app is simply divided into 4, hierarchical layer buckets with no further divisions or groups. This greatly reduces the capability of the architecture to scale... but this is a simple interview exercise so it's not called for.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
