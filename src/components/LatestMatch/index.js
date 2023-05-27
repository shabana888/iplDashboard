// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    date,
    venue,
    result,
    umpires,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = matchDetails

  return (
    <div className="ipl-container">
      <div className="match-container">
        <div className="details-container">
          <p className="competing-team-heading">{competingTeam}</p>
          <p className="venue-date">{date}</p>
          <p className="venue-result">{venue}</p>
          <p className="venue-result">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-img"
          />
        </div>
      </div>
      <hr />
      <div className="inning-container">
        <h1 className="innings-heading">First Innings</h1>
        <p className="innings-des">{firstInnings}</p>
        <h1 className="innings-heading">Second Innings</h1>
        <p className="innings-des">{secondInnings}</p>
        <h1 className="innings-heading">Man Of The Match</h1>
        <p className="innings-des">{manOfTheMatch}</p>
        <h1 className="innings-heading">Umpires</h1>
        <p className="innings-des">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
