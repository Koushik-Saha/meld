import React, {useCallback, useEffect, useState} from "react"
import axios from "axios";

const Devices = () => {

    const [isDevicesLoading, setIsDevicesLoading] = useState(false);
    const [devicesValue, setDevicesValue] = useState(null);

    const fetchDevices = useCallback(
        () => {
            setIsDevicesLoading(true)
            axios.get("http://35.201.2.209:8000/devices")
                .then(res => {
                    setDevicesValue(res.data.devices)
                    setIsDevicesLoading(false)
                })
                .catch(err => {
                    setIsDevicesLoading(false)
                })
        },
        [],
    )

    useEffect(() => {
        fetchDevices()
    }, [fetchDevices]);


    return (
        <>
            {
                !isDevicesLoading &&
                    devicesValue?.map((el, index) => {
                        return (
                            <button style={{marginLeft: '2%', marginTop: "10%"}} type="button" className="btn btn-success center" key={`devices${index}`}>{el.name}</button>
                        )
                    })
            }

        </>
    );
}
export default Devices
