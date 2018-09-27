import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Animated, TextInput } from 'react-native';

import Circle from './Circle';
import styles from './styles';

export default class PinCode extends Component {
  static propTypes = {
    length: PropTypes.number,
    onEndEnter: PropTypes.func,
    pinCode: PropTypes.string,
  }

  state = {
    letters: [],
    animatedValue: new Animated.Value(0),
  }

  componentDidMount() {
    this.input.focus();
  }

  clearInput = () => {
    this.input.clear();
    this.handleChange('');
  }

  handleChange = (code) => {
    const { pinCode, onEndEnter, length } = this.props;

    this.setState({ letters: code.split('') }, () => {
      if (length === code.length) {
        if (pinCode && pinCode !== code) {
          Animated.timing(
            this.state.animatedValue,
            {
              toValue: 1,
              duration: 500,
            },
          ).start();
        }
        // set a timeout to let the animations end.
        setTimeout(() => onEndEnter(code, this.clearInput), 500);
      }
    });
  }

  render() {
    const { letters, animatedValue } = this.state;
    const { length } = this.props;

    const interpolated = animatedValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [0, -40, 30, -20, 10, 0],
    });
    const animatedStyles = {
      transform: [
        { translateX: interpolated },
      ],
    };

    return (
      <Fragment>
        <Animated.View style={[styles.container, animatedStyles]}>
          {(new Array(length).fill().map((_, i) => i)).map(idx => (
            <Circle
              key={idx}
              hasValue={letters[idx]}
            />
          ))}
        </Animated.View>
        <TextInput
          style={styles.hidden}
          ref={c => this.input = c}
          maxLength={8}
          keyboardType="numeric"
          onBlur={() => this.input.focus()}
          onChangeText={this.handleChange}
        />
      </Fragment>
    );
  }
}
