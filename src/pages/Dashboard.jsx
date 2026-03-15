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
        <div className="profile" sx={{ width: '100%' }}>
            <h1>Welcome back, <span>{name}</span> 💪</h1>

            <div>
                <div>
                    <h1><FaAward /> Advance Analyst <FaLetterboxd /></h1>
                </div>

                <div className="other-share-btn-left">
                    View Leaderboard
                </div>
            </div>

            <div className="">
                <div>
                    <div><FaGraduationCap /></div>
                    <div>
                        <p>Total Points</p>
                        <p>100</p>
                    </div>
                </div>

                <div>
                    <div><FaGraduationCap /></div>
                    <div>
                        <p>Quizzes Completed</p>
                        <p>18</p>
                    </div>
                </div>
            </div>
        </div>
    </Box>
    )
}

export default Dashboard;