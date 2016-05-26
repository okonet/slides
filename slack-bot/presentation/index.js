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
    bsLogo: require("../assets/beanstalk-logo.svg"),
    slack: require("../assets/slack.svg"),
    before: require("../assets/before-bot.png"),
    after: require("../assets/after-bot.png"),
    bender: require("../assets/bender.jpg"),
    beepboop: require("../assets/beepboop-logo.jpg"),
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
    // primary: "#e2f4ce"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="black">
                            Building A Slack Bot
                        </Heading>
                        <Heading size={1} fit caps>
                            Beanstalk Code Snippet Bot
                        </Heading>
                        <Link href="https://github.com/wildbit/beanstalk-code-snippet-bot">
                            <Text textColor="tertiary">beanstalk-code-snippet-bot on Github</Text>
                        </Link>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={1} fit>
                            Hello, my name is
                        </Heading>
                        <Heading size={2} fit>
                            Andrey Okonetchnikov
                        </Heading>
                        <Text>Product Designer & Front-end Developer @ Wildbit</Text>
                        <Text>@okonetchnikov</Text>
                    </Slide>
                    <Slide transition={["slide"]} bgColor="#fff">
                        <Image src={images.slack.replace("/", "")} height="500"/>
                        <Link href="http://slack.com/">
                            <Text>slack.com</Text>
                        </Link>
                    </Slide>
                    <Slide transition={["slide"]} bgColor="#e2f4ce">
                        <Image src={images.bsLogo.replace("/", "")} height="500"/>
                        <Link href="http://beanstalkapp.com/">
                            <Text>beanstalkapp.com</Text>
                        </Link>
                    </Slide>
                    <Slide transition={["zoom", "fade"]}>
                        <Heading caps>The problem</Heading>
                        <Heading size={2}>Talking about source code in Slack</Heading>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Heading caps size={4}>Before</Heading>
                        <Image src={images.before.replace("/", "")} width="100%" />
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Heading caps size={4}>To here</Heading>
                        <Image src={images.after.replace("/", "")} width="100%" />
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.bender.replace("/", "")}>
                    </Slide>

                    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                        <Heading>Things we'll need</Heading>
                        <List>
                            <Appear><ListItem>Botkit — https://github.com/howdyai/botkit</ListItem></Appear>
                            <Appear><ListItem>Beepboop account — https://beepboophq.com/</ListItem></Appear>
                            <Appear><ListItem>A GitHub repository with Bot's code — https://github.com/wildbit/beanstalk-code-snippet-bot</ListItem></Appear>
                            <Appear><ListItem>A Slack and Beanstalk account with admin rights</ListItem></Appear>
                            <Appear><ListItem>Some time...</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide", "spin"]} bgColor="primary">
                        <Heading caps fit size={1} textColor="tertiary">
                            Demo!
                        </Heading>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading>Botkit</Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/example1.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading>beepboop-botkit</Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/example2.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading>Slash commands</Heading>
                        <CodePane
                            lang="js"
                            source={require("raw!../assets/example3.example")}
                            margin="20px auto"
                        />
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
