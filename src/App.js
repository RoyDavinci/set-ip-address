import "./App.css";
import React, { useState, useEffect } from "react";
import SingleDetail from "./components/singleDetail";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
	const [address, setAddress] = useState("");
	const [ip, setIp] = useState("192.212.107.198");
	const [location, setLocation] = useState("Brooklyn NY 1001");
	const [timezone, setTimezone] = useState("UTC -05:00");
	const [isp, setIsp] = useState("Space X Starlink");
	const [longitude, setLongitude] = useState(-0.09);
	const [latitude, setLatitude] = useState(51.505);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let { data } = await axios.get(
			`https://geo.ipify.org/api/v1?apiKey=at_aG9VlAfj8evlm9jsaeBBSRUsXtBOe&ipAddress=${address}`
		);

		setIp(data.ip);
		setIsp(data.isp);
		setTimezone(data.location.timezone);
		setLocation(data.location.region);
		setLatitude(data.location.lat);
		setLongitude(data.location.lng);
	};

	function ChangeMapView({ coords }) {
		const map = useMap();
		map.setView(coords, map.getZoom());
		return null;
	}

	const position = [latitude, longitude];

	useEffect(() => {
		const fetchData = async () => {
			let { data } = await axios.get("https://api.db-ip.com/v2/free/self");
			const user = await axios.get(
				`https://geo.ipify.org/api/v1?apiKey=at_aG9VlAfj8evlm9jsaeBBSRUsXtBOe&ipAddress=${data.ipAddress}`
			);
			setIp(user.data.ip);
			setIsp(user.data.isp);
			setTimezone(user.data.location.timezone);
			setLocation(user.data.location.region);
			setLatitude(user.data.location.lat);
			setLongitude(user.data.location.lng);
		};
		fetchData();
	}, []);

	return (
		<div className='App'>
			<header></header>

			<div className='detailCenter'>
				<h1 className='title'>IP Address Tracker</h1>
				<div className='inputContainer'>
					<form action='' onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Search For Any IP or Domain'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<button>
							<i className='fa-solid fa-chevron-right'></i>
						</button>
					</form>
				</div>
				<div className='detailCenter-Container'>
					<SingleDetail title='IP Address' body={ip}></SingleDetail>
					<SingleDetail title='Location' body={location}></SingleDetail>
					<SingleDetail title='Timezone' body={timezone}></SingleDetail>
					<SingleDetail title='ISP' body={isp}></SingleDetail>
				</div>
			</div>

			<MapContainer
				style={{ height: "100vh", width: "100%" }}
				center={position}
				zoom='30'
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<ChangeMapView coords={position} />
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}

export default App;
