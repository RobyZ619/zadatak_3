import { IME_APLIKACIJE } from "../constants";

export default function Home(){
    return(
        <div style={{textAlign: 'center', maxWidth: '900px', margin: '40px auto'}}>
            <h2 style={{marginBottom: '24px'}}>{IME_APLIKACIJE}</h2>
            <img
                src="/naslovna.webp"
                alt="Grafička kartica sa AI podrškom"
                className="hero-slika"
                style={{width: '100%', borderRadius: '8px'}}
            />
        </div>
    )
}
