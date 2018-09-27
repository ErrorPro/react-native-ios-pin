import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import styles from './styles';

export default class Circle extends Component {
  value = new Animated.Value(0)

  static propTypes = {
    hasValue: PropTypes.string,
    style: PropTypes.number,
  }

  componentWillReceiveProps(nextProps) {
    const hasValue = nextProps.hasValue ? 1 : 0;

    Animated.timing(this.value, {
      toValue: hasValue,
      duration: hasValue ? 0 : 300,
    }).start();
  }

  render() {
    const { style } = this.props;
    const color = this.value.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', '#FFF'],
    });

    return (
      <Animated.View style={[styles.dot, { backgroundColor: color }, style]} />
    );
  }
}
