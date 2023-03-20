import './App.css';
import PatchesVideo from './assets/videos/tfa-patches-video_HB.mp4';

import Header from './components/Header';
import RepoLinks from './components/RepoLinks';
import ProjectTitleContainer from './components/ProjectTitleContainer';

import TFAInfo from './components/TFAInfo';
import PSInfo from './components/PSInfo';
import PFInfo from './components/PFInfo';

function App() {
  return (
    <>
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
          <div className="project-container" id="that-french-artist">
            <ProjectTitleContainer
              info={<TFAInfo />}
              title="That French Artist"
            />
            <div className="video-container">
              <video controls>
                <source src={PatchesVideo} type="video/mp4" />
              </video>
              <RepoLinks
                clientUrl="https://github.com/MattVwaves/That-French-Artist-Client"
                serverUrl="https://github.com/MattVwaves/That-French-Artist-Server"
              />
            </div>
          </div>

          <div className="project-container">
            <ProjectTitleContainer info={<PSInfo />} title="Pop Sheister" />
            <div className="video-container">
              <img
                width="250px"
                height="350px"
                src={require('./assets/pop-sheister-1.png')}
                alt="pop-shiester-img"
                id="cover"
              />
              <RepoLinks
                clientUrl="https://github.com/MattVwaves/Pop-Sheister"
                serverUrl="https://github.com/MattVwaves/Pop-Sheister-server"
              />
            </div>
          </div>

          <div className="project-container">
            <ProjectTitleContainer info={<PFInfo />} title="Portfolio" />
            <div className="video-container">
              <img
                width="250px"
                height="350px"
                src={require('./assets/portfolio-grab-2.png')}
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
