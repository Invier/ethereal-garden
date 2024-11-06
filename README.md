# Ethereal UI

Ethereal Garden - A React UI Component Library

## Description

Ethereal UI is a React component library designed to provide a set of reusable and customizable UI components. This library aims to help developers build beautiful and consistent user interfaces with ease.

## Installation

To install the library, run:

```sh
npm install ethereal-ui
```

## Example Usage
Here is an example of how to use the Tabs component from the library:


```jsx
import * as React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'ethereal-ui';

const MyComponent = () => (
  <Tabs defaultValue="preview">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      <div>Preview Content</div>
    </TabsContent>
    <TabsContent value="code">
      <div>Code Content</div>
    </TabsContent>
  </Tabs>
);

export default MyComponent;
```

## Adding Styles
To include the styles, import the `ethereal-ui/styles/ethereal.scss` file in your main styles file or App.ts:
```scss
// In your main styles file (e.g., styles.scss)
@import '~ethereal-ui/styles/ethereal.scss';
```
Or in App.ts:
```jsx
import '~ethereal-ui/styles/ethereal.scss';
```

## Tailwind CSS Integration

If you are using Tailwind CSS, import `ethereal.tailwind.config.js` into your Tailwind configuration presets:

```js
module.exports = {
  presets: [require('ethereal-ui/ethereal.tailwind.config.js')],
  // other configurations
};
```

## Development
To start the development server, run:

```sh
npm run www:dev
```

To build the project, run:
```sh
npm run www:build
```

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**: Click the "Fork" button at the top right corner of the repository page to create a copy of the repository in your GitHub account.

2. **Clone the repository**: Clone your forked repository to your local machine using the following command:
  ```sh
  git clone https://github.com/Invier/ethereal-garden.git
  ```
3. **Create a new branch**: Create a new branch for your feature or bug fix:
  ```sh
  git checkout -b my-feature-branch
  ```
4. **Install dependencies**: Install the project dependencies:

5. **Make your changes**: Make your changes to the codebase. Ensure that your code follows the project's coding standards and conventions.

6. **Run tests**: Run the tests to ensure that your changes do not break any existing functionality
7. **Commit your changes**: Commit your changes with a descriptive commit message:
  ```sh
  git commit -m "Add new feature"
  ```
8. **Push your changes**: Push your changes to your forked repository:
  ```sh
  git push origin my-feature-branch
  ```
9. **Create a pull request**: Go to the original repository and create a pull request from your forked repository. Provide a clear and descriptive title and description for your pull request.

10. **Review process**: Your pull request will be reviewed by the maintainers. You may be asked to make additional changes before it is merged.

## License
This project is licensed under the MIT License.
