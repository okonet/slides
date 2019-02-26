import theme from 'mdx-deck/themes'
import ghcolors from 'react-syntax-highlighter/styles/prism/ghcolors'
import prismCss from 'react-syntax-highlighter/languages/prism/css'

export default {
  ...theme,
  prism: {
    style: ghcolors,
    languages: {
      css: prismCss
    }
  }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
