type CopyrightProps = {
};

export default function Copyright({}: CopyrightProps) {
  return (
    <footer className="group relative Footer">
      <span>2026 © ransewhale</span>
      <span className="
        absolute bottom-full left-1/2 mb-3 -translate-x-1/2
        whitespace-nowrap rounded-lg border border-black
        bg-white px-4 py-2 text-sm
        opacity-0 transition-opacity
        group-hover:opacity-100
        after:absolute after:left-1/2 after:top-full
        after:-translate-x-1/2
        after:border-8 after:border-transparent
        after:border-t-black
        ">
        Copyright is for losers -Banksy-
      </span>
    </footer>
  );
}
