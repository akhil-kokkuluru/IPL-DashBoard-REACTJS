import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {detailsTeam} = props
  const {id, name, teamImageUrl} = detailsTeam
  return (
    <Link to=`/team-matches/:{id}`>
      <div className="itemContainer">
        <img className="imageLogo" src={teamImageUrl} />
        <p className="teamName">{name}</p>
      </div>
    </Link>
  )
}
export default TeamCard
