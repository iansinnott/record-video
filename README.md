# Record Video

A simple example of recording with the front camera in a mobile browser.

**NOTE:** This works in Safari, but I had trouble with mobile Firefox on iOS.

## Live Demo

👉 <https://record-video.netlify.app/>

## Code

Most of the code here is just for creating the UI to let you upload a video, but the core functionality is provided by the browser. Use the `capture` property to tell the browser which camera you want to use. The options are: 

* `"user"` for the front-facing camera.
* `"environment"` for the back-facing camera.

Example:

```html
<input
  type="file"
  accept="video/*"
  capture="user"
/>
```

View the relevant source file: [pages/index.tsx](https://github.com/iansinnott/record-video/blob/master/pages/index.tsx)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.