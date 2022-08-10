import Data from './data.json';
import Content from './Content';
import './scss/Dashboard.css';

const Dashboard = () => {

  const work = Data[0], play = Data[1], study=Data[2], excercise=Data[3], social=Data[4], selfCare=Data[5];

   

  return (
    <div className="dashboard">
      <Content work={work} play={play} study={study} excercise={excercise} social={social} selfCare={selfCare} />
    </div>
  )
}

export default Dashboard