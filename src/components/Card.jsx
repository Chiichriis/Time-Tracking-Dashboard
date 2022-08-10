import icon from './images/icon-ellipsis.svg';
import './scss/Card.css';

const Card = ({ work, play, study, excercise, social, selfCare, workHour, workPeriod, playHour, playPeriod, studyHour, studyPeriod, excerciseHour, excercisePeriod, socialHour, socialPeriod, selfCareHour, selfCarePeriod }) => {

  return (
    <>
        <div className="task-card work">
            <div className="card-content">
                <div className="card-title">
                    <p className='task-name'>{work.title}</p>
                    <img src={icon} alt="icon" />
                </div>

                <div className="card-timeframe">
                    <p className='hour'>{workHour}</p>
                    <p className='period'>{workPeriod}</p>
                </div>
            </div>
        </div>  

        <div className="task-card play">
            <div className="card-content">
                <div className="card-title">
                    <p className='task-name'>{play.title}</p>
                    <img src={icon} alt="icon" />
                </div>

                <div className="card-timeframe">
                    <p className='hour'>{playHour}</p>
                    <p className='period'>{playPeriod}</p>
                </div>
            </div>
        </div>  

        <div className="task-card study">
            <div className="card-content">
                <div className="card-title">
                    <p className='task-name'>{study.title}</p>
                    <img src={icon} alt="icon" />
                </div>

                <div className="card-timeframe">
                    <p className='hour'>{studyHour}</p>
                    <p className='period'>{studyPeriod}</p>
                </div>
            </div>
        </div> 

        <div className="task-card excercise">
            <div className="card-content">
                <div className="card-title">
                    <p className='task-name'>{excercise.title}</p>
                    <img src={icon} alt="icon" />
                </div>

                <div className="card-timeframe">
                    <p className='hour'>{excerciseHour}</p>
                    <p className='period'>{excercisePeriod}</p>
                </div>
            </div>
        </div> 

        <div className="task-card social">
            <div className="card-content">
                <div className="card-title">
                    <p className='task-name'>{social.title}</p>
                    <img src={icon} alt="icon" />
                </div>

                <div className="card-timeframe">
                    <p className='hour'>{socialHour}</p>
                    <p className='period'>{socialPeriod}</p>
                </div>
            </div>
        </div> 

        <div className="task-card selfCare">
            <div className="card-content">
                <div className="card-title">
                    <p className='task-name'>{selfCare.title}</p>
                    <img src={icon} alt="icon" />
                </div>

                <div className="card-timeframe">
                    <p className='hour'>{selfCareHour}</p>
                    <p className='period'>{selfCarePeriod}</p>
                </div>
            </div>
        </div> 
    </>
   
  )
}

export default Card