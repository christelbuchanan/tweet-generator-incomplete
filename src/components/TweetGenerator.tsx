import React, { useState } from 'react'
import { Send, Sparkles, Copy, Save, Twitter, RefreshCw, Sliders, Zap } from 'lucide-react'
import { generateCZTweet, generateAdvancedCZTweet, generateEnhancedNLPTweet } from '../utils/tweetGenerator'
import AdvancedOptions from './AdvancedOptions'

interface TweetGeneratorProps {
  onSaveTweet: (tweet: string) => void
}

const TweetGenerator: React.FC<TweetGeneratorProps> = ({ onSaveTweet }) => {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('neutral')
  const [includeEmojis, setIncludeEmojis] = useState(true)
  const [includeHashtags, setIncludeHashtags] = useState(true)
  const [generatedTweet, setGeneratedTweet] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)
  const [useAdvancedGeneration, setUseAdvancedGeneration] = useState(false)
  const [useEnhancedNLP, setUseEnhancedNLP] = useState(false)
  
  // Advanced options
  const [tweetLength, setTweetLength] = useState('medium')
  const [mentionBinance, setMentionBinance] = useState(false)
  const [includeLinks, setIncludeLinks] = useState(false)
  const [marketSentiment, setMarketSentiment] = useState('neutral')
  
  // Enhanced NLP options
  const [personalityStrength, setPersonalityStrength] = useState(7)
  const [currentEvents, setCurrentEvents] = useState(false)
  const [communityFocus, setCommunityFocus] = useState(false)
  const [technicalLevel, setTechnicalLevel] = useState('intermediate')

  const handleGenerate = () => {
    setIsGenerating(true)
    
    // Simulate API call delay
    setTimeout(() => {
      let tweet;
      
      if (useEnhancedNLP) {
        tweet = generateEnhancedNLPTweet({
          topic,
          tone,
          includeEmojis,
          includeHashtags,
          tweetLength,
          mentionBinance,
          includeLinks,
          marketSentiment,
          personalityStrength,
          currentEvents,
          communityFocus,
          technicalLevel
        })
      } else if (useAdvancedGeneration) {
        tweet = generateAdvancedCZTweet({
          topic,
          tone,
          includeEmojis,
          includeHashtags,
          tweetLength,
          mentionBinance,
          includeLinks,
          marketSentiment
        })
      } else {
        tweet = generateCZTweet(topic, tone, includeEmojis, includeHashtags)
      }
      
      setGeneratedTweet(tweet)
      setIsGenerating(false)
    }, 800)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedTweet)
  }

  const handleSaveTweet = () => {
    if (generatedTweet) {
      onSaveTweet(generatedTweet)
    }
  }

  const handleShareToTwitter = () => {
    const tweetText = encodeURIComponent(generatedTweet)
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank')
  }

  const handleRegenerateTweet = () => {
    handleGenerate()
  }

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions)
  }

  return (
    <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
      <h2 className="card-title">
        <Sparkles className="mr-2 text-yellow-500" size={20} />
        Generate CZ-Style Tweet
      </h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
            Topic or Keywords
          </label>
          <input
            type="text"
            id="topic"
            className="input-field"
            placeholder="e.g., crypto market, Binance, blockchain"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">
            Tone
          </label>
          <select
            id="tone"
            className="input-field"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="neutral">Neutral</option>
            <option value="positive">Positive</option>
            <option value="cautious">Cautious</option>
            <option value="informative">Informative</option>
            <option value="motivational">Motivational</option>
            <option value="announcement">Announcement</option>
          </select>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emojis"
              className="checkbox-field"
              checked={includeEmojis}
              onChange={(e) => setIncludeEmojis(e.target.checked)}
            />
            <label htmlFor="emojis" className="ml-2 block text-sm text-gray-700">
              Include Emojis
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="hashtags"
              className="checkbox-field"
              checked={includeHashtags}
              onChange={(e) => setIncludeHashtags(e.target.checked)}
            />
            <label htmlFor="hashtags" className="ml-2 block text-sm text-gray-700">
              Include Hashtags
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="advanced"
              className="checkbox-field"
              checked={useAdvancedGeneration}
              onChange={(e) => {
                setUseAdvancedGeneration(e.target.checked)
                if (!e.target.checked) {
                  setUseEnhancedNLP(false)
                }
              }}
            />
            <label htmlFor="advanced" className="ml-2 block text-sm text-gray-700">
              Use Advanced NLP
            </label>
          </div>
          
          {useAdvancedGeneration && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="enhancedNLP"
                className="checkbox-field"
                checked={useEnhancedNLP}
                onChange={(e) => setUseEnhancedNLP(e.target.checked)}
                disabled={!useAdvancedGeneration}
              />
              <label 
                htmlFor="enhancedNLP" 
                className={`ml-2 flex items-center text-sm ${useAdvancedGeneration ? 'text-gray-700' : 'text-gray-400'}`}
              >
                <Zap size={16} className="mr-1 text-yellow-500" />
                Enhanced NLP
              </label>
            </div>
          )}
        </div>
        
        <button
          onClick={toggleAdvancedOptions}
          className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition"
        >
          <Sliders size={16} className="mr-1" />
          {showAdvancedOptions ? 'Hide Advanced Options' : 'Show Advanced Options'}
        </button>
        
        {showAdvancedOptions && (
          <AdvancedOptions
            tweetLength={tweetLength}
            setTweetLength={setTweetLength}
            mentionBinance={mentionBinance}
            setMentionBinance={setMentionBinance}
            includeLinks={includeLinks}
            setIncludeLinks={setIncludeLinks}
            marketSentiment={marketSentiment}
            setMarketSentiment={setMarketSentiment}
            personalityStrength={personalityStrength}
            setPersonalityStrength={useEnhancedNLP ? setPersonalityStrength : undefined}
            currentEvents={currentEvents}
            setCurrentEvents={useEnhancedNLP ? setCurrentEvents : undefined}
            communityFocus={communityFocus}
            setCommunityFocus={useEnhancedNLP ? setCommunityFocus : undefined}
            technicalLevel={technicalLevel}
            setTechnicalLevel={useEnhancedNLP ? setTechnicalLevel : undefined}
            useEnhancedNLP={useEnhancedNLP}
            setUseEnhancedNLP={useAdvancedGeneration ? setUseEnhancedNLP : undefined}
          />
        )}
      </div>
      
      <button
        className="btn-primary w-full"
        onClick={handleGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="mr-2" size={18} />
            Generate Tweet
          </>
        )}
      </button>
      
      {generatedTweet && (
        <div className="mt-6">
          <div className="tweet-card">
            <div className="flex items-start mb-3">
              <img 
                src="https://images.unsplash.com/photo-1622020457014-aed1cc44f25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="CZ Profile" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-bold">CZ Binance</div>
                <div className="text-gray-500">@cz_binance</div>
              </div>
            </div>
            <p className="text-gray-800 mb-4 text-lg">{generatedTweet}</p>
            <div className="flex flex-wrap gap-2">
              <button
                className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-full"
                onClick={handleCopyToClipboard}
              >
                <Copy size={16} className="mr-1" />
                Copy
              </button>
              <button
                className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-full"
                onClick={handleSaveTweet}
              >
                <Save size={16} className="mr-1" />
                Save
              </button>
              <button
                className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full"
                onClick={handleShareToTwitter}
              >
                <Twitter size={16} className="mr-1" />
                Share to Twitter
              </button>
              <button
                className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-full"
                onClick={handleRegenerateTweet}
              >
                <RefreshCw size={16} className="mr-1" />
                Regenerate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TweetGenerator
