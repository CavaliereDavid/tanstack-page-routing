// import { Responsive, WidthProvider } from "react-grid-layout";
// import { useGlobalStore } from "../context/GlobalStore";
// import React, { useEffect } from "react";
// import { Button } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import WidgetComponent from "./WidgetComponent";

// const ResponsiveGridLayout = WidthProvider(Responsive);

// const DashboardContent = () => {
//   const {
//     widgets,
//     addWidget,
//     removeWidget,
//     mode,
//     updateWidgetPosition,
//     updateWidgetSize,
//   } = useGlobalStore();

//   const handleAddWidget = () => {
//     const newWidget = {
//       id: `widget-${Date.now()}`,
//       type: "widget",
//       x: 0,
//       y: 0,
//       width: 4,
//       height: 4,
//     };
//     addWidget(newWidget);
//   };

//   useEffect(() => {
//     // Restore widgets' state from local storage or API when the component mounts
//     const savedWidgets = localStorage.getItem("widgets");
//     if (savedWidgets) {
//       const widgets = JSON.parse(savedWidgets);
//       widgets.forEach((widget: Widget) => addWidget(widget));
//     }
//   }, [addWidget]);

//   return (
//     <div>
//       {mode === "edit" && (
//         <div className="float-buttons">
//           <Button icon={<PlusOutlined />} onClick={handleAddWidget}>
//             Add Widget
//           </Button>
//         </div>
//       )}
//       <ResponsiveGridLayout
//         className="layout"
//         layouts={{ lg: widgets }}
//         onDragStop={(layout) => {
//           layout.forEach(({ i, x, y }) => updateWidgetPosition(i, x, y));
//         }}
//         onResizeStop={(layout) => {
//           layout.forEach(({ i, w, h }) => updateWidgetSize(i, w, h));
//         }}
//         compactType={null}
//       >
//         {widgets.map((widget) => (
//           <div
//             key={widget.id}
//             data-grid={{
//               i: widget.id,
//               x: widget.x,
//               y: widget.y,
//               w: widget.width,
//               h: widget.height,
//             }}
//           >
//             <WidgetComponent
//               widget={widget}
//               onRemove={() => removeWidget(widget.id)}
//             />
//           </div>
//         ))}
//       </ResponsiveGridLayout>
//     </div>
//   );
// };

// export default DashboardContent;
