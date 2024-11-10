// import create from "zustand";

// interface Widget {
//   id: string;
//   type: "chart" | "widget";
//   x: number;
//   y: number;
//   width: number;
//   height: number;
// }

// interface GlobalState {
//   mode: "view" | "edit";
//   widgets: Widget[];
//   setMode: (mode: "view" | "edit") => void;
//   addWidget: (widget: Widget) => void;
//   removeWidget: (id: string) => void;
//   updateWidgetPosition: (id: string, x: number, y: number) => void;
//   updateWidgetSize: (id: string, width: number, height: number) => void;
// }

// export const useGlobalStore = create<GlobalState>((set) => ({
//   mode: "view",
//   widgets: [],
//   setMode: (mode) => set({ mode }),
//   addWidget: (widget) =>
//     set((state) => ({ widgets: [...state.widgets, widget] })),
//   removeWidget: (id) =>
//     set((state) => ({
//       widgets: state.widgets.filter((widget) => widget.id !== id),
//     })),
//   updateWidgetPosition: (id, x, y) =>
//     set((state) => ({
//       widgets: state.widgets.map((widget) =>
//         widget.id === id ? { ...widget, x, y } : widget,
//       ),
//     })),
//   updateWidgetSize: (id, width, height) =>
//     set((state) => ({
//       widgets: state.widgets.map((widget) =>
//         widget.id === id ? { ...widget, width, height } : widget,
//       ),
//     })),
// }));
