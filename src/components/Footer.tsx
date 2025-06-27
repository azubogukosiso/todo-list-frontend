const Footer = () => {
  return (
    <footer className="p-10 text-center">
      <span className="font-bold">TO DO</span> or{" "}
      <span className="font-bold">NOT TO DO</span> &copy; Copyright{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
