const Header = ({ lenght }) => {
  return (
    <div className="header">
      <h2>Stays in Finland</h2>
      <h5>
        {lenght} {lenght === 1 ? "stay" : "stays"}
      </h5>
    </div>
  );
};

export default Header;
