import { ComProvMunDropdowns } from './components/ComProvMunDropdowns'
import { MapComponent } from './components/MapComponent'

export default function App () {

  return(
    <>
      <h1>Spanish TSP project</h1>
      <ComProvMunDropdowns />
      <MapComponent />
      <style>{`
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </>
)}