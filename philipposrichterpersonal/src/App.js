import './index.css';
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'
import SingleProjectPage from './pages/SingleProjectPage';

function App(){
	return (
		<BrowserRouter>
      <Header/>
			<Routes>
				<Route path='/' element = {<HomePage/>} />
        <Route path='/about' element= {<AboutPage/>}/>
        <Route path='/work' element= {<WorkPage/>}/>
        <Route path='/education' element= {<EducationPage/>}/>
        <Route path='/projects' element= {<ProjectsPage/>}/>
        <Route path='/projects/:projectId' element={<SingleProjectPage/>}/>
        <Route path='/contact' element= {<ContactPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
			</Routes>
		</BrowserRouter>	
	)
}

export default App;
