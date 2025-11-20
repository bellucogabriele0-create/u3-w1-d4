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

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMjRkNDIzZTc0MDAwMTVmN2ZkZTIiLCJpYXQiOjE3NjM2NDg3MjQsImV4cCI6MTc2NDg1ODMyNH0.35HD2YDxOW-7lU-r_QHqaj73F5P7rNW6ELB-llZrPwU"
// }
// })
