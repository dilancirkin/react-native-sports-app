import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Pressable,
  Text,
  Dimensions,
  ToastAndroid,
  Alert,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  AnimatedRegion,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import database from '@react-native-firebase/database';

import {useNavigation, useRoute} from '@react-navigation/native';
import {getDistanceFromLatLonInKm} from '../../utils/getDistance';
import Button from '../../Components/Button';
import ActivityBar from '../ActivityBar';
import styles from './Map.styles';

const Map = () => {
  const [coord, setCoord] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const interval = useRef(null);
  const navigation = useNavigation();

  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [runningData, setRunningData] = useState({
    isStarted: false,
    newDistance: null,
    velocity: null,
    time: null,
  });

  const writeToDatabase = async () => {
    let data = {
      distance: runningData.newDistance,
      velocity: runningData.velocity,
      time: runningData.time,
    };

    database()
      .ref('/users/' + auth().currentUser.id)
      .set(data)
      .then(() => {
        setRunningData('');
      });
  };

  const getLocation = () => {
    Geolocation.watchPosition(
      position => {
        setCoord({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        setCoord(null);
        ToastAndroid.show(
          "We couldn't fetch your location. Please check your device location service!",
          ToastAndroid.LONG,
        );
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
        },
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true,
      },
    );
  };

  useEffect(() => {
    navigation.addListener('focus', event => {
      interval.current = setInterval(() => getLocation(), 30000);
      getLocation(event);
    });
  }, [coord]);

  async function StartTraining() {
    setRunningData({
      isStarted: true,
      averageVelocity: runningData.distance / runningData.time,
    });
    Geolocation.getCurrentPosition(
      position => {
        setStartPoint({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 3600000,
      },
    );
  }

  let newDistance = 0;
  async function EndTraining() {
    Geolocation.getCurrentPosition(
      position => {
        setEndPoint({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        newDistance = getDistanceFromLatLonInKm(
          startPoint?.latitude,
          startPoint?.longitude,
          endPoint?.latitude,
          endPoint?.longitude,
        );
        setRunningData(newDistance);
      },
      error => console.log(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 3600000,
      },
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        showsUserLocation
        followsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: coord?.latitude || 41.015137,
          longitude: coord?.longitude || 28.97953,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {!!startPoint && !!endPoint && (
          <Polyline coordinates={[startPoint, endPoint]} strokeWidth={5} />
        )}
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          ...styles.mainContainer,
        }}>
        <View style={styles.button_container}>
          <Button theme="activity" label="START" onPress={StartTraining} />
          <Button theme="activity" label="STOP" onPress={EndTraining} />
        </View>

        <ActivityBar />
      </View>
    </SafeAreaView>
  );
};

export default Map;
