import { Blocks } from '../Components/Blocks';
import { MyInfo } from '../Components/MyInfo';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1 className="dashboard-title">
          <span>👋</span> Hej, tu Konrad!
        </h1>
        <p className="dashboard-title-text">
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </p>
        <Blocks />
      </div>
      <MyInfo />
    </div>
  );
};
