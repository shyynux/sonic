import { Podcast } from '../../../src/podcast';
import './App.css';
import PodcastComponent from './components/Podcast';

function App() {

  const testPodcast: Podcast = {
    id: '1',
    name: 'anything goes with emma chamberlain',
    artist: 'Emma chamberlain',
    uri: 'spotify:episode:123',
    image: 'https://example.com/podcast-image.jpg',
  }

  return (
    <>
    <div> hi </div>
    <PodcastComponent podcast={testPodcast} />
    </>
  )
}

export default App
