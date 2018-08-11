import Head from "next/head";
import React from "react";

let Page = class extends React.Component {
  render() {
    let { children, router } = this.props;
    return (
      <div className="page">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="/static/logo.jpg" />
          <meta charSet="utf-8" />
        </Head>
        {children}
        <style jsx global>{`
          // @font-face {
          // 	font-family: "icons";
          // 	src: url("/static/fonts/icomoon/icomoon.woff") format("woff");
          // }

          .contentContainer {
            flex: 0 0 100%;
            max-width: 1220px;
            padding: 0 24px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-flow: row wrap;
          }

          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          /* HTML5 display-role reset for older browsers */
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }
          body {
            line-height: 1;
          }
          ol,
          ul {
            list-style: none;
          }
          blockquote,
          q {
            quotes: none;
          }
          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: "";
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          html {
            position: relative;
            -webkit-overflow-scrolling: touch;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          body {
            min-height: 100vh;
            display: flex;
            flex-flow: column nowrap;
          }
          #__next {
            flex: 1 0 100%;
            display: flex;
            flex-flow: column wrap;
            width: 100%;
          }
        `}</style>
        <style jsx>{`
          .page {
            flex: 1 0 100%;
            width: 100%;
            display: flex;
            flex-flow: column wrap;
          }
        `}</style>
      </div>
    );
  }
};

export default Page;
