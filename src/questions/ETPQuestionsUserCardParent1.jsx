import React from 'react'
import ETPQuestionsUserCard1 from './ETPQuestionsUserCard1'

function ETPQuestionsUserCardParent1() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Cards</h1>
      <ETPQuestionsUserCard1 name="John Doe" age={28} location="New York, USA" />
      <ETPQuestionsUserCard1 name="Jane Smith" age={34} location="London, UK" />
      <ETPQuestionsUserCard1 name="Carlos Gomez" age={30} location="Madrid, Spain" />
    </div>
  )
}

export default ETPQuestionsUserCardParent1
