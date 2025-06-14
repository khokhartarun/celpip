import Sidebar from '../Common/Sidebar';
import TaskDisplay from '../Common/TaskDisplay';
import ComingSoon from '../Common/ComingSoon';

const Reading = () => {
  return (
    <div className="reading">
      <Sidebar className="sidebar" />
      <div className="central-control">
        <h3>Reading Module</h3>
        <p style={{ color: 'black' }}>
          The CELPIP Reading test consists of four different parts, each designed to assess your reading comprehension through various formats. You have 60 minutes to complete all sections. Below is a detailed breakdown of each task:
        </p>
        <ComingSoon />
        <TaskDisplay selectedModule="reading" />
      </div>
    </div>
  );
};

export default Reading;
