/* eslint-disable react/prop-types */
import '../Styles/BrandCard.css';

export default function BrandCard({ source, Title}) {
  return (
    <>
    <div className='card'>
        <img src={source} alt='image' className='card-image '/>
    </div>
    <div className='card-text'>
    <h6 style={{marginTop:'0.2dvh' , textAlign:'center'}}><span>{Title}</span></h6>
    </div>
    </>
    
  );
}
