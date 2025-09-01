function Toggle({ darkMode, toggleTheme }) {
  
  return (
           <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
  );
}

export default Toggle;
