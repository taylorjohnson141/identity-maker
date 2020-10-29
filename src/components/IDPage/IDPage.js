import './IDPage.css';
import MissionArea from '../MissionArea/MissionArea.js';
import StoryArea from '../StoryArea/StoryArea.js';

const IDPage = () => {
  return (
    <section>
      <StoryArea />
      <MissionArea />
    </section>
  );
}

export default IDPage;
//will use useSelector hook for connecting state.
