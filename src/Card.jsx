import pic from './assets/Lily.jpg'
function Card(){

    return(
        <div className="card">

            <img className=" card-img"src={pic} alt= "propic"></img>

            <h2 className='card-title'>Lily heaven</h2>
            <p className='card-text'>
                This is my business account. these are the best selling intems in our shop, glass, rings and earings

            </p>


        </div>



    )

}
export default Card