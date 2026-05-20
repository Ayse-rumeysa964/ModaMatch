function SearchSection() {
  return (
    <section className="search-section">
      <h2>Discover Your Style</h2>

      <p>
        Search boutiques, tailors and AI-powered
        fashion recommendations.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search fashion styles..."
        />

        <button>Search</button>
      </div>
    </section>
  );
}

export default SearchSection;