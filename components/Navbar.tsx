import { format } from "date-fns";

const convertDate = (dateFormat: string) => {
	return format(new Date(), dateFormat);
};

export default function Navbar() {
	return (
		<div className="h-32 bg-gradient-to-l from-blue-400  to-blue-700 px-4 ">
			<div className="flex items-center h-full ">
				<div className="text-2xl text-white">
					<span className="font-bold">{convertDate("eeee")}, </span>
					<span className="font-extralight">{convertDate("d MMM")}</span>
				</div>
			</div>
		</div>
	);
}
