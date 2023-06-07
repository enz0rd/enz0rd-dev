import './Banner.css';

function MainBanner() {
    return (
        <main className='Main'>
            <section className='Main-Banner'>
                <h1 className="Main-Banner-Title">Olá</h1>
                <p className='Main-Banner-Text'>me chamo Enzo, bem vindo ao meu site</p>
                <img alt='Banner principal' src='/img/banner.jpg' className='Main-Banner-Img'/>
            </section>
        </main>
    )
}

export default MainBanner