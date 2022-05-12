import './Create.css';


export function Create() {

  return (
    <div className='product'>
      <div >
        <h1>Create Your Own Design</h1>
        <p>Our studio is offering an innovative way to view
          your ceramic design. Just click on the pottery you
          would like to order and let the magic begin!
        </p>
      </div>
      <div className='modules'>
        {/* <div>
          <a href="./Donut" className='gotodonut'>Donut</a>
        </div> */}
        <div>
          <a href="./cup" className='gotocup'>Japanese TeaCup</a>
        </div>
        <div>
          <a href="./plate" className='gotoplate'>Plate</a>
        </div>
        <div>
          <a href="./Bwl" className='gotobowl'>Bowl</a>
        </div>
        <div>
          <a href="./Brasero" className='gotobrasero'>Brasero</a>
        </div>
        <div>
          <a href="./Coffe" className='gotocoffe'>Coffe Cup</a>
        </div>
        <div>
          <a href="./Flask" className='gotoflask'>Water Flask</a>
        </div>
        <div>
          <a href="./Clyplt" className='gotoclyplate'>Old Clay Plate</a>
        </div>
        <div>
          <a href="./Tpot" className='gototeapot'>Tea Pot</a>
        </div>
      </div>


    </div >
  );
}


