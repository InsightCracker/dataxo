import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "../Helpers/Contexts";
import { 
  Box,
} from "@chakra-ui/react";

import { 
  FaReceipt,
  FaCircleCheck,
  FaCircleXmark,
  FaHouse,
  FaShareNodes,
  FaSpinner,
  FaTrophy 
} from "react-icons/fa6";

const ResultPage = () => {
  const navigate = useNavigate();

  const { 
    score, 
    setScore,
    questions,
    setCurrQuestion,
    refresh,
    setRefresh,
    wrongAnswer,
    setWrongAnswer
  } = useContext(QuizContext);

  const retryQuiz = () => {
    setScore(0);
    setWrongAnswer(0);
    setCurrQuestion(0);
    setRefresh(!refresh);
    navigate('/dashboard')
  }

  const tryAnotherQuiz = () => {
    setScore(0);
    setWrongAnswer(0);
    setCurrQuestion(0);
    setRefresh(!refresh);
    navigate('/home')
  }

  
  return (
    <Box className="result-screen">
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column'
      }}>

        {/* Navbar */}
        <div className="resultpage-navbar">
          <p><FaReceipt /></p>
          <p>Result Page!</p>
        </div>
        
        <div className="resultpage-scoreboard">
          <div className="score">
            <p>Your Score: <span style={{
              marginLeft: "5px"
            }}>{ score } / { questions.length }</span></p>
          </div>

          <div className="question-missed">
            <div className="miss-card checked">
              <h3><FaCircleCheck /></h3>
              <p sx={{
                m: '5px 0'
              }}><span className="wrong-ans"> Correct Answers: </span> {score}</p>
            </div>

            <div className="miss-card missed">
              <h3><FaCircleXmark /></h3>
              <p sx={{
                m: '5px 0'
              }}><span className="wrong-ans"> Wrong Answers: </span> {wrongAnswer}</p>
            </div>
          </div>

          <Box className="quiz-btn" onClick={retryQuiz}>
            <div>
              <p><FaSpinner /></p>
            </div>
            <p>Retry Quiz</p>
          </Box>

          <Box className="quiz-btn" onClick={console.log('share')}>
            <div>
              <p><FaTrophy /></p>
            </div>
            <div>
              <p>View Leaderboard</p>
            </div>
          </Box>

          <Box className="quiz-btn" onClick={tryAnotherQuiz}>
            <div>
              <p><FaHouse /></p>
            </div>
            <div>
              <p>Try Another Quiz</p>
            </div>
          </Box>

          <Box className="quiz-btn" onClick={() => navigate('/share')}>
            <div>
              <p><FaShareNodes /></p>
            </div>
            <div>
              <p>Share Score</p>
            </div>
          </Box>
        </div>
      </Box>
    </Box>
  )
}

export default ResultPage