import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatchDetails: {},
    recentMatches: [],
    isPageLoading: true,
    bgColor: '',
  }

  componentDidMount() {
    this.fetchRequest()
  }

  fetchRequest = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const urlFetch = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await urlFetch.json()

    this.setState({
      teamBanner: data.team_banner_url,
      bgColor: `${id}`,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      isPageLoading: false,
    })
  }

  render() {
    const {teamBanner, bgColor, latestMatchDetails} = this.state
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
      <div className={`totalContainer ${bgColor}`}>
        <img className="teamBanner" src={teamBanner} alt="namro" />
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
      </div>
    )
  }
}

export default TeamMatches
