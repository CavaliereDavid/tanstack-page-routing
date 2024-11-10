import { useEffect, useState, useMemo } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import "./ClusterMap.css";
import { getCategories, loadTreeDataset, Tree } from "../types/trees";
import { ClusteredTreeMarkers } from "./ClusteredTreeMarket";

const API_KEY = " " as string;

const ClusterMap = () => {
  const [trees, setTrees] = useState<Tree[]>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    loadTreeDataset().then((data) => setTrees(data));
  }, []);

  const categories = useMemo(() => getCategories(trees), [trees]);
  const filteredTrees = useMemo(() => {
    if (!trees) return null;
    return trees.filter(
      (t) => !selectedCategory || t.category === selectedCategory,
    );
  }, [trees, selectedCategory]);

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={"bf51a910020fa25a"}
        defaultCenter={{ lat: 43.64, lng: -79.41 }}
        defaultZoom={10}
        gestureHandling={"greedy"}
        disableDefaultUI
        style={{ height: "100vh", width: "100%" }}
      >
        {filteredTrees && <ClusteredTreeMarkers trees={filteredTrees} />}
      </Map>
    </APIProvider>
  );
};

export default ClusterMap;
