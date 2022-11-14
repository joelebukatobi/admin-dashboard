export default function Button({ children, className }) {
  return (
    <button type="submit" className={`${className}`}>
      {children}
    </button>
  );
}
