// Sample CZ tweet patterns and characteristics
const czPhrases = [
  "Simple.",
  "Ignore FUD.",
  "Funds are SAFU.",
  "Focus on building.",
  "Market cycles come and go.",
  "Do your own research.",
  "Not financial advice.",
  "Long term thinking.",
  "Crypto is not going away.",
  "We are still here.",
  "Patience pays.",
  "Steady lads.",
  "Keep building.",
  "Stay SAFU.",
  "This is the way."
]

const czEmojis = ["👍", "💪", "🔶", "🚀", "🙏", "💯", "🧠", "⚡", "🌱", "🔥", "👀", "✅", "🛠️", "🌍", "🤝"]

const czHashtags = [
  "#Binance", 
  "#BNB", 
  "#Bitcoin", 
  "#BTC", 
  "#Crypto", 
  "#DYOR", 
  "#SAFU", 
  "#Blockchain",
  "#Web3",
  "#DeFi",
  "#NFT",
  "#Adoption"
]

const czLinks = [
  "binance.com",
  "blog.binance.com",
  "research.binance.com",
  "academy.binance.com"
]

// Topic-specific phrases and hashtags for better context awareness
const topicSpecificContent = {
  'bitcoin': {
    phrases: [
      "Bitcoin is the original crypto.",
      "Bitcoin has a fixed supply of 21 million.",
      "Bitcoin is digital gold.",
      "Bitcoin is a store of value.",
      "Bitcoin is decentralized money."
    ],
    hashtags: ["#Bitcoin", "#BTC", "#Crypto"],
    emojis: ["🔶", "⚡", "🚀", "💰"]
  },
  'binance': {
    phrases: [
      "Binance is the world's largest crypto exchange.",
      "Binance puts users first.",
      "Binance continues to build.",
      "Binance is focused on compliance and security.",
      "Binance is here for the long term."
    ],
    hashtags: ["#Binance", "#BNB", "#BinanceExchange"],
    emojis: ["🔶", "💛", "🌍"]
  },
  'blockchain': {
    phrases: [
      "Blockchain is the foundation of crypto.",
      "Blockchain enables trust without intermediaries.",
      "Blockchain is revolutionary technology.",
      "Blockchain is changing finance.",
      "Blockchain is more than just crypto."
    ],
    hashtags: ["#Blockchain", "#Tech", "#Innovation"],
    emojis: ["🔗", "🧱", "🌐"]
  },
  'defi': {
    phrases: [
      "DeFi is the future of finance.",
      "DeFi removes intermediaries.",
      "DeFi protocols are evolving.",
      "DeFi offers financial freedom.",
      "DeFi is still early."
    ],
    hashtags: ["#DeFi", "#DecentralizedFinance", "#Finance"],
    emojis: ["🏦", "🔄", "💸"]
  },
  'nft': {
    phrases: [
      "NFTs represent digital ownership.",
      "NFTs are more than just art.",
      "NFT technology has many use cases.",
      "NFTs are evolving beyond collectibles.",
      "NFT utility is growing."
    ],
    hashtags: ["#NFT", "#DigitalArt", "#Web3"],
    emojis: ["🖼️", "🎨", "🏆"]
  },
  'regulation': {
    phrases: [
      "Regulation brings clarity.",
      "Good regulation helps adoption.",
      "We welcome clear regulations.",
      "Regulatory compliance is important.",
      "We work with regulators globally."
    ],
    hashtags: ["#Regulation", "#Compliance", "#Crypto"],
    emojis: ["📝", "⚖️", "🏛️"]
  }
}

// Market cycle specific phrases
const marketCyclePhrases = {
  'bullish': [
    "Don't get too excited during bull markets.",
    "Bull markets make everyone look smart.",
    "Fundamentals remain strong.",
    "Long term growth is inevitable.",
    "Remember risk management even in bull markets."
  ],
  'bearish': [
    "Bear markets are for building.",
    "This too shall pass.",
    "Focus on building during the dip.",
    "Winter is the best time to build.",
    "Patience during bear markets pays off."
  ],
  'volatile': [
    "Volatility is normal in crypto.",
    "Don't panic during swings.",
    "Expect volatility, it's part of growth.",
    "Volatility creates opportunity.",
    "Stay calm during market swings."
  ],
  'recovery': [
    "Recovery takes time.",
    "Markets are healing.",
    "Steady progress is happening.",
    "Recovery is never a straight line.",
    "Patience during recovery is key."
  ]
}

