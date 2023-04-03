import './App.css';
import PatchesVideo from './assets/videos/tfa-patches-video_HB.mp4';
import PatchesVideo2 from './assets/videos/TFA-tidy-demo_HB.mp4';

import Header from './components/Header';
import RepoLinks from './components/RepoLinks';
import ProjectTitleContainer from './components/ProjectTitleContainer';

import TFAInfo from './components/TFAInfo';
import PSInfo from './components/PSInfo';
import PFInfo from './components/PFInfo';
import SocialList from './components/SocialList';

function App() {
  return (
    <>
      <meta
        meta
        name="viewport"
        content="width=device-width, user-scalable=no"
      />
      <img
        id="bg-img"
        src={require('./assets/me-pointing.jpg')}
        alt="bg-img"
        height="500px"
      />
      <img
        id="bg-img-2"
        src={require('./assets/close-me-bw.jpg')}
        alt="bg-img"
        height="500px"
      />
      <Header />
      <div className="projects-title-container">
        <h3 id="projects-title">Projects</h3>
      </div>

      <div className="outer-projects-container">
        <div className="projects-container">
          <div className="project-container">
            <ProjectTitleContainer
              info={<TFAInfo />}
              title="That French Artist"
            />
            <div className="video-container">
              <video
                controls
                playsinline
                muted
                autoplay
                poster={require('./assets/tfa-poster.png')}
              >
                <source src={`${PatchesVideo2}#t=0.001`} type="video/mp4" />
              </video>
              <RepoLinks
                clientUrl="https://github.com/MattVwaves/That-French-Artist-Client"
                serverUrl="https://github.com/MattVwaves/That-French-Artist-Server"
              />
            </div>
          </div>

          <div className="project-container">
            <ProjectTitleContainer info={<PSInfo />} title="eyesong" />
            <div className="video-container">
              <img
                width="100%"
                height="300px"
                src={require('./assets/eyesong.png')}
                alt="pop-shiester-img"
                id="cover"
              />
              <RepoLinks
                clientUrl="https://github.com/MattVwaves/eyesong-client"
                serverUrl="https://github.com/MattVwaves/eyesong-server"
              />
            </div>
          </div>

          <div className="project-container">
            <ProjectTitleContainer info={<PFInfo />} title="Portfolio" />
            <div className="video-container">
              <img
                width="100%"
                height="300px"
                src={require('./assets/portnew.png')}
                alt="pop-shiester-img"
              />
              <RepoLinks clientUrl="https://github.com/MattVwaves/portfolio-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
