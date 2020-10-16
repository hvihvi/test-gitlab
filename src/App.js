import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="page-wrap">
      <header className="navbar fixed-top navbar-empty">
        <svg width="24" height="24" className="tanuki-logo" viewBox="0 0 36 36">
          <path
            className="tanuki-shape tanuki-left-ear"
            fill="#e24329"
            d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
          />
          <path
            className="tanuki-shape tanuki-right-ear"
            fill="#e24329"
            d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
          />
          <path
            className="tanuki-shape tanuki-nose"
            fill="#e24329"
            d="M18,34.38 3,14 33,14 Z"
          />
          <path
            className="tanuki-shape tanuki-left-eye"
            fill="#fc6d26"
            d="M18,34.38 11.38,14 2,14 6,25Z"
          />
          <path
            className="tanuki-shape tanuki-right-eye"
            fill="#fc6d26"
            d="M18,34.38 24.62,14 34,14 30,25Z"
          />
          <path
            className="tanuki-shape tanuki-left-cheek"
            fill="#fca326"
            d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
          />
          <path
            className="tanuki-shape tanuki-right-cheek"
            fill="#fca326"
            d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
          />
        </svg>
      </header>

      <div className="login-page-broadcast"></div>
      <div className="container navless-container">
        <div className="content">
          <div className="flash-container flash-container-page sticky"></div>

          <div className="row mt-3">
            <div className="col-sm-12">
              <h1 className="mb-3 font-weight-normal">GitLab.com</h1>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-7 order-12 order-sm-1 brand-holder">
              <p data-sourcepos="1:1-1:84" dir="auto">
                GitLab.com offers free unlimited (private) repositories and
                unlimited collaborators.
              </p>
              &#x000A;
              <ul data-sourcepos="3:1-7:0" dir="auto">
                &#x000A;
                <li data-sourcepos="3:1-3:98">
                  &#x000A;
                  <a href="https://gitlab.com/explore/projects/trending">
                    Explore projects on GitLab.com
                  </a>{" "}
                  (no login needed)
                </li>
                &#x000A;
                <li data-sourcepos="4:1-4:75">
                  <a
                    href="https://about.gitlab.com/gitlab-com/"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    More information about GitLab.com
                  </a>
                </li>
                &#x000A;
                <li data-sourcepos="5:1-5:53">
                  <a
                    href="https://forum.gitlab.com/"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    GitLab Community Forum
                  </a>
                </li>
                &#x000A;
                <li data-sourcepos="6:1-7:0">
                  <a
                    href="https://about.gitlab.com"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    GitLab Homepage
                  </a>
                </li>
                &#x000A;
              </ul>
              &#x000A;
              <p data-sourcepos="8:1-8:67" dir="auto">
                By signing up for and by signing in to this service you accept
                our:
              </p>
              &#x000A;
              <ul data-sourcepos="10:1-11:65" dir="auto">
                &#x000A;
                <li data-sourcepos="10:1-10:53">
                  <a
                    href="https://about.gitlab.com/privacy/"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    Privacy policy
                  </a>
                </li>
                &#x000A;
                <li data-sourcepos="11:1-11:65">
                  &#x000A;
                  <a
                    href="https://about.gitlab.com/terms/#gitlab_com"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    GitLab.com Terms
                  </a>
                  .
                </li>
                &#x000A;
              </ul>
            </div>
            <div className="col-sm-5 order-1 order-sm-12 new-session-forms-container">
              <ul className="nav-links new-session-tabs single-tab nav-tabs nav">
                <li className="nav-item">
                  <a className="nav-link active">SAML SSO</a>
                </li>
              </ul>

              <div className="login-box">
                <div className="login-body">
                  <h4>Sign in to &quot;devteam&quot;</h4>
                  <p>
                    The &quot;devteam-lf&quot; group allows you to sign in with
                    your Single Sign-On Account
                  </p>
                  <label>Name</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                  <label>Password</label>
                  <br />
                  <input type="password" />
                  <br />
                  <br />
                  <a
                    className="btn btn-success btn-block qa-saml-sso-signin-button"
                    rel="nofollow"
                    data-method="post"
                    href="/users/auth/group_saml?group_path=devteam-lf&amp;redirect_to=%2Fdevteam-lf%2Fsite%2Flf-site-wordpress"
                  >
                    Sign in with Outlook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-fixed" />
      <div className="container footer-container">
        <div className="footer-links">
          <a href="/explore">Explore</a>
          <a href="/help">Help</a>
          <a href="https://about.gitlab.com/">About GitLab</a>
        </div>
      </div>
    </div>
  );
}