// Tone-specific sentence structures
const tonePatterns = {
  'neutral': {
    starters: ["", "", ""],
    middles: ["is evolving.", "is interesting.", "has potential."],
    closers: ["Simple.", "Keep building.", "Stay SAFU."]
  },
  'positive': {
    starters: ["Good progress.", "Exciting times.", "Looking good."],
    middles: ["shows great promise.", "is growing nicely.", "is developing well."],
    closers: ["Onwards and upwards.", "The future is bright.", "Keep building."]
  },
  'cautious': {
    starters: ["Be careful.", "Proceed with caution.", "Take note."],
    middles: ["needs careful consideration.", "requires due diligence.", "has risks and rewards."],
    closers: ["Do your own research.", "Not financial advice.", "Risk management is key."]
  },
  'informative': {
    starters: ["Just to clarify:", "For those who don't know:", "A few facts:"],
    middles: ["works by utilizing blockchain technology.", "aims to solve real-world problems.", "is designed to be decentralized."],
    closers: ["Hope this helps.", "Learn more on our blog.", "Education is important."]
  },
  'motivational': {
    starters: ["Keep going.", "Never give up.", "Stay focused."],
    middles: ["represents the future we're building.", "shows what's possible with dedication.", "is just the beginning."],
    closers: ["We can do this.", "The journey continues.", "Persistence is key."]
  },
  'announcement': {
    starters: ["Excited to share:", "New update:", "Important announcement:"],
    middles: ["is launching soon.", "has been updated.", "is now available."],
    closers: ["Check it out.", "More details coming soon.", "Let us know what you think."]
  }
}

// Helper function to detect topic keywords in input
const detectTopicKeywords = (topic: string): string[] => {
  const keywords = [];
  const lowercaseTopic = topic.toLowerCase();
  
  if (lowercaseTopic.includes('bitcoin') || lowercaseTopic.includes('btc')) {
    keywords.push('bitcoin');
  }
  if (lowercaseTopic.includes('binance') || lowercaseTopic.includes('bnb')) {
    keywords.push('binance');
  }
  if (lowercaseTopic.includes('blockchain') || lowercaseTopic.includes('chain')) {
    keywords.push('blockchain');
  }
  if (lowercaseTopic.includes('defi') || lowercaseTopic.includes('decentralized finance')) {
    keywords.push('defi');
  }
  if (lowercaseTopic.includes('nft') || lowercaseTopic.includes('non-fungible')) {
    keywords.push('nft');
  }
  if (lowercaseTopic.includes('regulation') || lowercaseTopic.includes('compliance') || lowercaseTopic.includes('regulator')) {
    keywords.push('regulation');
  }
  
  return keywords;
}

// Helper function to get random item from array
const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
}

// Basic tweet generator
export const generateCZTweet = (
  topic: string,
  tone: string,
  includeEmojis: boolean,
  includeHashtags: boolean
): string => {
  // Base phrases based on tone
  let phrases: string[] = []
  
  switch (tone) {
    case 'positive':
      phrases = [
        "Good progress.",
        "Keep building.",
        "Stay positive.",
        "This is the way.",
        "We keep building."
      ]
      break
    case 'cautious':
      phrases = [
        "Be careful.",
        "Do your own research.",
        "Not financial advice.",
        "Risk management is key.",
        "Stay SAFU."
      ]
      break
    case 'informative':
      phrases = [
        "Just to clarify:",
        "For those who don't know:",
        "A few facts:",
        "To be clear:",
        "Simple explanation:"
      ]
      break
    case 'motivational':
      phrases = [
        "Keep going.",
        "Never give up.",
        "Persistence is key.",
        "Focus on the long term.",
        "Success comes to those who work for it."
      ]
      break
    case 'announcement':
      phrases = [
        "Excited to share:",
        "New update:",
        "Important announcement:",
        "Just released:",
        "Coming soon:"
      ]
      break
    default: // neutral
      phrases = czPhrases
  }

  // Create topic-related content
  let topicContent = ""
  if (topic) {
    const topicPhrases = [
      `${topic} is evolving fast.`,
      `${topic} shows promise.`,
      `${topic} needs more time.`,
      `${topic} is interesting.`,
      `${topic} has potential.`,
      `We are working on ${topic}.`,
      `${topic} is part of the future.`,
      `Many people ask about ${topic}.`,
      `${topic} is just getting started.`
    ]
    topicContent = topicPhrases[Math.floor(Math.random() * topicPhrases.length)]
  }

  // Construct the tweet
  let tweet = ""
  
  // Add a CZ phrase starter (50% chance)
  if (Math.random() > 0.5) {
    tweet += phrases[Math.floor(Math.random() * phrases.length)] + " "
  }
  
  // Add topic content if provided
  if (topicContent) {
    tweet += topicContent + " "
  } else {
    // If no topic, add another CZ phrase
    tweet += phrases[Math.floor(Math.random() * phrases.length)] + " "
  }
  
  // Add a closing phrase (70% chance)
  if (Math.random() > 0.3) {
    tweet += phrases[Math.floor(Math.random() * phrases.length)]
  }
  
  // Add emojis (30-50% chance per emoji, up to 2)
  if (includeEmojis) {
    const emojiCount = Math.floor(Math.random() * 3) // 0-2 emojis
    for (let i = 0; i < emojiCount; i++) {
      if (Math.random() > 0.5) {
        tweet += " " + czEmojis[Math.floor(Math.random() * czEmojis.length)]
      }
    }
  }
  
  // Add hashtags (20-40% chance)
  if (includeHashtags && Math.random() > 0.6) {
    const hashtag = czHashtags[Math.floor(Math.random() * czHashtags.length)]
    tweet += " " + hashtag
  }
  
  return tweet.trim()
}

