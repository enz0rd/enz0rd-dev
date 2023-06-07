import './Banner.css';

function MainBanner() {
    return (
        <main className='Main'>
            <section className='Main-Banner'>
                <h1 className="Main-Banner-Title">Olá</h1>
                <img alt='Banner principal' src='/img/banner.jpg' className='Main-Banner-Img'/>
            </section>
        </main>
    )
}

export default MainBanner