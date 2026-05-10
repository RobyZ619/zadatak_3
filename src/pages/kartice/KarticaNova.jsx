import { Button, Col, Form, Row } from "react-bootstrap"
import { RouteNames } from "../../constants"
import { Link, useNavigate } from "react-router-dom"
import KarticeService from "../../services/kartice/KarticeService"

export default function KarticaNova(){

    const navigate = useNavigate()

    async function dodaj(kartica){
        await KarticeService.dodaj(kartica).then(()=>{
            navigate(RouteNames.KARTICE)
        })
    }

    function odradiSubmit(e){
        e.preventDefault()
        const podaci = new FormData(e.target)
        dodaj({
            naziv: podaci.get('naziv'),
            proizvodac: podaci.get('proizvodac'),
            aiPodrska: podaci.get('aiPodrska'),
            namjena: podaci.get('namjena')
        })
    }

    return (
        <>
            <h3>Unos nove grafičke kartice</h3>
            <Form onSubmit={odradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required />
                </Form.Group>

                <Form.Group controlId="proizvodac">
                    <Form.Label>Proizvođač</Form.Label>
                    <Form.Select name="proizvodac">
                        <option value="NVIDIA">NVIDIA</option>
                        <option value="AMD">AMD</option>
                        <option value="Intel">Intel</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="aiPodrska">
                    <Form.Label>AI podrška</Form.Label>
                    <Form.Control type="text" name="aiPodrska" />
                </Form.Group>

                <Form.Group controlId="namjena">
                    <Form.Label>Namjena</Form.Label>
                    <Form.Select name="namjena">
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
                            Dodaj karticu
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
