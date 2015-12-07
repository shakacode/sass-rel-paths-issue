const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.hot.config');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
});

server.app.use('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <script src="/public/app.js"></script>
      </head>
      <body>
        <div>Alive!</div>
      </body>
    </html>
  `);
});

server.listen(4000, 'localhost', err => {
  if (err) console.log(err);
  console.log('Listening 4000 at localhost');
});
