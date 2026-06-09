import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <input
      className={css.input}
      defaultValue=""
      onChange={handleChange}
      type="text"
      placeholder="Search notes"
    />
  );
}
