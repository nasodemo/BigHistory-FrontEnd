"use client"

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // 라우터 모듈 경로 수정
import Link from 'next/link';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showDropbox, setShowDropbox] = useState<boolean>(false); // Dropbox 표시 상태 추가
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => { // event 매개변수에 타입을 추가
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
      router.push('/Bighistory');
    }
    if (searchQuery === '빛') {
      router.push('/light');
    }
    if (searchQuery === '언어') {
      router.push('/language');
    }
    if (searchQuery === '승규') {
      router.push('/seunggyu');
    }
    setSearchQuery('');
  };

  const handleSearchClick = () => {
    setShowDropbox(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', paddingLeft: '5%' }}>
        <button
          type="submit"
          style={{
            padding: '9px 13px',
            backgroundColor: '#87ceca',
            color: 'yellow',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
          }}
        >
          #
        </button>
        &nbsp;
        <input
          type="text"
          placeholder=" Key Word"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={handleSearchClick}
          style={{
            backgroundColor: '#E8E8E8',
            padding: '8px',
            border: 'none',
            borderRadius: '35px',
            marginRight: '10px',
            minWidth: '200px',
          }}
        />
      </form>
      
      {showDropbox && (
        <div
          ref={dropdownRef} 
          style={{
            display: 'grid',
            width: '200px',
            minHeight:'60px',
            backgroundColor: '#f5f5f5',
            borderColor:'black',
            lineHeight:'1.5',
            paddingLeft: '25px',
            paddingTop: '10px',
            paddingBottom:'10px',
            borderRadius: '20px',
            position: 'absolute',
            top: '100%', // 검색창 아래에 위치하도록
            left: '17%',
          }}
        >
        
        <Link href='/light' style={{fontSize:'10pt', textDecoration:'none', color:'black'}}>빛</Link>
        <Link href="/language" style={{fontSize:'10pt', textDecoration:'none', color:'black'}}>언어</Link>
        <Link href='/coffee' style={{fontSize:'10pt', textDecoration:'none', color:'black'}}>커피</Link>
        
        </div>
      )}
    </div>
  );
};

export default SearchBar;