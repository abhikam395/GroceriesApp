import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function onClick(name) {
  ToastAndroid.show(name + ' Clicked', ToastAndroid.SHORT);
}

export default function AccountItemComponent({title, icon}) {
  return (
    <Fragment>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => onClick(title)}>
        <MaterialIcons name={icon} style={styles.icon} />
        <Text style={styles.label}>{title}</Text>
        {/* <MaterialIcons name="keyboard-arrow-right" style={styles.navIcon} /> */}
      </TouchableOpacity>
      <View style={styles.line} />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 17,
  },
  icon: {
    fontSize: 22,
    color: 'grey',
  },
  navIcon: {
    fontSize: 28,
    marginLeft: 'auto',
    color: 'grey',
  },
  label: {
    marginLeft: 16,
    fontSize: 13,
    fontWeight: '700',
    color: 'grey',
  },
});
