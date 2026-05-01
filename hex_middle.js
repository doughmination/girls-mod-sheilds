// This script was used for the /png folder to generate the middle color between the two colors used in the original PNG
const readline = require('readline');

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
}

function rgbToHex(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
  );
}

function interpolateColor(color1, color2, factor) {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);

  return rgbToHex(r, g, b);
}

// CLI setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first hex color: ', (color1) => {
  rl.question('Enter second hex color: ', (color2) => {
    try {
      const midpoint = interpolateColor(color1.trim(), color2.trim(), 0.5);
      console.log(`\nMidpoint color: ${midpoint}`);
    } catch (err) {
      console.log('Something went wrong. Make sure you entered valid hex colors like #00A9FF');
    }
    rl.close();
  });
});