// Advanced tweet generator with NLP-like patterns
interface AdvancedTweetOptions {
  topic: string
  tone: string
  includeEmojis: boolean
  includeHashtags: boolean
  tweetLength: string
  mentionBinance: boolean
  includeLinks: boolean
  marketSentiment: string
}

export const generateAdvancedCZTweet = (options: AdvancedTweetOptions): string => {
  const {
    topic,
    tone,
    includeEmojis,
    includeHashtags,
    tweetLength,
    mentionBinance,
    includeLinks,
    marketSentiment
  } = options

  // Determine sentence count based on tweet length
  let sentenceCount = 2 // default medium
  switch (tweetLength) {
    case 'short':
      sentenceCount = Math.floor(Math.random() * 2) + 1; // 1-2 sentences
      break
    case 'medium':
      sentenceCount = Math.floor(Math.random() * 2) + 2; // 2-3 sentences
      break
    case 'long':
      sentenceCount = Math.floor(Math.random() * 2) + 3; // 3-4 sentences
      break
  }

  // Detect topic keywords for better context
  const detectedTopics = detectTopicKeywords(topic);
  
  // Generate sentences based on context
  const sentences: string[] = []
  
  // Add market sentiment context if not neutral
  if (marketSentiment !== 'neutral') {
    if (marketCyclePhrases[marketSentiment as keyof typeof marketCyclePhrases]) {
      const sentimentPhrase = getRandomItem(marketCyclePhrases[marketSentiment as keyof typeof marketCyclePhrases]);
      sentences.push(sentimentPhrase);
    }
  }
  
  // Add topic-related content with enhanced context awareness
  if (topic) {
    // Check if we have specific content for detected topics
    if (detectedTopics.length > 0) {
      // Use topic-specific content
      const detectedTopic = detectedTopics[0]; // Use the first detected topic
      if (topicSpecificContent[detectedTopic as keyof typeof topicSpecificContent]) {
        const topicData = topicSpecificContent[detectedTopic as keyof typeof topicSpecificContent];
        sentences.push(getRandomItem(topicData.phrases));
      } else {
        // Fallback to tone-based generic content
        const tonePattern = tonePatterns[tone as keyof typeof tonePatterns] || tonePatterns.neutral;
        sentences.push(`${topic} ${getRandomItem(tonePattern.middles)}`);
      }
    } else {
      // Use tone-based generic content
      const tonePattern = tonePatterns[tone as keyof typeof tonePatterns] || tonePatterns.neutral;
      sentences.push(`${topic} ${getRandomItem(tonePattern.middles)}`);
    }
  }
  
  // Add Binance mention if requested
  if (mentionBinance) {
    const binancePhrases = [
      "Binance continues to build.",
      "The Binance team is working hard.",
      "Binance puts users first.",
      "Binance is focused on compliance and security."
    ]
    sentences.push(getRandomItem(binancePhrases));
  }
  
  // Add CZ wisdom
  sentences.push(getRandomItem(czPhrases));
  
  // Add tone-specific starter (30% chance)
  const tonePattern = tonePatterns[tone as keyof typeof tonePatterns] || tonePatterns.neutral;
  if (Math.random() > 0.7 && tonePattern.starters.some(s => s !== "")) {
    const starter = getRandomItem(tonePattern.starters.filter(s => s !== ""));
    if (starter) {
      sentences.unshift(starter);
    }
  }
  
  // Add tone-specific closer (40% chance)
  if (Math.random() > 0.6) {
    const closer = getRandomItem(tonePattern.closers);
    sentences.push(closer);
  }
  
  // Shuffle and limit sentences based on desired length
  // But keep any starters at the beginning and closers at the end
  const starters = sentences.filter(s => 
    tonePattern.starters.includes(s) || 
    Object.values(tonePatterns).flatMap(p => p.starters).includes(s)
  );
  
  const closers = sentences.filter(s => 
    tonePattern.closers.includes(s) || 
    Object.values(tonePatterns).flatMap(p => p.closers).includes(s)
  );
  
  const middles = sentences.filter(s => 
    !starters.includes(s) && !closers.includes(s)
  );
  
  // Shuffle only the middle sentences
  const shuffledMiddles = middles.sort(() => 0.5 - Math.random());
  
  // Combine sentences in the right order, respecting the sentence count
  let finalSentences = [];
  
  // Add a starter if available
  if (starters.length > 0) {
    finalSentences.push(starters[0]);
  }
  
  // Add middle sentences
  const middlesToAdd = Math.min(
    shuffledMiddles.length, 
    sentenceCount - (starters.length > 0 ? 1 : 0) - (closers.length > 0 ? 1 : 0)
  );
  
  for (let i = 0; i < middlesToAdd; i++) {
    finalSentences.push(shuffledMiddles[i]);
  }
  
  // Add a closer if available
  if (closers.length > 0) {
    finalSentences.push(closers[0]);
  }
  
  // Ensure we have at least one sentence
  if (finalSentences.length === 0) {
    finalSentences.push(getRandomItem(czPhrases));
  }
  
  // Construct tweet
  let tweet = finalSentences.join(" ");
  
  // Add emojis with more sophisticated placement
  if (includeEmojis) {
    // Use topic-specific emojis if available
    let emojiPool = czEmojis;
    
    if (detectedTopics.length > 0) {
      const detectedTopic = detectedTopics[0];
      if (topicSpecificContent[detectedTopic as keyof typeof topicSpecificContent]) {
        const topicEmojis = topicSpecificContent[detectedTopic as keyof typeof topicSpecificContent].emojis;
        // Mix topic-specific emojis with general ones
        emojiPool = [...topicEmojis, ...czEmojis.slice(0, 5)];
      }
    }
    
    // Add emoji at the end of the tweet
    tweet += " " + getRandomItem(emojiPool);
    
    // Sometimes add another emoji for emphasis
    if (Math.random() > 0.7) {
      tweet += getRandomItem(emojiPool);
    }
  }
  
  // Add hashtags with more context awareness
  if (includeHashtags) {
    // Use topic-specific hashtags if available
    if (detectedTopics.length > 0) {
      const detectedTopic = detectedTopics[0];
      if (topicSpecificContent[detectedTopic as keyof typeof topicSpecificContent]) {
        const topicHashtags = topicSpecificContent[detectedTopic as keyof typeof topicSpecificContent].hashtags;
        // Add 1-2 topic-specific hashtags
        const hashtagCount = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < hashtagCount && i < topicHashtags.length; i++) {
          tweet += " " + topicHashtags[i];
        }
      } else {
        // Add random hashtag
        tweet += " " + getRandomItem(czHashtags);
      }
    } else {
      // Add random hashtag
      tweet += " " + getRandomItem(czHashtags);
      
      // Sometimes add a second hashtag
      if (Math.random() > 0.7) {
        const secondHashtag = getRandomItem(czHashtags.filter(h => !tweet.includes(h)));
        tweet += " " + secondHashtag;
      }
    }
  }
  
  // Add links if requested
  if (includeLinks && Math.random() > 0.5) {
    tweet += " " + getRandomItem(czLinks);
  }
  
  return tweet.trim();
}

