// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  screen1: require("../assets/screen1.png"),
  screen2: require("../assets/screen2.png"),
  postcssbg: require("../assets/postcssbg.jpg"),
  postcsslogo: require("../assets/postcss-logo-symbol.svg"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#263238",
  secondary: "#60aca4",
  tertiary: "#ff2c56",
  quartenary: "rgba(255,255,255,0.65)"
}, {
  primary: "Fira Sans",
  secondary: "Fira Sans"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="#f5ba45">
              Lint like it&rsquo;s 2016
            </Heading>
            <Heading size={1} fit caps>
              How to keep your code on a diet
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Why lint?
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="#101619">
            <Image src={images.screen1.replace("/", "")} width="100%"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="#101619">
            <Image src={images.screen2.replace("/", "")} width="100%"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Catch possible bugs ealier</ListItem></Appear>
              <Appear><ListItem>Improve code readability</ListItem></Appear>
              <Appear><ListItem>Enforce code style between team members</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              How do I start?
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <List>
              <Appear>
                <ListItem>
                  <Code textColor="secondary">npm install eslint</Code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Code textColor="secondary">npm install babel-eslint</Code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Code textColor="secondary">eslint *.js</Code>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} caps fit>
              What about CSS?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.postcssbg.replace("/", "")} bgDarken={0.75}>
            <Image src={images.postcsslogo.replace("/", "")} width="50%"/>
            <Heading size={2} fit>
              PostCSS plugin "stylelint"
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <List>
              <Appear>
                <ListItem>
                  <Code textColor="secondary">npm install stylelint</Code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Code textColor="secondary">stylelint *.css</Code>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={4}>
              stylelint
            </Heading>
            <List>
              <Appear><ListItem>Enforce code style between team members</ListItem></Appear>
              <Appear><ListItem>Spot CSS bugs earlier</ListItem></Appear>
              <Appear><ListItem>Lint selectors for BEM compliance</ListItem></Appear>
              <Appear><ListItem>Allow write custom plugins!</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <CodePane
                lang="json"
                source={require('raw!../assets/stylelint.example')}
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textColor="secondary">Linting makes more sense when running before commiting you code into repository. In this case you can ensure no bad code is going put into it and enforce styles</Quote>
              <Cite>yours truly</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={4} textColor="secondary">
              Git Hooks
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  <Code textColor="secondary">npm install pre-commit</Code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Code textColor="secondary">"pre-commit": ["eslint"]</Code>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={4} textColor="secondary">
              but this can be slow for many files :(
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="tertiary">
            <Heading size={4} textColor="white">
              Lint only stage files before you commit!
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="tertiary">
            <Heading size={4} textColor="white">
              <Code>npm install lint-staged</Code>
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary" textColor="white">
            <CodePane
                lang="json"
                source={require('raw!../assets/package.example')}
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="tertiary">
            <Heading size={4} textColor="white">
              <Code>https://github.com/okonet/lint-staged</Code>
            </Heading>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={3} lineHeight={1.5}>
              Andrey Okonetchnikov
            </Heading>
            <p>
              <Link href="https://twitter.com/okonetchnikov" textColor="black">@okonetchnikov</Link>
            </p>
            <p>
              <Link href="http://okonet.ru" textColor="black">okonet.ru</Link>
            </p>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
