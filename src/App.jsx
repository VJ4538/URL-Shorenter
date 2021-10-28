import Container from './Components/Container'
import Navigation from './Views/Navigation/Index'
import Introduction from './Views/Introduction/index'
import MainContent from './Views/MainContent/Index'
import BoostLink from './Views/BoostLink/Index'
import Footer from './Views/Footer/Index'

function App() {

  return (
   <Container className='container'>
      <Navigation />
      <Introduction />
      <MainContent />
      <BoostLink />
      <Footer />
   </Container>
  );
}

export default App
