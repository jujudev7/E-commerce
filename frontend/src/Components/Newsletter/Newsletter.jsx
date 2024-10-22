import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers ON Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          autoComplete="email"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
