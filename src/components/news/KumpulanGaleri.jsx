import ArtikelGaleriMerangkul from "../galeri/ArtikelGaleriMerangkul"
import ArtikelGaleriPenandatanganan from "../galeri/ArtikelGaleriPenandatanganan"
import ArtikelGaleriTampilBeda from "../galeri/ArtikelGaleriTampilBeda"
import GaleriCard from "../galeri/GaleriCard"
import SorotanGaleri from "./SorotanGaleri"

const KumpulanGaleri = () => {
    return (
        <div className="mt-28">
            <SorotanGaleri/>
            <GaleriCard/>
        </div>
    )
}

export default KumpulanGaleri
