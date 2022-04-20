import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latestMatchesContainer">
      <h1 className="cardTitle">Latest Matches</h1>
      <div className="matchDetailsContainer">
        <div className="logoandDetailsContainer">
          <div className="matchDetails">
            <h1 className="headingFont">{competingTeam}</h1>
            <h1 className="headingFont">{date}</h1>
            <p className="parafont">{venue}</p>
            <p className="parafont">{result}</p>
          </div>
          <img src={competingTeamLogo} className="logoteam" />
        </div>
        <hr className="linehr" />
        <h1 className="titles">First Innings</h1>
        <p className="parafont">{firstInnings}</p>
        <h1 className="titles">Second Innings</h1>
        <p className="parafont">{secondInnings}</p>
        <h1 className="titles">Man Of The Match</h1>
        <p className="parafont">{manOfTheMatch}</p>
        <h1 className="titles">Umpires</h1>
        <p className="parafont">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
