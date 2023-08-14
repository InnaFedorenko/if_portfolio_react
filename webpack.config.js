const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const assetPatterns = [
  { from: 'src/assets', to: 'assets' },
  { from: 'src/assets/cv', to: 'assets/cv' },
  { from: 'src/assets/images', to: 'assets/images' },
  { from: 'src/assets/images/photo', to: 'assets/images/photo' },
  { from: 'src/assets/images/portfolio', to: 'assets/images/portfolio' },
  { from: 'src/assets/images/socialmedia', to: 'assets/images/socialmedia' },
];

module.exports = {
  entry: './src/index.js', // Adjust entry point as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: assetPatterns,
    }),
  ],
};
