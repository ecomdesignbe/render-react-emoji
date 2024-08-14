import React, { useState } from 'react'
import emojis from './emojis.json'
import EmojiList from './EmojiList'
import SearchBar from './SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEmojis = emojis.filter(emoji =>
    emoji.keywords.includes(searchTerm)
  )

  return (
    <div>
      <h1>
        <span className="emoji">😎</span> EmojiSearch <span className="emoji">😎</span>
      </h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <p>Click on an emoji to copy it</p>
      <EmojiList emojis={filteredEmojis} />
    </div>
  );
}

export default App
