// import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utlis/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skill from './components/SkillSection';
import Education from './components/Education';
// import Experience from './components/Experience';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ImportExport } from '@mui/icons-material';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Training_Certification from './components/Trainings';
import Trainings from './components/Trainings';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width :100%;
  overflow-x : hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(204, 0 ,187, 0.15) 0%,
    rgba(201, 32 ,184, 0) 50%,
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70 ,289, 0) 50%,
    rgba(0, 70 ,289, 0.15) 100%,
  );
  width: 100%;
  clip-path: polygon(0 0,100% 0, 100% 100%, 0 calc(100% -5vw));
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skill />
            <Trainings/>        
            <Education />
          </Wrapper>
          <Projects />
          <Contact />
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
