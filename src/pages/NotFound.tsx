import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-md w-full text-center p-8 rounded-2xl border border-border/80 bg-card card-surface shadow-2xl space-y-5">
        <div className="p-3 rounded-full bg-secondary/70 border border-border/80 w-fit mx-auto text-muted-foreground">
          <Compass className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block">
            404 / Route Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Page doesn't exist
          </h1>
          <p className="text-sm text-muted-foreground">
            The path <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-secondary text-foreground">{location.pathname}</code> was not found.
          </p>
        </div>
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90 font-medium w-full min-h-[44px]">
          <Link to="/" className="inline-flex items-center justify-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
