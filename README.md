# Progress Bar Project Using useEffect 

This is a simple React-based progress bar that visually represents progress from 0% to 100%.

## Features

- Progress updates automatically from 0% to 100%

- Displays the current progress percentage in the center of the bar

- Smooth animation for progress updates

- Styled with CSS for a clean UI

## Technologies Used

- ReactJS

- CSS

## How It Works

- The progress bar starts at 0% and increases automatically.

- The progress percentage is displayed in the center of the bar.

- Once it reaches 100%, it displays "Complete".

## Customization

You can modify the speed of progression inside App.js:

```javascript
setInterval(() => {
  setProgress((prev) => Math.min(prev + 1, 100));
}, 500); // Change 500 to adjust speed
```

You can also modify the styles in App.css to change colors, sizes, or animations.
