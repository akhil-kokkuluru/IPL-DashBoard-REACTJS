import './index.css'

const MatchCard = props => {
  const {recentMatching} = props
  console.log(props)

  const {matchStatus, result, competingTeam, competingTeamLogo} = recentMatching
  let colouring
  if (matchStatus === 'Won') {
    colouring = 'winColor'
  } else {
    colouring = 'losecolor'
  }

  return (
    <div className="matchContianer">
      <img className="imgLogo" src={competingTeamLogo} />
      <h1 className="headingSize">{competingTeam}</h1>
      <p className="paraFont">{result}</p>
      <p className={`paraFont ${colouring}`}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
