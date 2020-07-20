import Animated from 'react-native-reanimated';

const { Value, Clock, SpringUtils, block, spring, startClock, set } = Animated;

export function followPointer(value: Animated.Node<number>) {
	const clock = new Clock();
	const config = SpringUtils.makeDefaultConfig();

	interface State {
		position: Animated.Value<0>;
		finished: Animated.Value<0>;
		time: Animated.Value<0>;
		velocity: Animated.Value<0>;
	}

	const state: State = {
		position: new Value(0),
		finished: new Value(0),
		time: new Value(0),
		velocity: new Value(0)
	};

	return block([ startClock(clock), set(config.toValue, value), spring(clock, state, config), state.position ]);
}
