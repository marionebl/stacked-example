import * as React from 'react';
import RichText from 'Pattern';

const RichTextDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<RichText content="<p>Ich bin ein Text.</p>" />
		</div>
	);
};

export default RichTextDemo;
