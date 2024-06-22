import React from 'react';

export default function NoPage() {
	var link = <a href={'/'}> home</a>;
	return <div>Oops! This page either got eaten or is a family recipe. Go back to {link}.</div>;
}
