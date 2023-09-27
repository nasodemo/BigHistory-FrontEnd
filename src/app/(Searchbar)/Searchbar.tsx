"use client"

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import styles from './searchBar.module.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showDropbox, setShowDropbox] = useState<boolean>(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropbox(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery === '') {
      router.push('/word');
    }
    if (searchQuery === 'word') {
      router.push('/${word}');
    }
    setSearchQuery('');
  };

  const handleSearchClick = () => {
    setShowDropbox(true);
  };

  return (
    <div className={styles.relativePosition}>
      <form id="searchbar" onSubmit={handleSearch} className={styles.searchBarForm}>
        <button id="submitbutton" type="submit" className={styles.submitButton}>
          #
        </button>
        &nbsp;
        <input
          id="keyword"
          name="keyword"
          type="text"
          placeholder=" Key Word"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={handleSearchClick}
          className={styles.searchInput}
        />
      </form>
      
      {showDropbox && (
        <div ref={dropdownRef} className={styles.dropbox}>
          <Link href='/light' className={styles.linkStyle}>빛</Link>
        </div>
      )}
    </div>
  );
};

export default SearchBar;