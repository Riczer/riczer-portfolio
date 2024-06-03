export function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="container py-6 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Ricardo Zerpa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
