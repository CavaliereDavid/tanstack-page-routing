import React, { useCallback, useState } from "react";
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  AdvancedMarkerProps,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
  CollisionBehavior,
} from "@vis.gl/react-google-maps";
import { getData } from "./data";
import "./MapComponenet.css";
export type AnchorPointName = keyof typeof AdvancedMarkerAnchorPoint;

const data = getData()
  .sort((a, b) => b.position.lat - a.position.lat)
  .map((dataItem, index) => ({ ...dataItem, zIndex: index }));

const Z_INDEX_SELECTED = data.length;
const Z_INDEX_HOVER = data.length + 1;

const API_KEY = ""; // Replace with your actual API key

const MapComponent = () => {
  const [markers] = useState(data);

  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [anchorPoint] = useState("BOTTOM" as AnchorPointName);
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const onMouseEnter = useCallback((id: string | null) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);
  const onMarkerClick = useCallback(
    (id: string | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
      setSelectedId(id);

      if (marker) {
        setSelectedMarker(marker);
      }

      if (id !== selectedId) {
        setInfoWindowShown(true);
      } else {
        setInfoWindowShown((isShown) => !isShown);
      }
    },
    [selectedId],
  );

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfowindowCloseClick = useCallback(
    () => setInfoWindowShown(false),
    [],
  );

  return (
    <APIProvider apiKey={API_KEY} libraries={["marker"]}>
      <Map
        mapId={"bf51a910020fa25a"}
        defaultZoom={6}
        defaultCenter={{ lat: 41.8719, lng: 12.5674 }} // Centered over Italy
        gestureHandling={"greedy"}
        onClick={onMapClick}
        clickableIcons={false}
        disableDefaultUI
        style={{ height: "100vh", width: "100%" }} // Ensure the map container has height and width
      >
        {markers.map(({ id, zIndex: zIndexDefault, position, type }) => {
          let zIndex = zIndexDefault;

          if (hoverId === id) {
            zIndex = Z_INDEX_HOVER;
          }

          if (selectedId === id) {
            zIndex = Z_INDEX_SELECTED;
          }

          if (type === "pin") {
            return (
              <AdvancedMarkerWithRef
                onMarkerClick={(
                  marker: google.maps.marker.AdvancedMarkerElement,
                ) => onMarkerClick(id, marker)}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
                key={id}
                zIndex={zIndex}
                className="custom-marker"
                style={{
                  transform: `scale(${[hoverId, selectedId].includes(id) ? 1.3 : 1})`,
                  transformOrigin:
                    AdvancedMarkerAnchorPoint["BOTTOM"].join(" "),
                }}
                position={position}
              >
                <Pin
                  background={selectedId === id ? "#22ccff" : null}
                  borderColor={selectedId === id ? "#1e89a1" : null}
                  glyphColor={selectedId === id ? "#0f677a" : null}
                />
              </AdvancedMarkerWithRef>
            );
          }

          if (type === "html") {
            return (
              <React.Fragment key={id}>
                <AdvancedMarkerWithRef
                  position={position}
                  zIndex={zIndex}
                  anchorPoint={AdvancedMarkerAnchorPoint[anchorPoint]}
                  className="custom-marker"
                  style={{
                    transform: `scale(${[hoverId, selectedId].includes(id) ? 1.3 : 1})`,
                    transformOrigin:
                      AdvancedMarkerAnchorPoint[anchorPoint].join(" "),
                  }}
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement,
                  ) => onMarkerClick(id, marker)}
                  onMouseEnter={() => onMouseEnter(id)}
                  collisionBehavior={
                    CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY
                  }
                  onMouseLeave={onMouseLeave}
                >
                  <div
                    className={`custom-html-content ${selectedId === id ? "selected" : ""}`}
                  ></div>
                </AdvancedMarkerWithRef>

                {/* anchor point visualization marker */}
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement,
                  ) => onMarkerClick(id, marker)}
                  zIndex={zIndex + 1}
                  onMouseEnter={() => onMouseEnter(id)}
                  onMouseLeave={onMouseLeave}
                  anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
                  position={position}
                >
                  <div className="visualization-marker"></div>
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }
        })}

        {infoWindowShown && selectedMarker && (
          <InfoWindow
            anchor={selectedMarker}
            pixelOffset={[0, -2]}
            onCloseClick={handleInfowindowCloseClick}
          >
            <h2>Marker {selectedId}</h2>
            <p>Some arbitrary html to be rendered into the InfoWindow.</p>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export const AdvancedMarkerWithRef = (
  props: AdvancedMarkerProps & {
    onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
  },
) => {
  const { children, onMarkerClick, ...advancedMarkerProps } = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker);
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}
    >
      {children}
    </AdvancedMarker>
  );
};

export default MapComponent;
