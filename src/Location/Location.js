export class Location extends Component {
  constructor() {
    super();
    this.state = {
      longitude: 0,
      latitude: 0
    };
  }

  componentDidMount = () => {
    this.getMyLocation();
  }

  getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((info) => {
      this.setState({
        longitude: info.coords.longitude,
        latitude: info.coords.latitude
      });
    });
  }

  location = (e) => {
    const { name, value } = e.target;
    if (value.length === 0) {
      this.getMyLocation();
    }

    if (name === 'longitude') {
      if (value && (value >= -180) && (value <= 180)) {
        this.setState({ longitude: value });
      }
    }

    if (e.target.name === 'latitude') {
      if (value && (value >= -90) && (value <= 90)) {
        this.setState({ latitude: value });
      }
    }
  }

  render() {
    const { longitude, latitude } = this.state;
    const src = `http://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
      &zoom=12&size=600x450&sensor=false&language=ru&markers=color:green|label:S|${latitude},${longitude}`;
    return (
      <div>
        <div>
          <input
            type="text"
            name="longitude"
            value={longitude}
            onChange={this.location}
          />
          <input
            type="text"
            name="latitude"
            value={latitude}
            onChange={this.location}
          />
        </div>
        <br />
        <img src={src} alt="location-img" />
      </div>
    );
  }
}
