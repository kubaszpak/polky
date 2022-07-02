import React from "react";
import classnames from "classnames";

interface BoxProps {
	className?: string;
	children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = (props) => {
	return (
		<div className={classnames("border", props.className)}>
			{props.children}
		</div>
	);
};

export default Box;
