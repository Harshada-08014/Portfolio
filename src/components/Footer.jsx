

export const Footer = () => {
  return (
    <footer className="bg-card py-6 mb-3"> {/*className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">*/}
     
      <p className="text-sm  text-muted-foreground">
        
        &copy; {new Date().getFullYear()} Harshada.co. All rights reserved.
      </p>
      
    </footer>
  );
};