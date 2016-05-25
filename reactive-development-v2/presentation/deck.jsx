import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  magic: require("./mgc.gif"),
  superman: require("./superman.jpg"),
  react: require("./react-transform.gif")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="black">
            Reactive Development v2
          </Heading>

          <Text textSize="1.5em" margin="120px 0px 0px" bold>By Andrey Okonetchnikov</Text>

          <Link href="http://okonet.ru">
            <Text textSize="2em" >http://okonet.ru</Text>
          </Link>

          <Link href="https://twitter.com/okonetchnikov">
            <Text textSize="2em" >@okonetchnikov</Text>
          </Link>

        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textAlign="left" textColor="primary">
            Conventional development
          </Heading>
          <List>
            <ListItem><Appear fid="1">Write code</Appear></ListItem>
            <ListItem><Appear fid="2">Save</Appear></ListItem>
            <ListItem><Appear fid="3">Switch to browser</Appear></ListItem>
            <ListItem><Appear fid="4">Refresh</Appear></ListItem>
            <ListItem><Appear fid="5">Reproduce the state...(Add n-steps)</Appear></ListItem>
            <ListItem><Appear fid="6">Spot the problem</Appear></ListItem>
            <ListItem><Appear fid="7">Go to 1</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textAlign="left" textColor="primary">
            Reactive development
          </Heading>
          <List>
            <ListItem><Appear fid="1">Write code</Appear></ListItem>
            <ListItem><Appear fid="2">Save</Appear></ListItem>
            <ListItem><Appear fid="3">Spot the problem</Appear></ListItem>
            <ListItem><Appear fid="4">Keep writing code...</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.superman.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={2} caps textColor="primary">
              React
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps textColor="tertiary">
              Webpack
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} textColor="primary">
              react-hot-loader
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Demo
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="black">
          <Image src={images.magic.replace('/','')} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Magic!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>I’m always being painfully aware that React Hot Loader is a great hack. It’s not how hot reloading should work.</Quote>
            <Cite>Dan Abramov</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.superman.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} caps textColor="primary">
            React
          </Heading>
          <Heading size={2} caps textColor="tertiary">
            Webpack
          </Heading>
          <Appear fid="1">
            <Heading size={2} textColor="primary">
              react-transform
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="black">
          <Image src={images.react.replace('/','')} margin="0px auto 40px" height="100%"/>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Links and resources
          </Heading>
          <List>
            <ListItem>
              <Link href="https://twitter.com/okonetchnikov">http://gaearon.github.io/react-hot-loader/</Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/okonetchnikov">https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4</Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/okonetchnikov">https://github.com/gaearon/react-transform-boilerplate</Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/okonetchnikov">http://amokjs.com/</Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/okonetchnikov">https://github.com/milankinen/livereactload</Link>
            </ListItem>
          </List>

        </Slide>
      </Deck>
    );
  }
}
