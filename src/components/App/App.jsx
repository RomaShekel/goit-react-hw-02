// src/components/App.js
import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const LOCAL_STORAGE_KEY = 'feedbacks';

export default function App() {

const [feedbacks, setFeedbacks] = useState(() => {
const savedFeddback = localStorage.getItem('feedbacks');
if (savedFeddback !== null) {
  return JSON.parse(savedFeddback);
}
 return {
	good: 0,
	neutral: 0,
	bad: 0
}})

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbacks))
}, [feedbacks])

const updateFeedback = feedbackType => {
 setFeedbacks({...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1})
  }

const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
const precentageOfGoodFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

const resetFeedback  = () => {
  setFeedbacks({
    good: 0,
    neutral: 0,
    bad: 0
})}


  return (
    <div>
      <Description/>
      <Options 
       updateFeedback={updateFeedback}
       resetFeedback={resetFeedback}
       />
      {totalFeedback !== 0 ? 
      <Feedback 
       feedbacks={feedbacks}
       totalFeedback={totalFeedback}
       precentageOfGoodFeedback={precentageOfGoodFeedback}/> : <Notification/>}
    </div>
  );
}