// Menu principal del programa
import { Link } from "react-router-dom"
import cvs from "../assets/data"

Link
export default function mainMenu() {
    return (
        <>
            <div className="container">
                {
                    cvs.map(cv => {
                        return (
                            <>
                                <div key={cv.name} className="card">
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/006/487/912/small_2x/hacker-avatar-ilustration-free-vector.jpg" alt="" className="card-image" style={{ width: 200, height: 200 }} />
                                    <Link to={`/CVitae/${cv.name}`} className="card-name"><h2>{cv.name}</h2></Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}