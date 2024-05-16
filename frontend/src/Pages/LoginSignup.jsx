import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Inscription</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Adresse Email" />
          <input type="password" placeholder="Mot de passe" />
        </div>
        <button>Continuer</button>
        <p className="loginsignup-login">
          Déjà un compte ? <span>Connexion</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            En continuant, je suis d'accord avec termes of use privacy policy...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
