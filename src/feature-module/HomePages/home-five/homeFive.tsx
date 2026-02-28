import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import Footer from './footer';

const HomeFive = () => {
  const route = all_routes;

  const features = [
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Micro Learning',
      description:
        'Une leçon par jour pour développer tes compétences et ta vision. Courte, impactante, actionnable.',
    },
    {
      icon: 'fa-solid fa-gift',
      title: 'Good Deals',
      description:
        'Bourses d’études, formations gratuites, stages rémunérés. Les meilleures opportunités au même endroit.',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Découvrir',
      description:
        'Explore des centaines de métiers d’avenir. Salaires, compétences, perspectives : toutes les infos dont tu as besoin.',
    },
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Career Planner',
      description:
        'Organise ton parcours étape par étape. Notre IA te guide et optimise ton plan de carrière.',
    },
    {
      icon: 'fa-solid fa-user-group',
      title: 'Clubs par métier',
      description:
        'Connecte-toi avec d’autres étudiants qui partagent tes ambitions. Des mentors temporaires t’accompagnent.',
    },
    {
      icon: 'fa-solid fa-lock',
      title: '100% Anonyme',
      description:
        'Aucune donnée personnelle requise. Juste un pseudo, un mot de passe et ton pays. Ta vie privée est sacrée.',
    },
  ];

  const assistantPoints = [
    { text: 'Personnalisation selon ton métier visé' },
    { text: 'Assistant IA pour optimiser ton parcours' },
    { text: 'Communauté bienveillante et motivante' },
    { text: 'Opportunités exclusives chaque semaine' },
    { text: 'Suivi de tes progrès et réalisations' },
  ];

  const appCards = [
    { title: 'Accueil', icon: '🏠', bg: 'bg-purple-gradient' },
    { title: 'Career Planner', icon: '🎯', bg: 'bg-maroon-gradient' },
    { title: 'Découvrir', icon: '🔍', bg: 'bg-info-gradient' },
    { title: 'Clubs', icon: '👥', bg: 'bg-warning-gradient' },
  ];

  const landingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.getElementsByTagName("body")[0];
    root.classList.add("home-five");
    return () => {
      root.classList.remove("home-five");
    };
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const container = landingRef.current;
    if (!container) return;

    const animatedEls = container.querySelectorAll('.studlife-animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('studlife-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    animatedEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="studlife-landing bg-primary-gradient" ref={landingRef}>
      <section className="studlife-hero pt-5 pt-lg-80 pb-5 studlife-animate" id="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-soft-primary text-primary rounded-pill px-3 py-2 mb-4">
                ✨ Nouvelle génération d’orientation
              </span>
              <h1 className="studlife-hero-title mb-3">
                <span className="text-primary">Meilleure personne,</span>
                <br />
                meilleure vie,
                <br />
                meilleure carrière
              </h1>
              <p className="text-gray-6 mb-4" style={{ maxWidth: 560 }}>
                Découvre ton potentiel, planifie ta carrière et connecte-toi avec une communauté d’étudiants ambitieux. L’application qui transforme tes rêves en réalité.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to={route.register} className="btn btn-primary">
                  Commencer l’aventure
                </Link>
                <Link to={route.register} className="btn btn-white border">
                  Voir comment ça marche
                </Link>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-lg-center">
              <div className="studlife-iphone mx-auto">
                {/* Titanium frame reflections */}
                <div className="studlife-iphone-frame-shine"></div>
                {/* Screen */}
                <div className="studlife-iphone-screen">
                  {/* Front camera (under-display style) */}
                  <div className="studlife-iphone-pill">
                    <span className="studlife-pill-sensor"></span>
                  </div>
                  {/* iOS Status bar */}
                  <div className="studlife-ios-statusbar">
                    <span className="studlife-ios-time">9:41</span>
                    <span className="studlife-ios-icons">
                      <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="0.5" y="0.5" width="3" height="10" rx="1" fill="#1c1c1e"/><rect x="4.5" y="2.5" width="3" height="8" rx="1" fill="#1c1c1e"/><rect x="8.5" y="4.5" width="3" height="6" rx="1" fill="#1c1c1e"/><rect x="12.5" y="6.5" width="3" height="4" rx="1" fill="#1c1c1e"/></svg>
                      <svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.5 2C10.26 2 12.7 3.27 14.17 5.33a.5.5 0 010 .58C12.7 7.97 10.26 9.24 7.5 9.24S2.3 7.97.83 5.91a.5.5 0 010-.58C2.3 3.27 4.74 2 7.5 2z" fill="none" stroke="#1c1c1e" strokeWidth="1"/><path d="M2.5 1L12.5 10" stroke="#1c1c1e" strokeWidth="1" strokeLinecap="round"/></svg>
                      <svg width="25" height="11" viewBox="0 0 25 11" fill="none"><rect x="0.5" y="0.5" width="21" height="10" rx="2" stroke="#1c1c1e" strokeOpacity="0.35"/><rect x="1.5" y="1.5" width="17" height="8" rx="1.5" fill="#1c1c1e"/><path d="M23 4v3a1.5 1.5 0 000-3z" fill="#1c1c1e" opacity="0.4"/></svg>
                    </span>
                  </div>
                  {/* App content */}
                  <div className="studlife-ios-app">
                    {/* Greeting */}
                    <h3 className="studlife-app-greeting text-center mb-4">Bonjour Docteur 👋</h3>
                    {/* App cards */}
                    <div className="studlife-phone-card">
                      <h6 className="mb-2 fw-bold">💡 Micro Learning du jour</h6>
                      <p className="mb-0">Le pouvoir du réseau : construire des relations authentiques peut ouvrir plus de portes que votre CV.</p>
                    </div>
                    <div className="studlife-phone-card">
                      <h6 className="mb-2 fw-bold">🎯 Good Deal</h6>
                      <p className="mb-0">Bourse Erasmus+ 2026 – 450€/mois</p>
                    </div>
                    <div className="studlife-phone-card mb-0">
                      <h6 className="mb-2 fw-bold">💼 Career Planner</h6>
                      <p className="mb-0">3 étapes complétées cette semaine</p>
                    </div>
                  </div>
                  {/* iOS Tab bar */}
                  <div className="studlife-ios-tabbar">
                    <div className="studlife-tab-item active">
                      <i className="fa-solid fa-house"></i>
                      <span>Accueil</span>
                    </div>
                    <div className="studlife-tab-item">
                      <i className="fa-solid fa-compass"></i>
                      <span>Découvrir</span>
                    </div>
                    <div className="studlife-tab-item">
                      <i className="fa-solid fa-bullseye"></i>
                      <span>Carrière</span>
                    </div>
                    <div className="studlife-tab-item">
                      <i className="fa-solid fa-user-group"></i>
                      <span>Clubs</span>
                    </div>
                  </div>
                </div>
                {/* Home Indicator */}
                <div className="studlife-iphone-homebar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studlife-section pt-5 pt-lg-80 pb-5 studlife-animate" id="features">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
            <span className="badge bg-soft-primary text-primary rounded-pill px-3 py-2 mb-3">
              <i className="fa-solid fa-rocket me-2" />
              Tout ce dont tu as besoin
            </span>
            <h2 className="mb-3">Une application complète pour ton succès</h2>
            <p className="mb-0 text-gray-6">
              Développe tes compétences, découvre des opportunités et construis la carrière de tes rêves
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {features.map((item) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={item.title}>
                <div className="studlife-feature-card h-100">
                  <div className="studlife-icon-wrap bg-purple-gradient text-white mb-3">
                    <i className={item.icon} />
                  </div>
                  <h5 className="mb-2">{item.title}</h5>
                  <p className="mb-0 text-gray-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studlife-section py-5 py-lg-80 studlife-animate" id="discover">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-soft-primary text-primary rounded-pill px-3 py-2 mb-3">Découvrir</span>
              <h2 className="mb-4">Ton assistant personnel pour réussir ta vie</h2>
              <p className="mb-4 text-gray-6">
                Stud’Life t’accompagne à chaque étape de ton parcours. De la découverte de ta voie à la réalisation de tes ambitions, nous sommes là pour toi.
              </p>
              <ul className="list-unstyled mb-4">
                {assistantPoints.map((point) => (
                  <li className="d-flex align-items-start mb-3 studlife-benefit" key={point.text}>
                    <span className="studlife-check me-3">
                      <i className="fa-solid fa-check" />
                    </span>
                    <span className="fw-semibold studlife-benefit-text" style={{ color: '#392C7D' }}>{point.text}</span>
                  </li>
                ))}
              </ul>
              <Link to={route.register} className="btn btn-primary">
                Télécharger l’application
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                {appCards.map((card) => (
                  <div className="col-sm-6" key={card.title}>
                    <div className="studlife-app-card h-100">
                      <div className={`studlife-app-screen ${card.bg}`}>
                        <span>{card.icon}</span>
                      </div>
                      <p className="mb-0 text-center fw-medium">{card.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studlife-stats bg-purple-gradient2 py-5 studlife-animate" id="about">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-6">
              <h2 className="text-white mb-1">10k+</h2>
              <p className="text-white mb-0">Étudiants actifs</p>
            </div>
            <div className="col-lg-3 col-6">
              <h2 className="text-white mb-1">500+</h2>
              <p className="text-white mb-0">Métiers référencés</p>
            </div>
            <div className="col-lg-3 col-6">
              <h2 className="text-white mb-1">2k+</h2>
              <p className="text-white mb-0">Opportunités par mois</p>
            </div>
            <div className="col-lg-3 col-6">
              <h2 className="text-white mb-1">95%</h2>
              <p className="text-white mb-0">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="studlife-section py-5 py-lg-80 studlife-animate">
        <div className="container">
          <div className="studlife-cta-box text-center mx-auto">
            <span className="badge bg-soft-primary text-primary rounded-pill px-3 py-2 mb-3">Passer à l’action</span>
            <h2 className="mb-3">Prêt à transformer ta vie ?</h2>
            <p className="mb-4 text-gray-6">
              Rejoins des milliers d’étudiants qui construisent leur avenir dès aujourd’hui. Inscription gratuite, sans engagement.
            </p>
            <form className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-3">
              <input type="text" className="form-control" placeholder="Choisis ton pseudo" />
              <Link to={route.register} className="btn btn-primary d-inline-flex align-items-center justify-content-center">
                Commencer
              </Link>
            </form>
            <p className="mb-0 text-gray-6">🔒 Aucune donnée personnelle • 100% gratuit • Anonymat garanti</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeFive
