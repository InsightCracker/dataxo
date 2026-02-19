import { 
    Box
} from "@chakra-ui/react";

const HowItWorks = () => {
    return (
    <Box className="howitworks">
        <h2>How It Works</h2>

        <p>Get started in three steps</p>

        <Box className="steps-container">
            <div className="step-card visible">
                <div className="step-number">1</div>
                <div className="step-icon">📚</div>
                <h3>Choose Your Learning Path</h3>
                <p>Pick what you want to master - quizzes on Excel, Power BI, Tableau, SQL, Python, data concepts, report writing, or project building.</p>
            </div>

            <div className="step-card visible">
                <div className="step-number">2</div>
                <div className="step-icon">🖥️</div>
                <h3>Learn & Practice</h3>
                <p>Dive into interactive lessons, hands-on quizzes, and real-world scenarios. Practice and get instant feedback to strengthen your skills.</p>
            </div>

            <div className="step-card visible">
                <div className="step-number">3</div>
                <div className="step-icon">📈</div>
                <h3>Track & Showcase</h3>
                <p >Monitor your progress, see how you rank on the leaderboard, and share your quiz results with others to showcase your skills and achievements.</p>
            </div>
        </Box>
    </Box>
    )
}

export default HowItWorks