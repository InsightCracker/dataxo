import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "../Helpers/Contexts";
import { 
  Box
} from "@chakra-ui/react";
import { 
  FaShareNodes,
  FaHouse,
  FaTrophy,
  FaRobot,
  FaUserAstronaut,
  FaHandshake,
  FaSpinner 
} from "react-icons/fa6";

const MultiEnd = () => {
  const navigate = useNavigate();

  const {
    score,
    setScore,  
    botScore,
    setBotScore, 
    refresh,
    setRefresh,
    setWrongAnswer,
    setCurrQuestion
} = useContext(QuizContext);

  const retryQuiz = () => {
    setScore(0);
    setBotScore(0);
    setWrongAnswer(0);
    setCurrQuestion(0);
    setRefresh(!refresh);
    navigate('/vsbot')
  }

  const tryAnotherQuiz = () => {
    setScore(0);
    setBotScore(0);
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
            <p>🎉 Quiz Completed!</p>
          </div>

          {botScore > score ? (
            <div className="badge-board">
              <div className="winner-badge-icon"><FaRobot /></div>
              <p className="winner-badge">Bot Won!</p>
            </div>
          ) : botScore < score ? (
            <div className="badge-board">
              <div className="winner-badge-icon"><FaUserAstronaut /></div>
              <p className="winner-badge">You Won!</p>
            </div>
          ) : (
            <div className="badge-board">
              <div className="winner-badge-icon"><FaHandshake /></div>
              <p className="winner-badge">It's a Tie!</p>
            </div>
          )}
          
          
          
          <div className="question-missed">
            <div className="miss-card checked">
              <h3><FaUserAstronaut /></h3>
              <p sx={{
                m: '5px 0'
              }}><span className="wrong-ans"> Your Score: </span> {score}</p>
            </div>

            <div className="miss-card missed">
              <h3><FaRobot /></h3>
              <p sx={{
                m: '5px 0'
              }}><span className="wrong-ans"> Bot Score: </span> {botScore}</p>
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

          <Box className="quiz-btn" onClick={console.log('share')}>
            <div>
              <p><FaShareNodes /></p>
            </div>
            <div>
              <p>Share Score</p>
            </div>
          </Box>

          <Box className="quiz-btn" onClick={tryAnotherQuiz}>
            <div>
              <p><FaHouse /></p>
            </div>
            <div>
              <p>Back to Dashboard</p>
            </div>
          </Box>
      </Box>
    </Box>
  )
}

export default MultiEnd