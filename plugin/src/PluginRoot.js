import {useEffect, useState} from "react";
import moment from 'moment';
import { registerTemplate } from "@whiteboards-io/plugins";
import weatherImage from "./weather.jpeg";

const data = {
  name: "Warszawa",
  description: "Rainy",
  temperature: "25",
  humidity: "67",
  sunrise: 1646306882,
  sunset: 1646347929
}

export default function PluginRoot() {
  
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
            date: true,
            description: true,
            temperature: true,
            humidity: true,
            sunrise: true,
            sunset: true,
          },
          _items: {
            cardLocation: {
              x: 0,
              y: 0,
              width: 1000,
              height: 50,
              color: "#AAAAAA",
              textColor: "#ffffff",
              fontSize: 40,
              textAlign: 1,
              text: `${data.name}`,
            },
            date: {
              x: 0,
              y: 50,
              width: 500,
              height: 50,
              color: "#A3D6FB",
              textColor: "#ffffff",
              fontSize: "30",
              textAlign: 1,
              text: `${moment().format('dddd')}, ${moment().format('LL')}`,
            },
            description: {
              x: 500,
              y: 50,
              width: 500,
              height: 50,
              color: "#A3D6FB",
              textColor: "#ffffff",
              fontSize: "30",
              textAlign: 2,
              text: `${data.description}`,
            },
            temperature: {
              x: 0,
              y: 100,
              width: 500,
              height: 50,
              color: "#A3D6FB",
              textColor: "#ffffff",
              fontSize: "20",
              textAlign: 1,
              text: `Temperature: ${data.temperature} C`,
            },
            humidity: {
              x: 500,
              y: 100,
              width: 500,
              height: 50,
              color: "#A3D6FB",
              textColor: "#ffffff",
              fontSize: "20",
              textAlign: 2,
              text: `Humidity: ${data.humidity} %`,
            },
            sunrise: {
              x: 0,
              y: 150,
              width: 500,
              height: 50,
              color: "#A3D6FB",
              textColor: "#ffffff",
              fontSize: "20",
              textAlign: 1,
              text: `Sunrise: ${new Date(data.sunrise * 1000).toLocaleTimeString('en-IN')}`,
            },
            sunset: {
              x: 500,
              y: 150,
              width: 500,
              height: 50,
              color: "#A3D6FB",
              textColor: "#ffffff",
              fontSize: "20",
              textAlign: 2,
              text: `Sunset: ${new Date(data.sunset * 1000).toLocaleTimeString('en-IN')}`,
            },
          },
        },
      },
    });
  }, []);
  
  return null;
}