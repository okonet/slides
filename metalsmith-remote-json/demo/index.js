const metalsmith = require('metalsmith')
const inplace = require('metalsmith-in-place')
const layouts = require('metalsmith-layouts')
const remote = require('metalsmith-remote-json-to-files')
const markdown = require('metalsmith-markdownit')
const collections = require('metalsmith-collections')

function cb(json) {
    const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return json.reduce((prev, item) => {
        var versionNumber = item.tag_name.replace('v', '')
        const filename = `changelog/${ versionNumber }.md`
        return Object.assign(prev, {
            [filename]: {
                layout: 'page.html',
                collection: 'changelog',
                title: versionNumber,
                dateString: new Date(item.created_at).toLocaleDateString('en', formatOptions),
                date: new Date(item.created_at),
                contents: new Buffer(item.body)
            }
        })
    }, {})
}

metalsmith(__dirname)
    .source('_pages')
    .destination('_site')
    .use(remote({
        url: 'https://api.github.com/repos/okonet/metalsmith-remote-json-to-files/releases',
        transformOpts: cb
    }))
    .use(collections({
        changelog: {
            pattern: 'changelog/**/*.md',
            sortBy: 'date',
            reverse: true,
            refer: false
        }
    }))
    .use(markdown({
        html: true,
        typographer: true,
        linkify: true
    }))
    .use(inplace({
        engine: 'handlebars'
    }))
    .use(layouts({
        engine: 'handlebars',
        directory: '_layouts'
    }))
    .build(function(err) {
        if (err) throw err;
    })
