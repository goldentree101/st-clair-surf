import { connectMongo } from './connectMongo';
import { Location } from "../models/Location";

export async function getAllLocationsData(){
    await connectMongo();
    const locations = await Location.find({});
    return locations;
}

export async function getAllLocationIDs() {
    await connectMongo();
    const locations = await Location.find({})
    const IDs = locations.map((location) => ({
        params:{
            id: location.id
        }
    }))
    return IDs;
}

export async function getLocation(id) {
    await connectMongo();
    const location = await Location.findById(id)
    return location;
}
