
import './style.css';
import Header from './header';
import WordList from './wordlist';
import Train from './training';
import Footer from './footer';
import './fonts/OpenSans.ttf'

function CardList() 
 {
  return (
    <div className="Card">
      <Header />
      <WordList />
      <div className='trainings'>
        <h2>Тренировать слова</h2>
      <Train/></div>
      <Footer />
    </div>
  );
}

export default CardList;
