import React from "react";
import { StyleSheet , Animated, TouchableOpacity, Text} from "react-native";

function SwipeComponent({dragX, onSwipeComplete}){
    const opacity = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
      });


    return (
        <Animated.View style={[styles.rightAction, { opacity}, {backgroundColor: 'green'}]}>
            <TouchableOpacity onPress={onSwipeComplete} style={styles.actionButton}>
                <Text style={styles.actionText}>Complete</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

export default SwipeComponent;

const styles = StyleSheet.create({
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    // completed: {
    //     color: 'green',
    //     fontWeight: 'bold',
    //   },
    rightAction: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 20,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 20,
      height: 100,
    },
})