import { useEffect } from 'react';
function Header({ scrollY, setScrollY, parallaxRef, scrollToSection }) {  // Efecto parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="hero" id="inicio">
        <div 
          className="parallax-bg"
          ref={parallaxRef}
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotateX(${scrollY * 0.01}deg) rotateY(${scrollY * 0.01}deg)`
          }}
        ></div>
        <div className="hero-content">
          <h1 className='text-shadow'>Piero Nicolini</h1>
          <p>Desarrollador Full Stack & Diseñador UX/UI</p>

          <button className="cta-button" onClick={() => scrollToSection('proyectos')}>
            Ver mis proyectos
          </button>
        </div>
      </section>
  );
}

export default Header;
