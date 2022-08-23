import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";

type LocationMapProps = { center: google.maps.LatLngLiteral };

let id = 0;

export const LocationMap = ({ center }: LocationMapProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const map = new google.maps.Map(ref.current, {
      center,
      zoom: 18,
    });
    const marker = new google.maps.Marker({ position: center, map });
  }, [center]);

  return <div id={`map-${++id}`} ref={ref} className="h-80 w-full" />;
};
