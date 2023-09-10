import React, {useState, useEffect, useRef} from 'react';
import "./Map.css"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import Indicator from '../Common/Indicator/Indicator';

function Map(props) {
  const mapRef = useRef(null);
  const [position, setPosition] = useState([23.795849,75.030279]);
  const coords = [[23.795849,75.030279], [24.068307,75.072687], [23.126331,77.541391]];
  let marker = [];

  const markerJson = [
    {
      cords: [23.795849,75.030279],
      image: "me.jpg",
      heading: "Home Town",
      label: "Khodana, Mandsaur 458669 (M.P.)",
      link: 'www.linkedin.com/ramdhangar',
      linkLabel: "Ram Dhangar"
    },
    {
      cords: [24.068307,75.072687],
      image: "school.png",
      heading: "Schooling From",
      label: "LBS School of Excellence Mandsaur",
      link: '',
      linkLabel: ""
    },
    {
      cords: [23.126331,77.541391],
      image: "collage.jpeg",
      heading: "Graduate From",
      label: "Vaishnavi Institute of Technology and Science Bhopal",
      link: 'http://www.vitsbhopal.com',
      linkLabel: "Vaishnavi Group"
    },
    {
      cords: [18.546187,73.816953],
      image: "cumulus.webp",
      heading: "Present",
      label: "Currentaly working as a Software developer at Cumulus systems pvt ltd (A hitachi group company)",
      link: 'http://www.cumulus-systems.com',
      linkLabel: "Cumulus systems"
    }
  ]


  const CustomMarker = ({data, key}) => {
    const markerRer = useRef(null)
    useEffect(() => {
      setTimeout(() => {
        marker.push(markerRer)
        markerRer.current.openPopup();
      }, 1000);
    }, [])
    return (
      <Marker 
          position={data.cords}
          ref={markerRer}
          key={key}
          >
            <Popup>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <img
                style={{width: "100px", height: "80px"}}
                  src={require(`../../assets/map-assets/${data.image}`)}
                  alt=""
                  className="bio-image"
                />
                <div style={{margin: '5px'}}>
                  <h4 style={{margin: '2px', textDecoration:'underline'}}>{data.heading}</h4>
                  <div>
                    {data.label}
                  </div>
                  <a href={data.link} style={{fontSize: '9px'}}>{data.linkLabel}</a> 
                </div>
              </div>
            </Popup>
          </Marker>
    )
  }
  
  const FlyToButton = () => {
    const map = useMap();
    useEffect(() => {
      let zoom = 0;
      const interval = setInterval(() => {
        if (zoom == 0) {
          marker[markerJson.length-1].current.closePopup()
        } else {
          marker[zoom-1].current.closePopup()
        }
        handleFlyTo(zoom);
        marker[zoom].current.openPopup()
          zoom++;
        if (zoom >= markerJson.length) zoom = 0;
      }, 9000);

      return () => {
        clearInterval(interval);
      }
    }, [])
    const handleFlyTo = (ind) => {
      map.flyTo(markerJson[ind].cords, 15, {
        animate: true,
        duration: 5,
      });
    };
    return (
      <button onClick={handleFlyTo}>Fly to Destination</button>
    );
  };

  return (
    <div className='map-div'>
      <div className='map-indicator'> <Indicator lable='Map View'/></div>
      <div className='map-view-container'>
      <MapContainer
        center={coords[0]}
        zoom={5}
        style={{ height: '500px', width: '100%' }}
        whenCreated={(map) => (mapRef.current = map)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          <FlyToButton />
        {markerJson.map((marker, i) => {
          return (
            <CustomMarker data={marker} key={i}/>
          )
        })}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;