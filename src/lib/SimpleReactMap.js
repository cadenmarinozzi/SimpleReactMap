import PropTypes from "prop-types";

const baseUrl = "https://maps.google.com/maps?ie=UTF8&iwloc=&output=embed&t=";

function SimpleReactMap({ center, query = "", zoom = 12, ...rest }) {
	// If center is not provided, use the query string else use the center
	let mapUrl = `${baseUrl}&z=${zoom}&q=${center ? center.join(",") : query}`;
	mapUrl = encodeURI(mapUrl); // Format the url for the request

	return (
		<iframe
			frameBorder={0}
			marginHeight={0}
			marginWidth={0}
			scrolling="no"
			src={mapUrl}
			{...rest}
		/>
	);
}

SimpleReactMap.propTypes = {
	center: PropTypes.arrayOf(PropTypes.number).length(2),
	query: PropTypes.string,
	zoom: PropTypes.number,
};

SimpleReactMap.defaultProps = {
	center: null,
	query: "",
	zoom: 12,
};

export default SimpleReactMap;
