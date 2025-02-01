import { Image, ImageStyle, StyleProp } from "react-native";
import React from "react";

interface IProps {
  file: string;
  className?: string;
  style?: StyleProp<ImageStyle>;
}

export default function (props: IProps) {
  return <Image source={{ uri: `@/assets/images/${props.file}` }} style={props.style} className={props.className} />;
}
