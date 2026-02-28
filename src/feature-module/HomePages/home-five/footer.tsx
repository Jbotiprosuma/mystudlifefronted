import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'

const Footer = () => {
  return (
    <footer className="footer footer-five">
  <div className="footer-three-top" data-aos="fade-up">
    <div className="container">
      <div className="footer-three-top-content">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="footer-widget-three footer-about">
              <div className="footer-three-logo text-primary h3 fw-bold mb-3">
                Stud’Life
              </div>
              <div className="footer-three-about">
                <p>
                  L’application qui aide les étudiants à devenir la meilleure version d’eux-mêmes. Meilleure personne, meilleure vie, meilleure carrière.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="footer-widget-three footer-menu-three footer-three-right">
              <h5 className="footer-three-title">Produit</h5>
              <ul>
                <li><Link to={all_routes.homefive}>Fonctionnalités</Link></li>
                <li><Link to={all_routes.hometwo}>Découvrir</Link></li>
                <li><Link to={all_routes.register}>Télécharger</Link></li>
                <li><Link to={all_routes.pricingPlan}>Tarifs</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="footer-widget-three footer-menu-three">
              <h5 className="footer-three-title">Ressources</h5>
              <ul>
                <li><Link to={all_routes.blogGrid}>Blog</Link></li>
                <li><Link to={all_routes.FAQ}>Guide carrière</Link></li>
                <li><Link to={all_routes.testimonials}>Communauté</Link></li>
                <li><Link to={all_routes.contactUs}>Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="footer-widget-three footer-menu-three">
              <h5 className="footer-three-title">Entreprise</h5>
              <ul>
                <li><Link to={all_routes.about_us}>À propos</Link></li>
                <li><Link to={all_routes.privacyPolicy}>Confidentialité</Link></li>
                <li><Link to={all_routes.termsConditions}>Conditions</Link></li>
                <li><Link to={all_routes.contactUs}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="footer-bottom-five">
    <div className="container">
      <div className="row row-gap-3">
        <div className="col-12">
          <div className="copyright-text">
            <p className="text-center mb-0">
              © {new Date().getFullYear()} Stud’Life. Tous droits réservés. Fait avec ❤️ pour les étudiants.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer