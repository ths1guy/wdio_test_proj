require('ts-node').register({ transpileOnly: true, files: true })
module.exports = require('./wdio.conf.ts')

exports.config = {
        jasmineNodeOpts: {
            // Required for Typescript
            requires: ['tsconfig-paths/register'],
    }
}