interface Props {
  selectValue: string;
  onSelect: (select: string) => void;
}

const CategoryFilter = ({ selectValue, onSelect }: Props) => {
  return (
    <select
      className="p-1"
      value={selectValue}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Biography">Biography</option>
      <option value="Business">Business</option>
      <option value="Comedy">Comedy</option>
      <option value="Dystopian">Dystopian</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Fiction">Fiction</option>
      <option value="History">History</option>
      <option value="Literary Fiction">Literary Fiction</option>
      <option value="Memoir">Memoir</option>
      <option value="Mystery">Mystery</option>
      <option value="Romance">Romance</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Self-Help">Self-Help</option>
      <option value="Spirituality">Spirituality</option>
      <option value="Thriller">Thriller</option>
    </select>
  );
};

export default CategoryFilter;
