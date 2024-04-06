import { useNavigate, useParams } from "react-router-dom"
export default function CVitae(data) {
    const { id } = useParams();
    console.log(data.data);
    const cvs = data.data;
    const navigate = useNavigate();
    return (
        <>
            <button type="button" onClick={() => { navigate('/') }}>Home</button>
            {
                cvs.map(cv => {
                    if (cv.id == id) {
                        return (
                            <>
                                <div key={cv.id}>
                                    <h1>Resumen Curricular</h1>
                                    <h2>{cv.name} {cv.lastName}</h2>
                                    <img src={cv.photo} alt="" />
                                    <h3>Datos personales</h3>
                                    <ul>
                                        <li>Pais de nacionalidad: {cv.country}</li>
                                        <li>Fecha de nacimiento: {cv.birthDate}</li>
                                        <li>Cédula de identidad: {cv.id}</li>
                                        <li>Estado civil: {cv.state}</li>
                                        <li>Dirección de correor electrónico: {cv.email}</li>
                                        <li>Dirección fisica: {cv.address}</li>
                                        <li>Telefono de contacto: {cv.phone}</li>
                                    </ul>
                                    <h3>Información universitaria</h3>
                                    <ul>
                                        <li>Nombre de la universidad: {cv.university.name}</li>
                                        <li>Grado: {cv.university.degree}</li>
                                        <li>Pais y ciudad: {cv.university.countryCity}</li>
                                        <li>Ano de egreso: {cv.university.graduate}</li>
                                    </ul>
                                    <h3>Otras especializaciones, grados, certificaciónes e información escolar básica.</h3>
                                    <ul>
                                        <li>{cv.other.degree}</li>
                                        <li>{cv.other.languages}</li>
                                    </ul>
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}