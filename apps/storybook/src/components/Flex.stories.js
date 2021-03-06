import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { Flex } from '@fast-ai/ui-components';

storiesOf('Flex', module)
	.addDecorator(withKnobs)
	.addParameters({ info: '' })
	.add('in default', () => <Flex />);
