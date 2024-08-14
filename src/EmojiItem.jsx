import React from 'react'

function EmojiItem({ emoji }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(emoji.symbol)
        alert(`Copied ${emoji.symbol} to clipboard!`)
    };

    return (
        <div onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
            {emoji.symbol} - {emoji.title}
        </div>
    )
}

export default EmojiItem
