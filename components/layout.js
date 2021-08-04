import CustomCursor from "./custom-cursor";

export default function Layout({ children }) {
  return (
    <div>
      <CustomCursor />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
