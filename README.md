# sass-rel-paths-issue

```bash
# hot reloading
npm start                             # works!

# absolute path
npm run build:abs                     # works!

# relative path
npm run build:rel                     # works!

# bootstrap-loader & absolute path
npm run build:bs:abs                  # works!

# bootstrap-loader & relative path
npm run build:bs:rel                  # oops...
```
