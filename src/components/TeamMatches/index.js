import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

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
      recentMatches: data.recent_matches.map(item => ({
        competingTeam: item.competing_team,
        competingTeamLogo: item.competing_team_logo,
        matchStatus: item.match_status,
        result: item.result,
      })),
    })
  }

  render() {
    const {
      teamBanner,
      bgColor,
      latestMatchDetails,
      isPageLoading,
      recentMatches,
    } = this.state

    return (
      <div className={`totalContainer ${bgColor}`}>
        <img className="teamBanner" src={teamBanner} alt="team banner" />
        {isPageLoading ? (
          <Loader type="Oval" color=" #ffffff" height={50} width={50} />
        ) : (
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        )}
        <div className="matchesAllContainer">
          {recentMatches.map(item => (
            <MatchCard recentMatching={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches
