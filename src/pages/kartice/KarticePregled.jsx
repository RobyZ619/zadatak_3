import { useEffect, useState } from "react"
import KarticeService from "../../services/kartice/KarticeService"
import { Button, Table } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"

export default function KarticePregled(){

    const navigate = useNavigate()
    const [kartice, setKartice] = useState([])

    useEffect(()=>{
        ucitajKartice()
    },[])

    async function ucitajKartice() {
        await KarticeService.get().then((odgovor)=>{
            setKartice(odgovor.data)
        })
    }

    function glowKlasa(proizvodac) {
        if(proizvodac === 'NVIDIA') return 'glow-nvidia'
        if(proizvodac === 'AMD') return 'glow-amd'
        if(proizvodac === 'Intel') return 'glow-intel'
        return ''
    }

    return(
        <>
        <Link to={RouteNames.KARTICE_NOVA}
        className="btn btn-success w-100 my-3">
            Dodaj novu karticu
        </Link>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Proizvođač</th>
                    <th>AI podrška</th>
                    <th>Namjena</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {kartice && kartice.map((kartica)=>(
                    <tr key={kartica.sifra} className={glowKlasa(kartica.proizvodac)}>
                        <td>{kartica.naziv}</td>
                        <td>{kartica.proizvodac}</td>
                        <td>{kartica.aiPodrska}</td>
                        <td>{kartica.namjena}</td>
                        <td>
                            <Button onClick={()=>{navigate(`/kartice/${kartica.sifra}`)}}>
                                Promjeni
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}
