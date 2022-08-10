import { useState } from 'react';
import Card from './Card';
import img from './images/image-jeremy.png';
import './scss/Content.css';

const Content = ({ work, play, study, excercise, social, selfCare }) => {

    //work
    let [workHour, setWorkHour] = useState(`${work.timeframes.weekly.current}hrs`);
    let [workPeriod, setWorkPeriod] = useState(`Last Week - ${work.timeframes.weekly.previous}hrs`);

    //play
    let [playHour, setPlayHour] = useState(`${play.timeframes.weekly.current}hrs`);
    let [playPeriod, setPlayPeriod] = useState(`Last Week - ${play.timeframes.weekly.previous}hrs`);

    //study
    let [studyHour, setStudyHour] = useState(`${study.timeframes.weekly.current}hrs`);
    let [studyPeriod, setStudyPeriod] = useState(`Last Week - ${study.timeframes.weekly.previous}hrs`);

    //excercise
    let [excerciseHour, setExcerciseHour] = useState(`${excercise.timeframes.weekly.current}hrs`);
    let [excercisePeriod, setExcercisePeriod] = useState(`Last Week - ${excercise.timeframes.weekly.previous}hrs`);

    //social
    let [socialHour, setSocialHour] = useState(`${social.timeframes.weekly.current}hrs`);
    let [socialPeriod, setSocialPeriod] = useState(`Last Week - ${social.timeframes.weekly.previous}hrs`);

    //self care
    let [selfCareHour, setSelfCareHour] = useState(`${selfCare.timeframes.weekly.current}hrs`);
    let [selfCarePeriod, setSelfCarePeriod] = useState(`Last Week - ${selfCare.timeframes.weekly.previous}hrs`);


    //Button functions  

    const daily = ()=>{
        setWorkHour(workHour = `${work.timeframes.daily.current}hrs`);
        setWorkPeriod(workPeriod = `Yesterday - ${work.timeframes.daily.previous}hrs`);

        setPlayHour(playHour = `${play.timeframes.daily.current}hrs`);
        setPlayPeriod(playPeriod = `Yesterday - ${play.timeframes.daily.previous}hrs`);

        setStudyHour(studyHour = `${study.timeframes.daily.current}hrs`);
        setStudyPeriod(studyPeriod = `Yesterday - ${study.timeframes.daily.previous}hrs`);

        setExcerciseHour(excerciseHour = `${excercise.timeframes.daily.current}hrs`);
        setExcercisePeriod(excercisePeriod = `Yesterday - ${excercise.timeframes.daily.previous}hrs`);

        setSocialHour(workHour = `${social.timeframes.daily.current}hrs`);
        setSocialPeriod(workPeriod = `Yesterday - ${social.timeframes.daily.previous}hrs`);

        setSelfCareHour(workHour = `${selfCare.timeframes.daily.current}hrs`);
        setSelfCarePeriod(workPeriod = `Yesterday - ${selfCare.timeframes.daily.previous}hrs`);

    }

    const weekly = ()=>{
        setWorkHour(workHour = `${work.timeframes.weekly.current}hrs`);
        setWorkPeriod(workPeriod = `Last Week - ${work.timeframes.weekly.previous}hrs`);

        setPlayHour(playHour = `${play.timeframes.weekly.current}hrs`);
        setPlayPeriod(playPeriod = `Last Week - ${play.timeframes.weekly.previous}hrs`);

        setStudyHour(studyHour = `${study.timeframes.weekly.current}hrs`);
        setStudyPeriod(studyPeriod = `Last Week - ${study.timeframes.weekly.previous}hrs`);

        setExcerciseHour(excerciseHour = `${excercise.timeframes.weekly.current}hrs`);
        setExcercisePeriod(excercisePeriod = `Last Week - ${excercise.timeframes.weekly.previous}hrs`);

        setSocialHour(workHour = `${social.timeframes.weekly.current}hrs`);
        setSocialPeriod(workPeriod = `Last Week - ${social.timeframes.weekly.previous}hrs`);

        setSelfCareHour(workHour = `${selfCare.timeframes.weekly.current}hrs`);
        setSelfCarePeriod(workPeriod = `Last Week - ${selfCare.timeframes.weekly.previous}hrs`);


    }

    const monthly = ()=>{
        setWorkHour(workHour = `${work.timeframes.monthly.current}hrs`);
        setWorkPeriod(workPeriod = `Last Month - ${work.timeframes.monthly.previous}hrs`);

        setPlayHour(playHour = `${play.timeframes.monthly.current}hrs`);
        setPlayPeriod(playPeriod = `Last Month - ${play.timeframes.monthly.previous}hrs`);

        setStudyHour(studyHour = `${study.timeframes.monthly.current}hrs`);
        setStudyPeriod(studyPeriod = `Last Month - ${study.timeframes.monthly.previous}hrs`);

        setExcerciseHour(excerciseHour = `${excercise.timeframes.monthly.current}hrs`);
        setExcercisePeriod(excercisePeriod = `Last Month - ${excercise.timeframes.monthly.previous}hrs`);

        setSocialHour(workHour = `${social.timeframes.monthly.current}hrs`);
        setSocialPeriod(workPeriod = `Last Month - ${social.timeframes.monthly.previous}hrs`);

        setSelfCareHour(workHour = `${selfCare.timeframes.monthly.current}hrs`);
        setSelfCarePeriod(workPeriod = `Last Month - ${selfCare.timeframes.monthly.previous}hrs`);

    }


  return (
    <div className="content-wrap">

        <div className="profile-card">
            <div className="profile">
                <img src={img} alt="ProfileIMage" className='img' />
                <p className='profile-name'>Jeremy Robson</p>
            </div>

            <div className="nav">
                <button className='btn' onClick={daily}>Daily</button>
                <button className='btn  active' onClick={weekly}>Weekly</button>
                <button className='btn' onClick={monthly}>Monthly</button>
            </div>
        </div>

        <Card work={work} play={play} study={study} excercise={excercise} social={social} selfCare={selfCare} workHour={workHour} workPeriod={workPeriod} playHour={playHour} playPeriod={playPeriod} studyHour={studyHour} studyPeriod={studyPeriod} excerciseHour={excerciseHour} excercisePeriod={excercisePeriod} socialHour={socialHour} socialPeriod={socialPeriod} selfCareHour={selfCareHour} selfCarePeriod={selfCarePeriod} />

        
    </div>
  )
}

export default Content