// ==UserScript==
// @name        Mobile Upload for Strava
// @description Make the Strava upload page usable on mobile devices
// @version     0.0.3
// @namespace   strava-mobile-upload.salomvary.com
// @match       https://www.strava.com/upload/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function () {
    const css = `
      @media (max-width: 767px) {
          html,
          body {
              width: 100% !important;
              min-width: 0 !important;
              overflow-x: hidden !important;
          }

          .view {
              width: 100% !important;
              min-width: 0 !important;
          }

          #global-header .nav-bar {
              display: flex !important;
              align-items: center;
              justify-content: space-between;
              width: 100% !important;
              max-width: none !important;
              min-width: 0 !important;
              box-sizing: border-box;
              padding: 0 12px !important;
          }

          #global-header .nav-bar:before,
          #global-header .nav-bar:after {
              display: none !important;
          }

          #global-header .branding-with-echelon {
              display: block !important;
              flex: 0 0 auto;
              height: auto !important;
          }

          #global-header .branding-with-echelon .branding {
              display: none !important;
          }

          #global-header .btn-mobile-menu {
              display: none !important;
          }

          #container-nav {
              display: flex !important;
              position: static !important;
              width: auto !important;
              height: auto !important;
              margin: 0 !important;
              padding: 0 !important;
              background: transparent !important;
              border: 0 !important;
              box-shadow: none !important;
          }

          #container-nav #global-search-bar,
          #container-nav .global-nav {
              display: none !important;
          }

          #container-nav .user-nav {
              display: flex !important;
              width: auto !important;
              margin: 0 0 0 auto !important;
              padding: 0 !important;
          }

          #container-nav .user-nav > li:not(.user-menu) {
              display: none !important;
          }

          #container-nav .user-nav > .user-menu {
              display: flex !important;
          }

          .page.container {
              width: 100% !important;
              max-width: none !important;
              min-width: 0 !important;
              margin: 0 !important;
              padding: 20px 16px !important;
              box-sizing: border-box;
          }

          .page.container .sidenav {
              display: none !important;
          }

          #upload {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
          }

          #upload > * {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              box-sizing: border-box;
          }

          #upload #uploadFile input[type="file"] {
              max-width: 100%;
          }

          #devicesList,
          #appUpsell,
          .view > footer {
              display: none !important;
          }

          #uploadHeader h1 {
              font-size: clamp(1.5rem, 7vw, 2.5rem);
              line-height: 1.15;
          }

          #uploadProgress .row > * {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            flat: none;
          }

          #uploadProgress .visibility {
            width: auto;
          }

          #uploadProgress [class *= PerceivedExertionInput--hint] {
            display: none;
          }
      }
`;

    const style = document.createElement("style");
    style.id = "strava-mobile-upload-css";
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);

    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width";
    (document.head || document.getElementsByTagName("head")[0]).appendChild(meta);
})();
