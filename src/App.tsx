import React, { useState } from 'react'
import { Bitcoin, Send, Sparkles, Copy, Save, Trash } from 'lucide-react'
import TweetGenerator from './components/TweetGenerator'
import Header from './components/Header'
import SampleTweets from './components/SampleTweets'
import SavedTweets from './components/SavedTweets'

function App() {
  const [savedTweets, setSavedTweets] = useState<string[]>([])

  const handleSaveTweet = (tweet: string) => {
    setSavedTweets([...savedTweets, tweet])
  }

  const handleDeleteTweet = (index: number) => {
    const newSavedTweets = [...savedTweets]
    newSavedTweets.splice(index, 1)
    setSavedTweets(newSavedTweets)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <TweetGenerator onSaveTweet={handleSaveTweet} />
          </div>
          
          <div className="space-y-6">
            <SampleTweets />
            <SavedTweets tweets={savedTweets} onDeleteTweet={handleDeleteTweet} />
          </div>
        </div>
      </main>
      
      <footer className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">CZ Tweet Generator - Not affiliated with Binance or Changpeng Zhao</p>
          <p className="text-sm text-yellow-100">Created with ❤️ for the crypto community</p>
        </div>
      </footer>
    </div>
  )
}

export default App
