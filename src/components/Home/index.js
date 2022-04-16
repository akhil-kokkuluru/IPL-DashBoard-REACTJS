import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.renderList()
  }

  renderList = async () => {
    const fetching = await fetch('https://apis.ccbp.in/ipl')
    const teamDetails = await fetching.json()
    const {teams} = teamDetails
    this.setState({
      teamsList: teams.map(item => ({
        name: item.name,
        id: item.id,
        teamImageUrl: item.team_image_url,
      })),
    })
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="totalBG">
        <div className="titleContainer">
          <img
            className="IPLlogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPLDashboard</h1>
        </div>
        <div className="TeamsContainer">
          {teamsList.map(item => (
            <TeamCard detailsTeam={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
