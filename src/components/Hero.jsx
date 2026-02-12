import { 
    Box
} from "@chakra-ui/react";

const Hero = () => {
    return (
    <Box className="hero" id="hero">
        <h1>Your Complete Data Learning Hub</h1>

        <p>Master data through interactive quizzes, real-world questions, and instant feedback - all in one seamless platform.</p>

        <Box sx={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <a href="/login" className="btn btn-primary">Start Now</a>

            <a href='#services' className="btn btn-secondary">Explore Services</a>
        </Box>
    </Box>
    )
}

export default Hero