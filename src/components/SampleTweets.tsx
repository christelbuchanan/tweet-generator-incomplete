import React from 'react'
import { MessageSquare } from 'lucide-react'

const SampleTweets = () => {
  const sampleTweets = [
    {
      text: "Simple. If you want to be rich, invest in good projects for the long term. No need to trade frequently. 👍",
      date: "May 15, 2023",
      likes: 12453,
      retweets: 3211
    },
    {
      text: "Crypto is not going away. We are still here. #BNB",
      date: "June 22, 2023",
      likes: 8765,
      retweets: 1432
    },
    {
      text: "Focus on building real products that people use. Market cycles come and go. 💪",
      date: "July 3, 2023",
      likes: 9876,
      retweets: 2345
    },
    {
      text: "Ignore FUD, FOMO, and other people's fear. Do your own research. #DYOR",
      date: "August 12, 2023",
      likes: 15678,
      retweets: 4321
    },
    {
      text: "Bitcoin is digital gold. Long term thinking. Our community is amazing. 🔶",
      date: "September 5, 2023",
      likes: 18432,
      retweets: 5678
    },
    {
      text: "Despite market conditions, DeFi is the future of finance. Funds are SAFU. #DeFi",
      date: "October 10, 2023",
      likes: 11234,
      retweets: 3456
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
      <h2 className="card-title">
        <MessageSquare className="mr-2 text-yellow-500" size={20} />
        Sample CZ Tweets
      </h2>
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {sampleTweets.map((tweet, index) => (
          <div key={index} className="tweet-card hover:border-yellow-200">
            <div className="flex items-start mb-2">
              <img 
                src="https://images.unsplash.com/photo-1622020457014-aed1cc44f25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="CZ Profile" 
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <div className="font-bold text-sm">CZ Binance</div>
                <div className="text-xs text-gray-500">@cz_binance</div>
              </div>
            </div>
            <p className="text-gray-800 mb-2">{tweet.text}</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{tweet.date}</span>
              <div className="flex space-x-3">
                <span>{tweet.likes.toLocaleString()} likes</span>
                <span>{tweet.retweets.toLocaleString()} retweets</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SampleTweets
