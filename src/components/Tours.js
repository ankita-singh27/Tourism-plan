import Card from './Card'
function Tours({tours, setTours}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan A Trip </h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card  key={tour.id} {...tour} tours={tours} setTours={setTours}></Card>
                    } )
        
                }
            </div>
        </div>
    );
}

export default Tours;