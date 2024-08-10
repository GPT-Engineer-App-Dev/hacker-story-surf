import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryList from './StoryList';
import SearchBar from './SearchBar';
import { fetchTopStories } from '../utils/api';

const HackerNewsApp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: stories, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const filteredStories = stories?.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {error && <p className="text-red-500 text-center mt-4">Error fetching stories. Please try again later.</p>}
      <StoryList stories={filteredStories} isLoading={isLoading} />
    </div>
  );
};

export default HackerNewsApp;