import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import { Dictionary } from 'lodash';
import { StyleSheet } from 'react-native';
import Badge from '_components/badge';
import Card from '_components/cardData';

interface Iprops {
	orders: Dictionary<any>;
	sort: Array<any>;
}

export default class TabsExample extends Component<Iprops> {
	constructor(props: Iprops) {
		super(props);
	}
	render() {
		const { orders, sort } = this.props;
		return (
			<Container>
				<Tabs>
					{sort.map(srt => {
						return (
							<Tab
								key={srt.toString()}
								heading={
									<TabHeading>
										<Text style={styles.text}>{srt}</Text>
										<Badge text={orders[srt].length} />
									</TabHeading>
								}
							>
								{orders[srt].map((order: any) => <Card key={order.toString()} />)}
							</Tab>
						);
					})}
				</Tabs>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	text: {
		fontSize: 12,
	},
});
