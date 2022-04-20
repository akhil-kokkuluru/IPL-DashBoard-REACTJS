import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latestMatchesContainer">
      <h1 className="cardTitle">Latest Matches</h1>
      <div className="matchDetailsContainer">
        <div className="logoandDetailsContainer">
          <div className="matchDetails">
            <p className="headingFont">{competingTeam}</p>
            <p className="headingFont">{date}</p>
            <p className="parafont">{venue}</p>
            <p className="parafont">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="logoteam"
            alt={`latest match ${competingTeam}`}
          />
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
