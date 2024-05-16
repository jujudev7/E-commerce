import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Récupère des Offres Exclusives par Email</h1>
      <p>Abonne-toi à notre newsletter</p>
      <div>
        <input type="email" placeholder="Ton adresse Email" />
        <button>Inscription</button>
      </div>
    </div>
  );
};

export default Newsletter;
