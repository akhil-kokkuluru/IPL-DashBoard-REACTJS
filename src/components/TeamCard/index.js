import './index.css'

const TeamCard = props => {
  const {detailsTeam} = props
  const {id, name, teamImageUrl} = detailsTeam
  return (
    <div className="itemContainer">
      <img className="imageLogo" src={teamImageUrl} />
      <p className="teamName">{name}</p>
    </div>
  )
}
export default TeamCard
