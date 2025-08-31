import { preload } from 'react-dom';
import fontSrc from './assets/fonts/Noto_Sans/NotoSans-VariableFont_wdth,wght.ttf';
import heroImageSrc from './assets/images/prism.png';
import LandingPage from './pages/LandingPage';

function App() {
    preload(heroImageSrc, { as: 'image', fetchPriority: 'high' });
    preload(fontSrc, {
        as: 'font',
    });

    return (
        <>
            <LandingPage />
        </>
    );
}

export default App;
