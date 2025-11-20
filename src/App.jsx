import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App

// fetch(
//         "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
//         {
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMWQ3NjIzZTc0MDAwMTVmN2ZkZGMiLCJpYXQiOjE3NjM2NDY4MzgsImV4cCI6MTc2NDg1NjQzOH0.YNqfLNeVoAJ1hVHqNR-I99DKFtqGCcO67AqBhii-d-M",
//           },
//         }
//       );