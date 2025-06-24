export function AnimatedBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div 
        className="absolute w-full h-full bg-no-repeat bg-center opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at center, hsl(var(--primary)/0.15) 0%, transparent 50%)
          `,
        }}
      ></div>
       <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width=%2252%22%20height=%2260%22%20viewBox=%220%200%2052%2060%22%3E%3Cdefs%3E%3Cstyle%20type=%22text%2Fcss%22%3E.st0%7Bfill%3Anone%3Bstroke%3Ahsl(var(--border))%3Bstroke-width%3A0.5%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%3E%3Cpath%20class=%22st0%22%20d=%22M25.9,0.5l25.5,14.7v29.4L25.9,59.3L0.4,44.6V15.2L25.9,0.5z%22%2F%3E%3Cpath%20class=%22st0%22%20d=%22M0.4,15.2l25.5,14.7l25.5-14.7%22%2F%3E%3Cpath%20class=%22st0%22%20d=%22M25.9,29.9v29.4%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-10"></div>
    </div>
  );
}
