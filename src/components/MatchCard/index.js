// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const newData = {
    id: details.id,
    competingTeam: details.competing_team,
    competingLogo: details.competing_team_logo,
    result: details.result,
    matchStatus: details.match_status,
  }

  const {id, matchStatus, competingLogo, competingTeam, result} = newData

  let change
  if (matchStatus === 'Lost') {
    change = 'change-color'
  }

  return (
    <li key={id} className="list-container">
      <img
        src={competingLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-heading">{competingTeam}</p>
      <p className="competing-result">{result}</p>
      <p className={`match-status ${change}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
