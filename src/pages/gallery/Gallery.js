import Rooms from "./Rooms"
import RoomData from "./roomImages/RoomData"
import HallData from "./HallData"
import OtherData from "./OtherData"
import Hall from "./Hall"
import OtherFaclity from "./OtherFacility"
import "./Gallery.css"



const Product = () => {

    const rooms = RoomData.map((room) =>{
        return <Rooms
        key={room.id}
        room={room}
        />
    })

    const halls = HallData.map((hall) => {
        return <Hall 
        key={hall.id}
        hall={hall}
        />
    })

    const others = OtherData.map((otherItem) => {
        return <OtherFaclity 
        key={otherItem.id}
        otherItem={otherItem}
        />
    })

    return(
       
        <div>
            <main className="main"> 
                
                <section >
                    <div>
                        <h1 className="text-center mb-3">Our Exotic Rooms</h1>
                   </div>
                   <div className="roomWrapper">
                       {rooms}
                   </div>
                </section>

                <section >
                    <div>
                        <h1 className="text-center mb-3">Our Halls </h1>
                    </div>
                    <div className="hallWrapper mb-3">
                        {halls}
                    </div>
                </section>


                <section >
                    <div className="text-center mb-3">
                        <h1>Other Facilities</h1>
                    </div>
                   <div className="otherFacilties">
                        {others}
                   </div>
                </section>
            </main>
        </div>
    )
}

export default Product