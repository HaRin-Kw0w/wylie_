import { useEffect } from 'react';
import './css/style.css';
import Start from './component/Start';
import Section from './component/Section';
import Footer from './component/Footer';
import UIScript from './component/UIScript';

function App() {
  return (
		<div className="wrapper">
			<Start/>
			<Section/>
			<Footer/>
			<UIScript/>
	</div>	
  );
}

export default App;
