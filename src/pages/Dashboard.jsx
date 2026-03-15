import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

import { 
    Box
} from "@chakra-ui/react";

import { 
  FaAward,
  FaLetterboxd,
  FaGraduationCap
} from "react-icons/fa6";
import { color } from "framer-motion";

const Dashboard = () => {
    const { 
        name,
      } = useContext(QuizContext);

    return (
    <Box sx={{
          maxW: '600px',
          w: '100%',
          m: '0 auto'
        }} className="dashboard_container">
        <h1>DataXO</h1>
        <div className="profile">
            <h1>Welcome back, <span>{name}</span> 💪</h1>

            <div className="dash-list">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    gap: '1rem'
                }}>
                    <h1><FaAward /> </h1>

                    <div>Advance Analyst</div>

                    <h1><FaLetterboxd /></h1>
                </div>

                <div className="other-share-btn-left">
                    View Leaderboard
                </div>
            </div>

            <div className="dash-list colored">
                <div className="dash-list-card">
                    <Box className="icon" 
                        sx={{color: 'purple' }} 
                    >
                        <FaGraduationCap />
                    </Box>

                    <div className="list-text">
                        <p>Total Points</p>
                        <h3>100</h3>
                    </div>
                </div>

                <div className="dash-list-card">
                    <Box className="icon" 
                        sx={{color: 'purple' }} 
                    >
                        <FaGraduationCap />
                    </Box>

                    <div className="list-text">
                        <p>Quizzes Completed</p>
                        <h3>18</h3>
                    </div>
                </div>
            </div>
        </div>
    </Box>
    )
}

export default Dashboard;