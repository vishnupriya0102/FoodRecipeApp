import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (recipe_name: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [recipe_name, setRecipeName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(recipe_name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe_name}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <button className="bg-gray-200 px-4 " type="submit">Search</button>
    </form>
  );
};

export default SearchBar;