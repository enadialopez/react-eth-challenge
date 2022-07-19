import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Profile from '../components/Profile.jsx';
import Experience from '../components/Experience.jsx';
import Academic from '../components/Academic.jsx';
import Skills from '../components/Skills.jsx';
import Interest from '../components/Interest.jsx';
import Languages from '../components/Languages.jsx';
import getData from '../utils/getData';

const App = () => {
  const [cvData, setCvData] = useState({});

  useEffect(() => {
    getData('data.jason')
      .then(data => setCvData(data.data))
      .catch(error => console.log(error));
  }, [cvData])

  console.log(cvData)

  return (
    <>
      <Header data= {cvData}>
      <About about = {cvData.About} />
      </Header>
      <Profile description = {cvData.Profile} />
      <Experience experience = {cv.Experience} />
      <Academic academic = {cvData.Academic} />
      <Skills skills = {cvData.Skills} />
      <Interest interest = {cvData.Interest} />
      <Languages languages = {cvData.languages} />
    </>
  )
};

export default App;
