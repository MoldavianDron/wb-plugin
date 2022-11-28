import {useEffect} from "react";
import { registerTemplate } from "@whiteboards-io/plugins";
import helloImage from "./hello-img.webp";

export default function PluginRoot() {
  useEffect(() => {
    registerTemplate({
      id: "hello-world",
      fixed: true,
      title: "Hello World Template",
      description: "This is a hello world template",
      illustration: window.location.origin + helloImage,
      content: {
        cards: {
          _index: {
            card1: true,
          },
          _items: {
            card1: {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              text: "Hello world!",
            },
          },
        },
      },
    });
  }, []);
  
  return null;
}