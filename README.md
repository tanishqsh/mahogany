---
title: Getting Started with Mahogany
---

# Getting Started with Mahogany

Mahogany is a powerful, flexible, and easy-to-use charting library for React. It provides a set of reusable chart components that can be composed together to build a wide variety of charts and data visualizations.

## Installation

To install Mahogany, you can use npm or yarn:

```bash
npm install mahogany
```

or

```
yarn add mahogany
```

## Usage

Here's a simple example of how to use Mahogany in your React project:

```jsx
import React from 'react';
import { BarChart } from 'mahogany';

const data = [
	{ label: 'Jan', value: 10 },
	{ label: 'Feb', value: 20 },
	{ label: 'Mar', value: 30 },
	// ...
];

const MyComponent = () => <BarChart data={data} color="#blue" width={500} height={300} />;
```

This will render a bar chart with the specified data, color, width, and height.

## License

Mahogany is open source and licensed under the MIT license. You can use it in your projects free of charge. Please see the LICENSE file for more details.

```
MIT License

Copyright (c) 2023 tani.eth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

We hope you find Mahogany useful for your data visualization needs. If you have any questions or feedback, please feel free to open an issue on our GitHub repository. Happy coding!