// Enhanced NLP tweet generator with more sophisticated patterns
interface EnhancedNLPOptions extends AdvancedTweetOptions {
  personalityStrength?: number; // 1-10, how strongly to emphasize CZ's personality
  currentEvents?: boolean; // Whether to reference current market conditions
  communityFocus?: boolean; // Whether to emphasize community
  technicalLevel?: string; // 'basic', 'intermediate', 'technical'
}

export const generateEnhancedNLPTweet = (options: EnhancedNLPOptions): string => {
  const {
    topic,
    tone,
    includeEmojis,
    includeHashtags,
    tweetLength,
    mentionBinance,
    includeLinks,
    marketSentiment,
    personalityStrength = 7,
    currentEvents = false,
    communityFocus = false,
    technicalLevel = 'intermediate'
  } = options;

  // Generate base tweet using advanced generator
  let tweet = generateAdvancedCZTweet({
    topic,
    tone,
    includeEmojis,
    includeHashtags,
    tweetLength,
    mentionBinance,
    includeLinks,
    marketSentiment
  });
  
  // Enhance with personality traits based on strength (1-10)
  if (personalityStrength > 5) {
    // Higher personality strength means more characteristic CZ phrases
    const personalityPhrases = [
      "Simple.",
      "Funds are SAFU.",
      "4",
      "We keep building.",
      "Steady lads."
    ];
    
    // Add personality phrase if not already present
    const phraseToAdd = getRandomItem(personalityPhrases);
    if (!tweet.includes(phraseToAdd) && Math.random() < (personalityStrength / 10)) {
      // Add at beginning or end based on the phrase
      if (phraseToAdd === "Simple." || phraseToAdd === "4") {
        tweet = phraseToAdd + " " + tweet;
      } else {
        tweet = tweet + " " + phraseToAdd;
      }
    }
  }
  
  // Add current events references if requested
  if (currentEvents) {
    const currentEventPhrases = [
      "Despite market conditions, ",
      "In this market environment, ",
      "Given recent developments, ",
      "With everything happening, "
    ];
    
    // Add at beginning if not already present and if probability hits
    if (Math.random() > 0.6 && !tweet.match(/^(Despite|In this|Given|With everything)/)) {
      tweet = getRandomItem(currentEventPhrases) + tweet.charAt(0).toLowerCase() + tweet.slice(1);
    }
  }
  
  // Add community focus if requested
  if (communityFocus) {
    const communityPhrases = [
      " Our community is amazing.",
      " Thanks to our community.",
      " We build for our users.",
      " Community feedback is important."
    ];
    
    // Add community phrase if probability hits
    if (Math.random() > 0.6) {
      // Find a good breaking point
      const sentenceEndIndex = tweet.search(/[.!?]\s/);
      if (sentenceEndIndex !== -1) {
        // Insert after a sentence
        tweet = tweet.slice(0, sentenceEndIndex + 1) + getRandomItem(communityPhrases) + tweet.slice(sentenceEndIndex + 1);
      } else {
        // Add at the end
        tweet += getRandomItem(communityPhrases);
      }
    }
  }
  
  // Adjust technical level
  if (technicalLevel === 'technical' && detectedTopics.length > 0) {
    const technicalPhrases = {
      'bitcoin': [
        " Hash rate is strong.",
        " Layer 2 solutions are evolving.",
        " The halving will reduce inflation."
      ],
      'blockchain': [
        " Consensus mechanisms matter.",
        " Scalability solutions are improving.",
        " Interoperability is key."
      ],
      'defi': [
        " TVL is a key metric.",
        " Smart contract audits are essential.",
        " Yield optimization continues."
      ]
    };
    
    const detectedTopic = detectedTopics[0];
    if (technicalPhrases[detectedTopic as keyof typeof technicalPhrases] && Math.random() > 0.6) {
      tweet += getRandomItem(technicalPhrases[detectedTopic as keyof typeof technicalPhrases]);
    }
  } else if (technicalLevel === 'basic' && tweet.length > 100) {
    // For basic level, simplify by potentially shortening
    const sentences = tweet.split(/[.!?]\s/);
    if (sentences.length > 2) {
      // Keep only first two sentences
      tweet = sentences.slice(0, 2).join(". ") + ".";
      
      // Add simple closing if needed
      if (Math.random() > 0.5) {
        tweet += " Simple.";
      }
    }
  }
  
  return tweet.trim();
}
