interface Props {
  searchValue: string;
  onSearchInput: (value: string) => void;
}

const SearchBar = ({ searchValue, onSearchInput }: Props) => {
  return (
    <div id="search-bar" className="d-flex">
      <input
        type="text"
        className="px-2"
        placeholder="Search for books"
        value={searchValue}
        onChange={(e) => onSearchInput(e.target.value)}
      />
      <button className="d-flex align-items-center justify-content-center px-2">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
