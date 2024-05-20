import '../../index.css';

const Partner2 = () => {
    return (
        <section className='p-16 m-6'>
            <div className="menu-list grid grid-cols-4 gap-4">
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/5-black.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/5-color.svg"
                        alt="Partner Logo Color"></img>
                </div>
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/7-black.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/7-color.svg"
                        alt="Partner Logo Color"></img>
                </div>
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/8-black.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/8-color.svg"
                        alt="Partner Logo Color"></img>
                </div>
                <div className="list-menu">
                    <img className="absolute hidden lg:block lg:hover:hidden lg:hover:opacity-0"
                        src="/partner/6-black.svg" alt="Partner Logo Grayscale"></img>
                    <img className="absolute lg:opacity-0 lg:hover:opacity-100" src="/partner/6-color.svg"
                        alt="Partner Logo Color"></img>
                </div>
            </div>
        </section>
    );
}

export default Partner2;