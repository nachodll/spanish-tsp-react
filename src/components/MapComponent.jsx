import {APIProvider, Map} from '@vis.gl/react-google-maps';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export function MapComponent () {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <Map
          style={{width: '500px', height: '500px'}}
          defaultCenter={{lat: 22.54992, lng: 0}}
          defaultZoom={3}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
  )
}