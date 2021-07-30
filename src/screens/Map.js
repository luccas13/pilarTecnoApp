import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Image, Icon, Switch } from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import { hasLocationPermission } from '../services/LocationPermission';
const { height, width } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = (props) => {

    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    const [mapType, setMapType] = useState(false);

    const onRegionChange = region => {
        setRegion(region);
    };

    useEffect( async () => {
        await hasLocationPermission();
        getLocation();
    }, []);

    const getLocation = async () => {
        await Geolocation.getCurrentPosition(
            async posicion => {
                const longitude = posicion.coords.longitude;
                const latitude = posicion.coords.latitude;
                mapRef.animateToRegion(
                    {
                        latitude,
                        longitude,
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta
                    },
                    1000
                );
                setRegion({...region, longitude, latitude});
                console.log('current position... Longitude: ' + `${JSON.stringify(longitude)}` + ' latitude: ' + `${JSON.stringify(latitude)}`);
            },
            (error) => {
                console.log('');
                console.log('');
                console.log('');
                console.log('');
                console.log(error.code, error.message);
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: true,
            }
        );
    }

    const fitCoordinates = async() => {
        console.log('centrando mapa');
        getLocation();
    }
    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <MapView
                ref={map => mapRef = map}
                mapType={mapType ? 'hybrid' : 'standard'}
                style={StyleSheet.absoluteFillObject}
                initialRegion={region}
                onRegionChangeComplete={onRegionChange}
                showsUserLocation={true}
            />
            <View style={{marginTop: 10}}>
                <Switch
                    trackColor={{false: '#666',true: '#bbb'}}
                    thumbColor={{false: '#0f0',true: '#888'}}
                    onValueChange={() => setMapType(!mapType)}
                    value={mapType}
                />
            </View>
            <View style={{
                position: 'absolute', flexDirection: 'row',
                backgroundColor: 'white', borderRadius: 100, width: width / 10, alignSelf: 'flex-start',
                marginLeft: 5, marginTop: 10, alignItems: 'center', justifyContent: 'center'
            }}>
                <Icon
                    name="crosshairs"
                    type="font-awesome"
                    color='#8d2d84'
                    size={width / 10}
                    onPress={() => fitCoordinates()}
                />
            </View>
            <View style={styles.markerFixed}>
                <Image style={styles.marker} source={require('../assets/images/pin.png')}
                />
            </View>
            <SafeAreaView style={styles.footer}>
                <Text style={styles.region}>
                    longitude:{JSON.stringify(region.longitude)}{"\n"}
                    latitude:{JSON.stringify(region.latitude)}</Text>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%'
    },
    map: {
        width,
        height: height / 1.1,
        marginTop: 50,
    },
    marker: {
        height: 48,
        width: 48
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: 30,
        position: 'absolute',
        width: '100%'
    },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20,
        alignSelf: 'center'
    }
});

export default Map;