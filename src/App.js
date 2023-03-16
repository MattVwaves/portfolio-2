import './App.css';
import PatchesVideo from './assets/videos/tfa-patches-video_HB.mp4';

function App() {
  return (
    <>
      <div className="header">
        <h3 className="title">Matt Holt</h3>
        <h2 className="profession">
          Full-Stack
          <br />
          Developer
        </h2>

        <ul className="social-email">
          <li>
            <a href="https://github.com/MattVwaves">
              <img
                src={require('./assets/github.png')}
                height="35px"
                alt="github-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/MattVwaves">
              <img
                src={require('./assets/linkd.png')}
                height="35px"
                alt="linkedIn-icon"
              />
            </a>
          </li>
          <li>
            <span>
              <img
                src={require('./assets/email2.png')}
                height="30px"
                alt="email-icon"
              />
            </span>
          </li>
        </ul>

        <ul className="photo-skills">
          <li>
            <img
              id="photo-matt"
              src={require('./assets/close-me-bw.jpg')}
              height="150px"
              alt="photo-matt"
            />
            <img
              id="photo-matt-inv"
              src={require('./assets/close-me-bw.jpg')}
              height="150px"
              alt="photo-matt"
            />
          </li>
          <li id="skills-icon">
            <img
              src={require('./assets/skills.jpeg')}
              height="40px"
              alt="skills"
            />
          </li>
        </ul>
      </div>

      <h3 id="projects-title">Projects</h3>

      <div className="project-container">
        <div className="project-title-container">
          <h2 id="project-title">That French Artist</h2>
          <span>
            <img
              src={require('./assets/info.png')}
              height="20px"
              id="info-icon"
              alt="info-icon"
            />
          </span>
        </div>

        <div className="video-container">
          <video controls>
            <source src={PatchesVideo} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
          <div className="repo-links-container">
            <div className="repo-links">
              <div className="repo-link">
                <a href="https://mattvwaves.github.io/matt-holt-portfolio.github.io/">
                  client
                </a>
                <a href="https://github.com/MattVwaves">
                  <img
                    src={require('./assets/github.png')}
                    height="35px"
                    alt="github-icon"
                  />
                </a>
              </div>

              <div className="repo-link">
                <a href="https://mattvwaves.github.io/matt-holt-portfolio.github.io/">
                  server
                </a>
                <a href="https://github.com/MattVwaves">
                  <img
                    src={require('./assets/github.png')}
                    height="35px"
                    alt="github-icon"
                  />
                </a>
              </div>
            </div>
            <div className="repo-links-under"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
