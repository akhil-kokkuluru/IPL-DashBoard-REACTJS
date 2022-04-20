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
    <li className="matchContianer">
      <img
        className="imgLogo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="headingSize">{competingTeam}</p>
      <p className="paraFont">{result}</p>
      <p className={`paraFont ${colouring}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
