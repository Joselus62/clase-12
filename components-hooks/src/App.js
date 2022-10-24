import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImageList from './components/imageList/ImageList';
import { Container} from 'react-bootstrap';
import Movies from './movies/Movies';

const myData=[
  {Framework:"Bootstrap"},
  {Framework:"Material"},
  {Framework:"Tailwind"},
  {Framework:"Next"}
]

function App() {  

  const myDataList = myData.map ( (element) => {
    return ( <h2>{ element.Framework }</h2>)
  });

  return (
    <Container fluid className="App">
      <Movies data={ myDataList }>
        <h1> Hello Word!</h1>
        <h1> From React Children!</h1>
      </Movies>
      <h1>Listado de imágenes</h1>
      <ImageList />      
    </Container>
  );
}

export default App;
