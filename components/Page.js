import Head from "next/head";
import React from "react";

let Page = class extends React.Component {
	render() {
		let { children, router } = this.props;
		return (
			<div className="page">
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="shortcut icon" href="/static/logo.jpg" />
					<meta charSet="utf-8" />
				</Head>
				{children}
				<style jsx global>{`
					// @font-face {
					// 	font-family: "icons";
					// 	src: url("/static/fonts/icomoon/icomoon.woff") format("woff");
					// }
					@import url("https://fonts.googleapis.com/css?family=Lato");

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

					.react-toggle {
						touch-action: pan-x;

						display: inline-block;
						position: relative;
						cursor: pointer;
						background-color: transparent;
						border: 0;
						padding: 0;

						-webkit-touch-callout: none;
						-webkit-user-select: none;
						-khtml-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;

						-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
						-webkit-tap-highlight-color: transparent;
					}

					.react-toggle-screenreader-only {
						border: 0;
						clip: rect(0 0 0 0);
						height: 1px;
						margin: -1px;
						overflow: hidden;
						padding: 0;
						position: absolute;
						width: 1px;
					}

					.react-toggle--disabled {
						cursor: not-allowed;
						opacity: 0.5;
						-webkit-transition: opacity 0.25s;
						transition: opacity 0.25s;
					}

					.react-toggle-track {
						width: 50px;
						height: 24px;
						padding: 0;
						border-radius: 30px;
						background-color: #4d4d4d;
						-webkit-transition: all 0.2s ease;
						-moz-transition: all 0.2s ease;
						transition: all 0.2s ease;
					}

					.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
						background-color: #000000;
					}

					.react-toggle--checked .react-toggle-track {
						background-color: #31bc78;
					}

					.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
						background-color: #128d15;
					}

					.react-toggle-track-check {
						position: absolute;
						width: 14px;
						height: 10px;
						top: 0px;
						bottom: 0px;
						margin-top: auto;
						margin-bottom: auto;
						line-height: 0;
						left: 8px;
						opacity: 0;
						-webkit-transition: opacity 0.25s ease;
						-moz-transition: opacity 0.25s ease;
						transition: opacity 0.25s ease;
					}

					.react-toggle--checked .react-toggle-track-check {
						opacity: 1;
						-webkit-transition: opacity 0.25s ease;
						-moz-transition: opacity 0.25s ease;
						transition: opacity 0.25s ease;
					}

					.react-toggle-track-x {
						position: absolute;
						width: 10px;
						height: 10px;
						top: 0px;
						bottom: 0px;
						margin-top: auto;
						margin-bottom: auto;
						line-height: 0;
						right: 10px;
						opacity: 1;
						-webkit-transition: opacity 0.25s ease;
						-moz-transition: opacity 0.25s ease;
						transition: opacity 0.25s ease;
					}

					.react-toggle--checked .react-toggle-track-x {
						opacity: 0;
					}

					.react-toggle-thumb {
						transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
						position: absolute;
						top: 1px;
						left: 1px;
						width: 22px;
						height: 22px;
						border: 1px solid #4d4d4d;
						border-radius: 50%;
						background-color: #fafafa;

						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						box-sizing: border-box;

						-webkit-transition: all 0.25s ease;
						-moz-transition: all 0.25s ease;
						transition: all 0.25s ease;
					}

					.react-toggle--checked .react-toggle-thumb {
						left: 27px;
						border-color: #19ab27;
					}

					.react-toggle--focus .react-toggle-thumb {
						-webkit-box-shadow: 0px 0px 3px 2px #0099e0;
						-moz-box-shadow: 0px 0px 3px 2px #0099e0;
						box-shadow: 0px 0px 2px 3px #0099e0;
					}

					.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
						-webkit-box-shadow: 0px 0px 5px 5px #0099e0;
						-moz-box-shadow: 0px 0px 5px 5px #0099e0;
						box-shadow: 0px 0px 5px 5px #0099e0;
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

					html,
					body {
						height: 100%;
						font-family: Lato;
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
						flex-flow: row wrap;
						position: relative;
					}
				`}</style>
			</div>
		);
	}
};

export default Page;
