import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="container">
      <h1>Look into my Eyes</h1>
      <h2>Stay Informed, Stay Ahead: Your Personalized Crypto News Companion</h2>

      <div className="info-content">
        <h3 className="para-heading">Introduction</h3>
        <p className="content">
        In the fast-paced world of cryptocurrency, staying informed about the latest news, market trends, and regulatory developments 
        is crucial for investors and enthusiasts alike. To address this need for up-to-date information, a groundbreaking chatbot has 
        emerged, leveraging cutting-edge technologies such as The Graph, IPFS, UMA's synthetic assets, Polygon's notification system, 
        and Worldcoin's analytics tools. This innovative chatbot offers users a personalized news feed, real-time updates, categorized 
        news articles, notifications and alerts, interactive features, bookmarking and sharing options, as well as trend analysis. Let's 
        explore how this chatbot is revolutionizing the way we consume crypto news.</p>

        <h3 className="para-heading">News Aggregation</h3>
        <p className="content">The chatbot utilizes The Graph and IPFS to fetch and aggregate news articles, blog posts, and announcements from popular 
          crypto news sources. By seamlessly collecting data from multiple blockchain networks, including Worldcoin and Polygon, it 
          provides users with a comprehensive view of the crypto market. This aggregation ensures that users no longer need to visit 
          multiple platforms to gather information, saving them time and effort.</p>
          <br/>

        <h3 className="para-heading">Personalized News Feed</h3>
        <p className="content">To cater to individual preferences, the chatbot allows users to personalize their news feed by specifying 
        their preferred cryptocurrencies, projects, or topics of interest. By analyzing user preferences using UMA's synthetic assets, 
        the chatbot delivers tailored news content based on their selected criteria. This personalized approach ensures that users receive 
        the most relevant and engaging news articles.</p>

        <h3 className="para-heading">Real-Time Updates</h3>
        <p className="content">Keeping up with the ever-changing crypto landscape is made easier with the chatbot's real-time updates. 
        Users can receive breaking news, market trends, regulatory developments, and other pertinent information as it happens, eliminating 
        the need for manual searches across various news sources. By staying informed in real-time, users can make better-informed decisions 
        and stay ahead in the fast-paced crypto world.</p>

        <h3 className="para-heading">Categorized News</h3>
        <p className="content">The chatbot categorizes news articles into different topics, such as market analysis, blockchain technology, 
        DeFi, NFTs, and more. This categorization allows users to explore specific categories of interest and receive a curated list of 
        articles related to those topics. By providing organized content, the chatbot enables users to delve deeper into areas that 
        intrigue them the most.</p>

        <h3 className="para-heading">Chatbot Interaction</h3>
        <p className="content">The chatbot's conversational interface offers users a seamless and intuitive experience. Users can ask 
        questions, seek clarifications, or request additional information about specific news articles. The chatbot can provide brief 
        summaries or key takeaways from news articles, allowing users to quickly grasp the main points without reading lengthy articles. 
        This interactive feature enhances user engagement and understanding.</p>

        <h3 className="para-heading">Bookmarking and Sharing</h3>
        <p className="content">To facilitate easy access to valuable information, the chatbot allows users to bookmark or save articles for 
        later reference. Users can also share interesting articles with their friends or social networks directly from the chatbot interface. 
        This feature encourages collaboration and knowledge sharing among users, fostering a vibrant crypto community.</p>

        <h3 className="para-heading">Trend Analysis</h3>
        <p className="content">The chatbot incorporates Worldcoin's analytics tools to provide insights into the popularity and trending topics in the crypto space. 
        It can analyze which cryptocurrencies, projects, or trends are gaining traction and generating significant attention. By offering trend analysis, the chatbot 
        empowers users to make data-driven decisions and stay ahead of the curve.</p>
      </div>
    </div>
  )
}

export default App
