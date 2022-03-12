import GoogleMapReact from "google-map-react";
import makeStyles from "@mui/styles/makeStyles";
import Person from "@mui/icons-material/Person";

const Marker = () => (
  <div>
    <Person />
  </div>
);

const useStyles = makeStyles({
  mapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: "100vh",
  },
});

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 20,
};

const CustomMaps = () => {
  const classes = useStyles();

  const handleApiLoaded = (map, maps) => {};

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBVr_asaTPp44AvDJ-3KF2nRyzUYvDrASU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        options={(maps) => ({
          fullscreenControl: false,
          //   mapTypeId: maps.MapTypeId.SATELLITE,
        })}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={10.99835602} lng={77.01502627} />
        <Marker lat={10.99835602} lng={78.01502627} />
      </GoogleMapReact>
    </div>
  );
};

export default CustomMaps;
