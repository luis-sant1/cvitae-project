import { Link, useParams } from "react-router-dom"

export default function mainMenu(data) {
    const cvs = data.data;
    return (
        <>
            <div className="container">
                {
                    cvs.map(cv => {
                        return (
                            <>
                                <div key={cv.name} className="card">
                                    <img src={cv.photo} alt="" className="card-image" style={{ width: 200, height: 200 }} />
                                    <Link to={`/CVitae/${cv.id}`} className="card-name" ><h2>{cv.name} {cv.lastName}</h2></Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}