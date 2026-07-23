import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-background pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            SK Mission Board
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Empowering Bihar Board students with premium, free educational resources to excel in their Class 10 board examinations.
          </p>
        </div>
        
        <div>
          <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link href="/notes" className="hover:text-purple-400 transition-colors">Free Notes</Link></li>
            <li><Link href="/videos" className="hover:text-purple-400 transition-colors">Video Lectures</Link></li>
            <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-foreground font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Patna, Bihar, India</li>
            <li>contact@skmissionboard.edu</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8 border-t border-white/10 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SK Mission Board. All rights reserved.</p>
      </div>
    </footer>
  );
}
