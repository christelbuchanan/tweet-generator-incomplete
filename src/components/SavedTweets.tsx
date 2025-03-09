import React from 'react'
import { Trash, Save, Twitter } from 'lucide-react'

interface SavedTweetsProps {
  tweets: string[]
  onDeleteTweet: (index: number) => void
}

const SavedTweets: React.FC<SavedTweetsProps> = ({ tweets, onDeleteTweet }) => {
  if (tweets.length === 0) {
    return null
  }

  const handleShareToTwitter = (tweet: string) => {
    const tweetText = encodeURIComponent(tweet)
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank')
  }

  return (
    <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
      <h2 className="card-title">
        <Save className="mr-2 text-yellow-500" size={20} />
        Saved Tweets
      </h2>
      <div className="space-y-4">
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet-card group">
            <p className="text-gray-800 mb-3">{tweet}</p>
            <div className="flex justify-between">
              <button 
                onClick={() => handleShareToTwitter(tweet)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition"
              >
                <Twitter size={16} className="mr-1" />
                Share
              </button>
              <button 
                onClick={() => onDeleteTweet(index)}
                className="text-gray-400 hover:text-red-500 transition flex items-center"
              >
                <Trash size={16} className="mr-1" />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedTweets
