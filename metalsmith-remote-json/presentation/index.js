// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
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
    csLogo: require('../assets/CS-logo_512x512.png'),
    screenshot: require('../assets/CS-screenshot.png')
};

preloader(images);

const theme = createTheme({
    primary: "#002834",
    secondary: "#819B64",
    tertiary: "#F08D49",
    quartenary: "white"
}, {
    primary: "Source Sans Pro",
    secondary: "Source Sans Pro",
    tertiary: "Monaco"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit textColor="secondary">
                            JSON APIs with Metalsmith
                        </Heading>
                        <Heading size={1} fit>
                            Static web-site generation with remote data
                        </Heading>
                        <Link href="http://colorsnapper.com">
                            <Text textColor="tertiary">How colorsnapper.com works</Text>
                        </Link>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Heading size={2}>
                            Hello, my name is
                        </Heading>
                        <Heading size={1} fit textColor="tertiary">
                            Andrey Okonetchnikov
                        </Heading>
                        <Text textColor="secondary">Front-end Developer</Text>
                        <Text textColor="secondary">@okonetchnikov</Text>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Image src={images.csLogo} height="500"/>
                        <Link href="http://colorsnapper.com/">
                            <Text textColor="secondary">ColorSnapper 2</Text>
                        </Link>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Image src={require('../assets/CS-screenshot.png')} width="100%"/>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Image src={require('../assets/changelog-screen.png')} width="100%"/>
                    </Slide>

                    <Slide transition={["zoom", "fade"]}>
                        <Heading caps>Challenge</Heading>
                        <Heading size={2}>Maintain only one changelog</Heading>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Image src={require('../assets/gh-screen.png')} width="100%"/>
                    </Slide>

                    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                        <Heading textColor="white">Process</Heading>
                        <List>
                            <Appear><ListItem>GitHub releases as a source of truth</ListItem></Appear>
                            <Appear><ListItem>Metalsmith as a static web-site generator</ListItem></Appear>
                            <Appear><ListItem>A plugin to fetch JSON from APIs</ListItem></Appear>
                            <Appear><ListItem>Profit!</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                        <Heading fit lineHeight={2} textColor="white">metalsmith-remote-json-to-files</Heading>
                        <Link href="https://github.com/okonet/metalsmith-remote-json-to-files">
                            <Text textColor="tertiary">Source on GitHub</Text>
                        </Link>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading>Installtaion</Heading>
                        <CodePane
                            lang="sh"
                            source={require("raw!../assets/installation.example")}
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading>metalsmith.json</Heading>
                        <CodePane
                            lang="json"
                            source={require("raw!../assets/config.example")}
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading>Node API</Heading>
                        <CodePane
                            lang="javascript"
                            source={require("raw!../assets/node.example")}
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading>Advanced API</Heading>
                        <CodePane
                            lang="javascript"
                            source={require("raw!../assets/callback.example")}
                        />
                    </Slide>

                    <Slide transition={["slide", "spin"]} bgColor="primary">
                        <Heading caps fit size={1} textColor="tertiary">
                            Demo!
                        </Heading>
                    </Slide>

                    <Slide transition={["spin", "slide"]} bgColor="tertiary">
                        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                            Thanks!
                        </Heading>
                        <Text>@okonetchnikov</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
