import Head from "next/head";

export default function Header() {
	return (
		<Head>
			<title>Todo app</title>
			<link rel="icon" href="/favicon.ico" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
			/>
		</Head>
	);
}
