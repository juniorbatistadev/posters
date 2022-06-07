<!-- GETTING STARTED -->

## Getting Started

Make sure to clone or pull this repo to your local machine.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation and running the app

1. Clone the repo
   ```sh
   git clone https://github.com/juniorbatistadev/posters.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Let's run the app
   ```sh
   npm start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

## Technical Questions

### CSS Framework or Pure CSS ?

I used a componet library called Chakra UI for the following reasons:

- Well designed components without a designer.
- Fast development, I can focus on the fuctionality insted of the design.
- Accessible: Chakra UI strictly follows WAI-ARIA standards for all components.

### Redux or Context Api ?

This was an easy decision, redux is NOT a fix-it-all solution.

As Pete Hunt, one of the early contributors to React, says:

> You'll know when you need Flux. If you aren't sure if you need it, you don't need it.

Similarly, Dan Abramov, one of the creators of Redux, says:

> I would like to amend this: don't use Redux until you have problems with vanilla React.

This is what the redux docs says about when we shoudl use redux:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
- You need to see how that state is being updated over time

** NONE of this apply to our app. **
