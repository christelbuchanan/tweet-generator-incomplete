import React from 'react'
import { Info } from 'lucide-react'

interface AdvancedOptionsProps {
  tweetLength: string
  setTweetLength: (length: string) => void
  mentionBinance: boolean
  setMentionBinance: (mention: boolean) => void
  includeLinks: boolean
  setIncludeLinks: (include: boolean) => void
  marketSentiment: string
  setMarketSentiment: (sentiment: string) => void
  personalityStrength?: number
  setPersonalityStrength?: (strength: number) => void
  currentEvents?: boolean
  setCurrentEvents?: (include: boolean) => void
  communityFocus?: boolean
  setCommunityFocus?: (focus: boolean) => void
  technicalLevel?: string
  setTechnicalLevel?: (level: string) => void
  useEnhancedNLP?: boolean
  setUseEnhancedNLP?: (use: boolean) => void
}

const AdvancedOptions: React.FC<AdvancedOptionsProps> = ({
  tweetLength,
  setTweetLength,
  mentionBinance,
  setMentionBinance,
  includeLinks,
  setIncludeLinks,
  marketSentiment,
  setMarketSentiment,
  personalityStrength = 7,
  setPersonalityStrength,
  currentEvents = false,
  setCurrentEvents,
  communityFocus = false,
  setCommunityFocus,
  technicalLevel = 'intermediate',
  setTechnicalLevel,
  useEnhancedNLP = false,
  setUseEnhancedNLP
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-700 mb-3">Advanced Options</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="tweetLength" className="block text-sm font-medium text-gray-700 mb-1">
            Tweet Length
          </label>
          <select
            id="tweetLength"
            className="input-field"
            value={tweetLength}
            onChange={(e) => setTweetLength(e.target.value)}
          >
            <option value="short">Short (1-2 sentences)</option>
            <option value="medium">Medium (2-3 sentences)</option>
            <option value="long">Long (3-4 sentences)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="marketSentiment" className="block text-sm font-medium text-gray-700 mb-1">
            Market Sentiment Context
          </label>
          <select
            id="marketSentiment"
            className="input-field"
            value={marketSentiment}
            onChange={(e) => setMarketSentiment(e.target.value)}
          >
            <option value="neutral">Neutral Market</option>
            <option value="bullish">Bullish Market</option>
            <option value="bearish">Bearish Market</option>
            <option value="volatile">Volatile Market</option>
            <option value="recovery">Recovery Market</option>
          </select>
        </div>
        
        {setUseEnhancedNLP && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="enhancedNLP"
              className="checkbox-field"
              checked={useEnhancedNLP}
              onChange={(e) => setUseEnhancedNLP(e.target.checked)}
            />
            <label htmlFor="enhancedNLP" className="ml-2 block text-sm text-gray-700 flex items-center">
              Use Enhanced NLP
              <div className="group relative ml-1">
                <Info size={14} className="text-gray-400" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  Enables more sophisticated language patterns and context awareness
                </div>
              </div>
            </label>
          </div>
        )}
        
        {useEnhancedNLP && setPersonalityStrength && (
          <div>
            <label htmlFor="personalityStrength" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              CZ Personality Strength
              <div className="group relative ml-1">
                <Info size={14} className="text-gray-400" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  Higher values create more characteristic CZ-style tweets
                </div>
              </div>
            </label>
            <div className="flex items-center">
              <input
                type="range"
                id="personalityStrength"
                min="1"
                max="10"
                value={personalityStrength}
                onChange={(e) => setPersonalityStrength(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{personalityStrength}</span>
            </div>
          </div>
        )}
        
        {useEnhancedNLP && setTechnicalLevel && (
          <div>
            <label htmlFor="technicalLevel" className="block text-sm font-medium text-gray-700 mb-1">
              Technical Level
            </label>
            <select
              id="technicalLevel"
              className="input-field"
              value={technicalLevel}
              onChange={(e) => setTechnicalLevel(e.target.value)}
            >
              <option value="basic">Basic (Simplified)</option>
              <option value="intermediate">Intermediate (Standard)</option>
              <option value="technical">Technical (Detailed)</option>
            </select>
          </div>
        )}
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="mentionBinance"
            className="checkbox-field"
            checked={mentionBinance}
            onChange={(e) => setMentionBinance(e.target.checked)}
          />
          <label htmlFor="mentionBinance" className="ml-2 block text-sm text-gray-700">
            Mention Binance
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeLinks"
            className="checkbox-field"
            checked={includeLinks}
            onChange={(e) => setIncludeLinks(e.target.checked)}
          />
          <label htmlFor="includeLinks" className="ml-2 block text-sm text-gray-700">
            Include Links (when relevant)
          </label>
        </div>
        
        {useEnhancedNLP && setCurrentEvents && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="currentEvents"
              className="checkbox-field"
              checked={currentEvents}
              onChange={(e) => setCurrentEvents(e.target.checked)}
            />
            <label htmlFor="currentEvents" className="ml-2 block text-sm text-gray-700">
              Reference Current Events
            </label>
          </div>
        )}
        
        {useEnhancedNLP && setCommunityFocus && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="communityFocus"
              className="checkbox-field"
              checked={communityFocus}
              onChange={(e) => setCommunityFocus(e.target.checked)}
            />
            <label htmlFor="communityFocus" className="ml-2 block text-sm text-gray-700">
              Community Focus
            </label>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdvancedOptions
