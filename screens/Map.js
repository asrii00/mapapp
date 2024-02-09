import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapWiew from 'react-native-maps';
import * as Location from 'expo-location'

export default function Map (){

   

    const [location, setLocation] = useState({
        latitude: 65.0800, 
        longitude: 25.4800,
        latitudeDelta: 0.0922, 
        longitudeDelta: 0.0421
    })


    const getUserPosition = async () => {

        let status = await Location.requestForegroundPermissionsAsync()

        try {
            if (status.status !== 'granted'){
                console.log(status.status, "geolocation failed")
                return
            }
        const position = await Location.getCurrentPositionAsync( {accuracy: Location.Accuracy.High})
        setLocation({...location, "latitude": position.coords.latitude,"longitude": position.coords.longitude})
        }
        catch (error){
            console.log(error)
        }

    }

    useEffect(() => {

    (async()=>{
        getUserPosition()
    }) ()
    }, [])

    return(
        <MapWiew
        style={styles.map}
        region={location}/>
    )
}

const styles = StyleSheet.create({
    map:{
        height: '100%', 
        width: '100%'
    }
})