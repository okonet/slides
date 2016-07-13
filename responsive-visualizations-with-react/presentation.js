import React, { Component } from 'react';
import Deck from "components/Deck.react";
import Slide from "components/Slide.react";
import Code from "components/Code.react";
import DocumentTitle from "react-document-title";

import demo1 from 'babel!./examples/demo1';
import demo1Code from 'raw!./examples/demo1';

import demo2 from 'babel!./examples/demo2';
import demo2Code from 'raw!./examples/demo2';

import demo3 from 'babel!./examples/demo3';
import demo3Code from 'raw!./examples/demo3';

import demo3Explicit from 'babel!./examples/demo3-explicit';
import demo3ExplicitCode from 'raw!./examples/demo3-explicit';

import demoSvg from 'babel!./examples/demo-svg';
import demoSvgCode from 'raw!./examples/demo-svg';

import demoHtml from 'babel!./examples/demo-html';
import demoHtmlCode from 'raw!./examples/demo-html';

import "css/theme.css";

const TOPIC = 'Responsive Visualizations with React';
const SPEAKER = (<span>by <a href="http://okonet.ru">Andrey Okonetchnikov</a></span>)

import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'style!css!prismjs/themes/prism-solarizedlight.css'

export default () =>
  <DocumentTitle title={TOPIC}>
    <Deck>
      <header className="caption">
        <h1>{TOPIC}</h1>
        <p>{SPEAKER}</p>
      </header>

      <Slide className="cover-me">
        <h2>{TOPIC}</h2>
        <p>{SPEAKER}</p>
      </Slide>

      <Slide>
        <div className="profile">
          <img
            className="profile__photo"
            src="https://pbs.twimg.com/profile_images/678903331176214528/TQTdqGwD.jpg"
            alt="Andrey Okonetchnikov"
          />
          <div className="profile__data">
            <h2>Andrey Okonetchnikov</h2>
            <h3>Front-end Engineer</h3>
            <ul>
              <li><a href="https://twitter.com/okonetchnikov">@okonetchnikov</a></li>
              <li><a href="http://okonet.ru">okonet.ru</a></li>
              <li><a href="github.com/okonet">github.com/okonet</a></li>
            </ul>
          </div>
        </div>
      </Slide>

      <Slide>
        <h2>Simple chart</h2>
        {demo1}
      </Slide>

      <Slide className="code_small">
        <h2>Simple chart</h2>
        <Code code={demo1Code} lang="jsx" />
      </Slide>

      <Slide className="code_small">
        <h2>Resizeable chart?</h2>
        <Code code={demo2Code} lang="jsx" />
      </Slide>

      <Slide>
        <h2>Resizeable chart?</h2>
        {demo2}
      </Slide>

      <Slide>
        <h2 className="shout shrink">Let&rsquo;s fix it!</h2>
      </Slide>

      <Slide>
        <div className="place">
          <Code code="npm install react-container-dimensions" lang="bash"></Code>
        </div>
      </Slide>

      <Slide className="code_small">
        <h2>Before</h2>
        <Code code={demo2Code} lang="jsx" />
      </Slide>

      <Slide className="code_small">
        <h2>After</h2>
        <Code code={demo3Code} lang="jsx" />
      </Slide>

      <Slide>
        <h2>Resizeable chart!</h2>
        {demo3}
      </Slide>

      <Slide className="code_small">
        <h2>Implicit props</h2>
        <Code code={demo3Code} lang="jsx" />
      </Slide>

      <Slide className="code_small">
        <h2>Explicit props</h2>
        <Code code={demo3ExplicitCode} lang="jsx" />
      </Slide>

      <Slide>
        <h2 className="shout shrink">Let&rsquo;s get creative!</h2>
      </Slide>

      <Slide className="code_small">
        <h2>Math based on container dimensions</h2>
        <Code code={demoSvgCode} lang="jsx" />
      </Slide>

      <Slide>
        <h2>Math based on container dimensions</h2>
        {demoSvg}
      </Slide>

      <Slide className="code_small">
        <h2>Works with any element</h2>
        <Code code={demoHtmlCode} lang="jsx" />
      </Slide>

      <Slide>
        <h2>Works with any element</h2>
        {demoHtml}
      </Slide>

      <Slide>
    		<h2>How does it work?</h2>
    		<ol>
    			<li>Uses <a hred="https://github.com/wnr/element-resize-detector">element-resize-detector</a> under the hood</li>
    			<li>Doesn&rsquo;t create a <code>div</code> element between components</li>
    			<li>Updates even on CSS changes</li>
    			<li>Just wrap a component that accepts <code>width</code> and <code>height</code></li>
    			<li>Or use a function that returns a component</li>
          <li>Higher-Order Component? (send me your PR!)</li>
    		</ol>
    	</Slide>

      <Slide>
        <div className="place text-centered">
          <h2>
            <a href="https://github.com/okonet/react-container-dimensions" className="link">react-container-dimensions</a>
          </h2>
          <h3>🍴 or 🌟 it on GitHub</h3>
        </div>
      </Slide>

      <Slide>
        <h2 className="shout shrink">Breaking news!</h2>
      </Slide>

      <Slide className="picture">
        <h2>Pictures</h2>
        <img src={require('./assets/twitter-conv.png')} alt="" className="cover" />
      </Slide>

      <Slide>
        <h2>Bad news for <code>this.findDOMNode()</code></h2>
        <figure>
          <blockquote>
            <p>We think leaking internal details (state or DOM) should be explicit. Coupling should be intentional or it's easy to break.</p>
          </blockquote>
          <figcaption>Dan Abramov</figcaption>
        </figure>
      </Slide>

      <Slide>
        <h2>Bad news for <code>this.findDOMNode()</code></h2>
        <figure>
          <blockquote>
            <p>There are almost no situations where you’d want to use findDOMNode() over callback refs. We want to deprecate it eventually (not right now) because it blocks certain improvements in React in the future.</p>
          </blockquote>
          <figcaption>Dan Abramov</figcaption>
        </figure>
      </Slide>

      <Slide>
        <div className="place text-centered">
          <h2>
            <a href="https://github.com/yannickcr/eslint-plugin-react/issues/678" className="link">https://github.com/yannickcr/eslint-plugin-react/issues/678</a>
          </h2>
        </div>
      </Slide>

      <Slide>
        <h2 className="shout shrink">Expect some API changes</h2>
      </Slide>

      <Slide>
        <h2 className="shout shrink">Thank you!</h2>
      </Slide>

      <Slide>
        <div className="profile">
          <img
            className="profile__photo"
            src="https://pbs.twimg.com/profile_images/678903331176214528/TQTdqGwD.jpg"
            alt="Andrey Okonetchnikov"
          />
          <div className="profile__data">
            <h2>Andrey Okonetchnikov</h2>
            <h3>Front-end Engineer</h3>
            <ul>
              <li><a href="https://twitter.com/okonetchnikov">@okonetchnikov</a></li>
              <li><a href="http://okonet.ru">okonet.ru</a></li>
              <li><a href="github.com/okonet">github.com/okonet</a></li>
            </ul>
          </div>
        </div>
      </Slide>

      </Deck>
  </DocumentTitle>
