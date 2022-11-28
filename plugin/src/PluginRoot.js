import {useEffect, useState} from "react";
import { registerTemplate } from "@whiteboards-io/plugins";
import weatherImage from "./weather-mops.jpeg";

export default function PluginRoot() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
        });
    }
    fetchData();
  }, [lat,long]);
  
  useEffect(() => {
    registerTemplate({
      id: "Weather",
      fixed: true,
      title: "Weather template",
      description: "This is a weather template",
      illustration: window.location.origin + weatherImage,
      content: {
        cards: {
          _index: {
            cardLocation: true,
          },
          _items: {
            cardLocation: {
              x: 0,
              y: 0,
              width: 250,
              height: 40,
              text: `${typeof data.main != 'undefined' ? `${data.name}` : "Waiting for response"}`,
            },
          },
        },
      },
    });
  }, []);
  
  return null;
}