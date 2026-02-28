import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
type PasswordField = "password" | "confirmPassword";

const Login = () => {
  const loginSLider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const route = all_routes;
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(route.homefive);
  };

  return (
    <>
      {/* Wrapper principal */}
      <div className="main-wrapper">
        <div className="login-content">
          <div className="row">
            {/* Bannière latérale */}
            <div className="col-md-6 login-bg d-none d-lg-flex">
              <Slider {...loginSLider} className="login-carousel">
                <div>
                  <div className="login-carousel-section mb-3">
                    <div className="login-banner">
                      <ImageWithBasePath
                        src="assets/img/auth/auth-1.svg"
                        className="img-fluid"
                        alt="Illustration Stud'Life"
                      />
                    </div>
                    <div className="mentor-course text-center">
                      <h3 className="mb-2">
                        Bienvenue sur <br />
                        Stud'<span className="text-secondary">Life</span>
                      </h3>
                      <p>
                        Ta plateforme intelligente pour construire ton avenir
                        professionnel. Micro learning, opportunités et
                        orientation, le tout 100% anonyme.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="login-carousel-section mb-3">
                    <div className="login-banner">
                      <ImageWithBasePath
                        src="assets/img/auth/auth-1.svg"
                        className="img-fluid"
                        alt="Illustration Stud'Life"
                      />
                    </div>
                    <div className="mentor-course text-center">
                      <h3 className="mb-2">
                        Apprends chaque jour <br />
                        en <span className="text-secondary">5 minutes</span>
                      </h3>
                      <p>
                        Des micro-leçons quotidiennes conçues pour développer
                        tes compétences et ta vision professionnelle.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="login-carousel-section mb-3">
                    <div className="login-banner">
                      <ImageWithBasePath
                        src="assets/img/auth/auth-1.svg"
                        className="img-fluid"
                        alt="Illustration Stud'Life"
                      />
                    </div>
                    <div className="mentor-course text-center">
                      <h3 className="mb-2">
                        Ton parcours, <br />
                        <span className="text-secondary">ton rythme</span>
                      </h3>
                      <p>
                        Career Planner, Good Deals, Clubs par métier — tous les
                        outils pour réussir, guidés par notre IA.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            {/* /Bannière latérale */}
            <div className="col-md-6 login-wrap-bg">
              {/* Formulaire de connexion */}
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between login-header">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo Stud'Life"
                      />
                      <Link to={route.homefive} className="link-1">
                        Retour à l'accueil
                      </Link>
                    </div>
                    <h1 className="fs-32 fw-bold topic">
                      Connecte-toi à ton compte
                    </h1>
                    <form onSubmit={handleSubmit} className="mb-3 pb-3">
                      <div className="mb-3 position-relative">
                        <label className="form-label">
                          E-mail ou pseudo<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="ton.pseudo@email.com"
                          />
                          <span>
                            <i className="isax isax-sms input-icon text-gray-7 fs-14" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 position-relative">
                        <label className="form-label">
                          Mot de passe<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="position-relative" id="passwordInput">
                          <input
                            type={
                              passwordVisibility.password ? "text" : "password"
                            }
                            className="form-control form-control-lg pass-input"
                            placeholder="••••••••"
                          />
                          <span
                            className={`isax toggle-passwords fs-14 ${
                              passwordVisibility.password
                                ? "isax-eye"
                                : "isax-eye-slash"
                            }`}
                            onClick={() => togglePasswordVisibility("password")}
                          ></span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="remember-me d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label ms-2"
                            htmlFor="flexCheckDefault"
                          >
                            Se souvenir de moi
                          </label>
                        </div>
                        <div>
                          <Link to={route.homefive} className="link-2">
                            Mot de passe oublié ?
                          </Link>
                        </div>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-secondary btn-lg"
                          type="submit"
                        >
                          Se connecter <i className="isax isax-arrow-right-3 ms-1" />
                        </button>
                      </div>
                    </form>
                    <div className="d-flex align-items-center justify-content-center or fs-14 mb-3">
                      Ou
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <Link to="#" className="btn btn-light me-2">
                        <ImageWithBasePath
                          src="assets/img/icons/google.svg"
                          alt="Google"
                          className="me-2"
                        />
                        Google
                      </Link>
                      <Link to="#" className="btn btn-light">
                        <ImageWithBasePath
                          src="assets/img/icons/facebook.svg"
                          alt="Facebook"
                          className="me-2"
                        />
                        Facebook
                      </Link>
                    </div>
                    <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
                      Tu n'as pas encore de compte ?
                      <Link to={route.register} className="link-2 ms-1">
                        {" "}
                        Inscris-toi
                      </Link>
                    </div>
                    {/* /Formulaire de connexion */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Wrapper principal */}
    </>
  );
};

export default Login;
