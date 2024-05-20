import '../../index.css';

const Partner = () => {
    return (
        <section className='p-16'>
            <div className="judul">
                <h2 className="text-center m-auto p-4 font-semibold md:text-3xl xl:text-4xl">
                    Partner Mitra!
                </h2>
            </div>
            <div className="menu-list grid grid-cols-4 gap-4">
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/2-color.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/2-black.svg"
                        alt="Partner Logo Color"></img>
                </div>
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/1-black.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/1-color.svg"
                        alt="Partner Logo Color"></img>
                </div>
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/4-black.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/4-color.svg"
                        alt="Partner Logo Color"></img>
                </div>
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/3-black.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/3-color.svg"
                        alt="Partner Logo Color"></img>
                </div>
            </div>
        </section>
    );
}

export default Partner;