import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

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
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <Link to="/">
        <div className="totalBG">
          <div className="titleContainer">
            <img
              className="IPLlogo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="TeamsContainer">
              {teamsList.map(item => (
                <TeamCard key={item.id} detailsTeam={item} />
              ))}
            </ul>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
