import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import KarticeService from "../../services/kartice/KarticeService"
import { Button, Col, Form, Row } from "react-bootstrap"
import { RouteNames } from "../../constants"

export default function KarticaPromjena(){

    const navigate = useNavigate()
    const params = useParams()
    const [kartica, setKartica] = useState({})

    useEffect(()=>{
        ucitajKarticu()
    },[])

    async function ucitajKarticu() {
        await KarticeService.getBySifra(params.sifra).then((odgovor)=>{
            setKartica(odgovor.data)
        })
    }

    async function promjeni(kartica) {
        await KarticeService.promjeni(params.sifra, kartica).then(()=>{
            navigate(RouteNames.KARTICE)
        })
    }

    function odradiSubmit(e){
        e.preventDefault()
        const podaci = new FormData(e.target)
        promjeni({
            naziv: podaci.get('naziv'),
            proizvodac: podaci.get('proizvodac'),
            aiPodrska: podaci.get('aiPodrska'),
            namjena: podaci.get('namjena')
        })
    }

    return(
        <>
            <h3>Promjena grafičke kartice</h3>
            <Form onSubmit={odradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required
                    defaultValue={kartica.naziv}/>
                </Form.Group>

                <Form.Group controlId="proizvodac">
                    <Form.Label>Proizvođač</Form.Label>
                    <Form.Select name="proizvodac" value={kartica.proizvodac || ''}
                    onChange={(e)=>setKartica({...kartica, proizvodac: e.target.value})}>
                        <option value="NVIDIA">NVIDIA</option>
                        <option value="AMD">AMD</option>
                        <option value="Intel">Intel</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="aiPodrska">
                    <Form.Label>AI podrška</Form.Label>
                    <Form.Control type="text" name="aiPodrska"
                    defaultValue={kartica.aiPodrska}/>
                </Form.Group>

                <Form.Group controlId="namjena">
                    <Form.Label>Namjena</Form.Label>
                    <Form.Select name="namjena" value={kartica.namjena || ''}
                    onChange={(e)=>setKartica({...kartica, namjena: e.target.value})}>
                        <option value="Gaming">Gaming</option>
                        <option value="Profesionalni AI">Profesionalni AI</option>
                        <option value="Lokalni AI">Lokalni AI</option>
                        <option value="Kreativni rad">Kreativni rad</option>
                        <option value="Proračunski izbor">Proračunski izbor</option>
                    </Form.Select>
                </Form.Group>

                <Row className="mt-4">
                    <Col>
                        <Link to={RouteNames.KARTICE} className="btn btn-danger">
                            Odustani
                        </Link>
                    </Col>
                    <Col>
                        <Button type="submit" variant="success">
                            Promjeni karticu
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
