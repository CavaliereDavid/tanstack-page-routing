// import React from "react";
// import GridLayout from "react-grid-layout";
// import { useWidgetStore } from "../context/WidgetContext";

// const WidgetGrid: React.FC = () => {
//   const { widgets, updateWidget, removeWidget } = useWidgetStore();

//   const handleLayoutChange = (layout: any) => {
//     layout.forEach((item: any) => {
//       updateWidget(item.i, { x: item.x, y: item.y, w: item.w, h: item.h });
//     });
//   };

//   return (
//     <GridLayout
//       className="layout"
//       layout={widgets.map((widget) => ({
//         i: widget.id,
//         x: widget.position.x,
//         y: widget.position.y,
//         w: widget.position.w,
//         h: widget.position.h,
//       }))}
//       cols={12}
//       rowHeight={30}
//       width={1200}
//       onLayoutChange={handleLayoutChange}
//     >
//       {widgets.map((widget) => (
//         <div key={widget.id} data-grid={widget.position}>
//           <div>
//             <button onClick={() => removeWidget(widget.id)}>Remove</button>
//             {/* Render widget content based on type */}
//             {widget.type === "bar" && <div>Bar Chart</div>}
//             {widget.type === "line" && <div>Line Chart</div>}
//             {widget.type === "pie" && <div>Pie Chart</div>}
//           </div>
//         </div>
//       ))}
//     </GridLayout>
//   );
// };

// export default WidgetGrid;
