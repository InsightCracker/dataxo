import { 
    Box
} from "@chakra-ui/react";

const About = () => {
    return (
    <Box className="about" id="about">
        <h2>About Us</h2>

        <p>Building a smarter way to learn data</p>

        <div className="about-text">
            <p>Our platform uses interactive quizzes and real-world scenarios to help analysts and data scientists move beyond just using tools. Empowering them to think critically, reason with data, and make better analytical decisions.</p>

            <p>We bridge the gap between tool proficiency and deep conceptual understanding so learners can truly master their craft.</p>

            <Box className="about-grid">
                <div className="about-feature visible">
                    <h3>📊 Smart Data Quizzes</h3>
                    <p>Take engaging, hands-on quizzes on Excel, Power BI, and Tableau that not only test your skills but also help you master real-world analytics scenarios. Track your progress and see your confidence grow with every challenge.</p>
                </div>

                <div className="about-feature visible">
                    <h3>🧠 Data Concepts Mastery</h3>
                    <p>Build a solid foundation in essential data terms, analytics frameworks, and key concepts. Our interactive lessons make complex ideas simple, helping you think critically and apply theory to practice.</p>
                </div>

                <div className="about-feature visible">
                    <h3>📝 Report Writing & Insights</h3>
                    <p>Turn data into actionable insights. Learn how to create professional, clear, and persuasive reports that communicate your findings effectively, making your analysis stand out.</p>
                </div>

                <div className="about-feature visible">
                    <h3>🚀 Project Showcase Studio</h3>
                    <p>Showcase real-world data projects in a professional portfolio. Gain credibility, demonstrate your skills, and make a lasting impression on recruiters, clients, or your team.</p>
                </div>
            </Box>
        </div>
    </Box>
    )
}

export default About