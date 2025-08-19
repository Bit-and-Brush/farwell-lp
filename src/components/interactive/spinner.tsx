export default function Spinner({ show = false }: { show?: boolean }) {
  if (!show) return null;
  return (
    <div
      className="inline-flex h-6 w-6 items-center justify-center"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="border-t-background h-6 w-6 animate-spin rounded-full border-2 border-transparent"></span>
      <span className="sr-only">A carregar…</span>
    </div>
  );
}
