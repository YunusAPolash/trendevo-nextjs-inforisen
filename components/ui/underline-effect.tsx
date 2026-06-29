function UnderlineEffect({ underlineWidth = 131 }: { underlineWidth?: number }) {
  return (
    <div
      className="relative flex h-1 w-full items-center rounded-full bg-gradient-to-r from-[#AD26FF] to-[#FF3F85]"
      style={{ width: underlineWidth }}
    >
      <div
        className="underline-effect-dot absolute -top-1 left-0 size-3 rounded-full bg-gradient-to-b from-[#AD26FF] to-[#FF3F85]"
      />
    </div>
  );
}

export default UnderlineEffect;
