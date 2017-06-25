import React from "react";
import pure from "recompose/pure";
import SvgIcon from "material-ui/SvgIcon";

let Logo = props =>
	<SvgIcon {...props}>
		<path
			d="M96.9 372.3c0 99.45 79.05 178.5 178.5 178.5s178.5-79.05 178.5-178.5v-102h-357v102zM379.95 76.5l53.55-53.55-20.4-20.4-58.65 58.65c-22.95-12.75-51-20.4-79.05-20.4s-56.1 7.65-79.05 17.85L137.7 0l-20.4 22.95 53.55 53.55c-45.9 30.6-73.95 84.15-73.95 142.8v25.5h357v-25.5c0-58.65-28.05-112.2-73.95-142.8zM198.9 193.8c-15.3 0-25.5-10.2-25.5-25.5s10.2-25.5 25.5-25.5 25.5 10.2 25.5 25.5-10.2 25.5-25.5 25.5zm153 0c-15.3 0-25.5-10.2-25.5-25.5s10.2-25.5 25.5-25.5 25.5 10.2 25.5 25.5-10.2 25.5-25.5 25.5z"
			fill="#FFF"
		/>
	</SvgIcon>;
Logo = pure(Logo);
Logo.displayName = "Logo";
Logo.muiName = "SvgIcon";

export default Logo;