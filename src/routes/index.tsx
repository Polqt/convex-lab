import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "convex/_generated/api";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const { data } = useSuspenseQuery(convexQuery(api.items.list, {}));

	return (
		<div>
			{data.map((item: any) => (
				<div key={item._id.toString()}>
					{item.name} - {item.location} -{" "}
					{item.isClaimed ? "Claimed" : "Unclaimed"}
				</div>
			))}
		</div>
	);
}
