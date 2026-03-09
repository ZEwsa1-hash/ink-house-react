import { useState } from 'react'
import CardArt from './components/CardArt'
import { france, germany, england } from './data/cardsData'

const tabs = [
  { id: 'france', label: 'Франция', cards: france },
  { id: 'germany', label: 'Германия', cards: germany },
  { id: 'england', label: 'Англия', cards: england },
]

function App() {
  const [activeTab, setActiveTab] = useState('france')

  const currentCards = tabs.find(tab => tab.id === activeTab).cards

  return (
    <div className="section2">
      <div className="section2__nav">
        <h1 className="section2__heading">Репродукция</h1>
        <div className="section2__countries">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`section2__country-btn ${activeTab === tab.id ? 'section2__country-btn--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="section2__products">
        {currentCards.map((card, i) => (
          <CardArt
            key={i}
            src={card.src}
            author={card.author}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
    </div>
  )
}

export default App
