import './App.css'
import {BrowserRouter, Router} from 'react-router-dom'
import Home from './components/Home'

// const a = {
//   team_banner_url: 'https://assets.ccbp.in/frontend/react-js/rcb-team-img.png',
//   latest_match_details: {
//     umpires: 'PR Reiffel, S Ravi',
//     result: 'Sunrisers Hyderabad Won by 6 wickets',
//     man_of_the_match: 'KS Williamson',
//     id: '1237178',
//     date: '2020-11-06',
//     venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
//     competing_team: 'Sunrisers Hyderabad',
//     competing_team_logo:
//       'https://assets.ccbp.in/frontend/react-js/srh-logo-img.png',
//     first_innings: 'Royal Challengers Bangalore',
//     second_innings: 'Sunrisers Hyderabad',
//     match_status: 'Lost',
//   },
//   recent_matches: [
//     {
//       umpires: 'Nitin Menon, PR Reiffel',
//       result: 'Royal Challengers Bangalore Won by NA tie',
//       man_of_the_match: 'AB de Villiers',
//       id: '1216547',
//       date: '2020-09-28',
//       venue: 'At Dubai International Cricket Stadium, Dubai',
//       competing_team: 'Mumbai Indians',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/mi-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Mumbai Indians',
//       match_status: 'Won',
//     },
//     {
//       umpires: 'C Shamshuddin, RK Illingworth',
//       result: 'Chennai Super Kings Won by 8 wickets',
//       man_of_the_match: 'RD Gaikwad',
//       id: '1216544',
//       date: '2020-10-25',
//       venue: 'At Dubai International Cricket Stadium, Dubai',
//       competing_team: 'Chennai Super Kings',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/csk-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Chennai Super Kings',
//       match_status: 'Lost',
//     },
//     {
//       umpires: 'RK Illingworth, K Srinivasan',
//       result: 'Royal Challengers Bangalore Won by 82 runs',
//       man_of_the_match: 'AB de Villiers',
//       id: '1216540',
//       date: '2020-10-12',
//       venue: 'At Sharjah Cricket Stadium, Sharjah',
//       competing_team: 'Kolkata Knight Riders',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Kolkata Knight Riders',
//       match_status: 'Won',
//     },
//     {
//       umpires: 'AY Dandekar, Nitin Menon',
//       result: 'Royal Challengers Bangalore Won by 10 runs',
//       man_of_the_match: 'YS Chahal',
//       id: '1216534',
//       date: '2020-09-21',
//       venue: 'At Dubai International Cricket Stadium, Dubai',
//       competing_team: 'Sunrisers Hyderabad',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/srh-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Sunrisers Hyderabad',
//       match_status: 'Won',
//     },
//     {
//       umpires: 'KN Ananthapadmanabhan, C Shamshuddin',
//       result: 'Kings XI Punjab Won by 8 wickets',
//       man_of_the_match: 'KL Rahul',
//       id: '1216531',
//       date: '2020-10-15',
//       venue: 'At Sharjah Cricket Stadium, Sharjah',
//       competing_team: 'Kings XI Punjab',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Kings XI Punjab',
//       match_status: 'Lost',
//     },
//     {
//       umpires: 'AK Chaudhary, PR Reiffel',
//       result: 'Royal Challengers Bangalore Won by 37 runs',
//       man_of_the_match: 'V Kohli',
//       id: '1216525',
//       date: '2020-10-10',
//       venue: 'At Dubai International Cricket Stadium, Dubai',
//       competing_team: 'Chennai Super Kings',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/csk-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Chennai Super Kings',
//       match_status: 'Won',
//     },
//     {
//       umpires: 'AK Chaudhary, Nitin Menon',
//       result: 'Royal Challengers Bangalore Won by 7 wickets',
//       man_of_the_match: 'AB de Villiers',
//       id: '1216522',
//       date: '2020-10-17',
//       venue: 'At Dubai International Cricket Stadium, Dubai',
//       competing_team: 'Rajasthan Royals',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/rr-logo-img.png',
//       first_innings: 'Rajasthan Royals',
//       second_innings: 'Royal Challengers Bangalore',
//       match_status: 'Won',
//     },
//     {
//       umpires: 'Nitin Menon, YC Barde',
//       result: 'Delhi Capitals Won by 59 runs',
//       man_of_the_match: 'AR Patel',
//       id: '1216519',
//       date: '2020-10-05',
//       venue: 'At Dubai International Cricket Stadium, Dubai',
//       competing_team: 'Delhi Capitals',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/dc-logo-img.png',
//       first_innings: 'Delhi Capitals',
//       second_innings: 'Royal Challengers Bangalore',
//       match_status: 'Lost',
//     },
//     {
//       umpires: 'CB Gaffaney, S Ravi',
//       result: 'Royal Challengers Bangalore Won by 8 wickets',
//       man_of_the_match: 'YS Chahal',
//       id: '1216514',
//       date: '2020-10-03',
//       venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
//       competing_team: 'Rajasthan Royals',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/rr-logo-img.png',
//       first_innings: 'Rajasthan Royals',
//       second_innings: 'Royal Challengers Bangalore',
//       match_status: 'Won',
//     },
//     {
//       umpires: 'AK Chaudhary, PR Reiffel',
//       result: 'Kings XI Punjab Won by 97 runs',
//       man_of_the_match: 'KL Rahul',
//       id: '1216510',
//       date: '2020-09-24',
//       venue: 'At Dubai International Cricket Stadium, Dubai',
//       competing_team: 'Kings XI Punjab',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png',
//       first_innings: 'Kings XI Punjab',
//       second_innings: 'Royal Challengers Bangalore',
//       match_status: 'Lost',
//     },
//     {
//       umpires: 'CB Gaffaney, S Ravi',
//       result: 'Delhi Capitals Won by 6 wickets',
//       man_of_the_match: 'A Nortje',
//       id: '1216505',
//       date: '2020-11-02',
//       venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
//       competing_team: 'Delhi Capitals',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/dc-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Delhi Capitals',
//       match_status: 'Lost',
//     },
//     {
//       umpires: 'KN Ananthapadmanabhan, K Srinivasan',
//       result: 'Sunrisers Hyderabad Won by 5 wickets',
//       man_of_the_match: 'Sandeep Sharma',
//       id: '1216502',
//       date: '2020-10-31',
//       venue: 'At Sharjah Cricket Stadium, Sharjah',
//       competing_team: 'Sunrisers Hyderabad',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/srh-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Sunrisers Hyderabad',
//       match_status: 'Lost',
//     },
//     {
//       umpires: 'UV Gandhe, CB Gaffaney',
//       result: 'Mumbai Indians Won by 5 wickets',
//       man_of_the_match: 'SA Yadav',
//       id: '1216499',
//       date: '2020-10-28',
//       venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
//       competing_team: 'Mumbai Indians',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/mi-logo-img.png',
//       first_innings: 'Royal Challengers Bangalore',
//       second_innings: 'Mumbai Indians',
//       match_status: 'Lost',
//     },
//     {
//       umpires: 'VK Sharma, S Ravi',
//       result: 'Royal Challengers Bangalore Won by 8 wickets',
//       man_of_the_match: 'Mohammed Siraj',
//       id: '1216494',
//       date: '2020-10-21',
//       venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
//       competing_team: 'Kolkata Knight Riders',
//       competing_team_logo:
//         'https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png',
//       first_innings: 'Kolkata Knight Riders',
//       second_innings: 'Royal Challengers Bangalore',
//       match_status: 'Won',
//     },
//   ],
// }
const App = () => (
  <>
    <switch>
      <Router exact path="/" component={Home} />
      <Router exact path="/team-matched/:id" />
    </switch>
  </>
)

export default App
