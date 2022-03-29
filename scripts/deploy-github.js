const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/dylan-jannetty/dylan-jannetty.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
