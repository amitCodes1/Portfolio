function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6">
      <div className="max-w-7xl mx-auto text-center text-gray-400">

        <h2 className="text-2xl font-bold text-cyan-400 mb-3">
          Amit Kashyap
        </h2>

        <p>
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;