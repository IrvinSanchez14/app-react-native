// @flow

import variable from './../variables/platform';

export default (variables /*: * */ = variable) => {
	const platform = variables.platform;

	const tabHeadingTheme = {
		flexDirection: 'row',
		backgroundColor: variables.tabDefaultBg,
		borderBottomWidth: 0.5,
		borderColor: '#707070',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		'.scrollable': {
			paddingHorizontal: 20,
			flex: platform === 'android' ? 0 : 1,
			minWidth: platform === 'android' ? undefined : 60,
		},
		'NativeBase.Text': {
			color: variables.topTabBarTextColor,
			marginHorizontal: 7,
		},
		'NativeBase.Badge': {
			backgroundColor: '#548B6F',
			'NativeBase.Text': {
				color: '#FFF',
			},
		},
		'NativeBase.Icon': {
			color: variables.topTabBarTextColor,
			fontSize: platform === 'ios' ? 26 : undefined,
		},
		'.active': {
			'NativeBase.Badge': {
				backgroundColor: '#7CAC53',
			},
			'NativeBase.Text': {
				color: variables.topTabBarActiveTextColor,
				fontWeight: '600',
			},
			'NativeBase.Icon': {
				color: variables.topTabBarActiveTextColor,
			},
		},
	};

	return tabHeadingTheme;
};
