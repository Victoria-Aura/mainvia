import { Container, Row, Col } from 'react-bootstrap';
import './Disciplines.css';
import List from '../UI/List/List';
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import GameDisciplineService from '../../API/GameDisciplineService';
import MidItemList from '../UI/Item/MidItemList';
import Loader from '../UI/Loader/Loader';
import { useGetImg } from '../../hooks/useGetImg';
import ImgService from '../../API/ImgService';

function Disciplines() {
  const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
  Dataimg.forEach(element => {
    console.log(element);
  });
  
 return (
  
    <div style={{backgroundColor: '#2b2a2f',color:'white',fontFamily:'Bahnschrift',textAlign:'center',padding:'2%'}}>
        {isLoading
          ?<Loader></Loader>
        
          :<>
            <h1 style={{color: '#da3f3e',textShadow: '1px 1px 1px #fbf5db',fontSize:'8vw'}}>ДИСЦИПЛИНЫ</h1>
            <h2>Victoria Aura предоставляет возможность участвовать в турнирах/чемпионатах по следующим дисциплинам:</h2>
            <Container>
              <Row>
                <Col>
                  <div></div>
                  {/* <img src={valorant} alt='' href="/valorant" className='valoBtn' /> */}
                  
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Container>
          </>
          }
          

    </div>
  );
}

export default Disciplines ;