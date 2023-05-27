// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: [], bannerUrl: '', recentMatches: [], isLoading: true}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const camelData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = camelData
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatches = recentMatches
    const {isLoading} = this.state
    this.setState({
      latestMatch: updatedLatestMatchDetails,
      bannerUrl: teamBannerUrl,
      recentMatches: updatedRecentMatches,
      isLoading: !isLoading,
    })
  }

  render() {
    const {latestMatch, bannerUrl, recentMatches, isLoading} = this.state

    return (
      <div className="container">
        {isLoading ? (
          <div className="spin" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-bg">
            <div className="team-match-container">
              <img src={bannerUrl} alt="team banner" className="team-banner" />
            </div>
            <h1 className="latest-heading">Latest Matches</h1>
            <LatestMatch matchDetails={latestMatch} key={latestMatch.id} />
            <div>
              <ul className="match-list-container">
                {recentMatches.map(eachMatch => (
                  <MatchCard details={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
